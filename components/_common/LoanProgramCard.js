export default function LoanProgramCard(props) {
  const { src, cardName, click } = props;
  return (
    <div
      className="d-flex flex-column justify-content-around align-items-center border"
      style={{ width: "11.5rem" }}
    >
      <button
        type="button"
        className="btn btn-link"
        style={{ textDecoration: "none" }}
        onClick={click}
      >
        <img
          className="border-circle shadow"
          src={src}
          style={{ height: "15vh", width: "15vw" }}
        />
        <p className="mt-3 mb-0" style={{ fontSize: "1rem", color: "#000000" }}>
          <b>{cardName}</b>
        </p>
      </button>
    </div>
  );
}
