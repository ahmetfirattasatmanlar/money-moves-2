export default function LoanProgramCard(props) {
  const { src, cardName, click } = props;
  return (
    <div className="d-flex flex-column justify-content-around align-items-center w-75">
      <button
        type="button"
        className="btn btn-link"
        style={{ textDecoration: "none" }}
        onClick={click}
      >
        <img
          className="border-circle shadow"
          src={src}
          style={{ height: "10rem", width: "10rem" }}
        />
        <p className="m-0" style={{ fontSize: "1rem", color: "#000000" }}>
          <b>{cardName}</b>
        </p>
      </button>
    </div>
  );
}
