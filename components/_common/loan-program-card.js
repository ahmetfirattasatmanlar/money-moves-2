export default function LoanProgramCard(props) {
  const { src, cardName, click } = props;
  return (
    <div
      className="d-flex flex-column justify-content-around align-items-center"
      style={{ width: "40%" }}
    >
      <button
        type="button"
        className="btn btn-link"
        style={{ textDecoration: "none" }}
        onClick={click}
        value={1}
      >
        <img
          className="border-circle shadow"
          src={src}
        />
        <p
          className="mt-3 mb-0"
        >
          <b>{cardName}</b>
        </p>
      </button>
    </div>
  );
}
