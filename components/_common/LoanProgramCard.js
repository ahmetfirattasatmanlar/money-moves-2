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
          style={{ height: "5rem", width: "5rem" }}
        />
        <p className="mt-3 mb-0" style={{ fontSize: "1rem", color: "#000000" }}>
          <b>{cardName}</b>
        </p>
      </button>
    </div>
  );
}
