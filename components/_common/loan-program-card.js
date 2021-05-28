export default function LoanProgramCard(props) {
  const { src, cardName, click } = props;
  return (
    <div className="col-6">
      <button
        type="button"
        className="btn btn-link"
        style={{ textDecoration: "none" }}
        onClick={click}
        value={1}
      >
        <img
          className="rounded-circle shadow w-100"
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
