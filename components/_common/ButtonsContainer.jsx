export default function ButtonContainer(props) {
  const { click } = props;
  console.log(props);
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        height: "100px",
        maxWidth: "25rem",
      }}
      className="w-100 bg-white d-flex align-items-center justify-content-around"
    >
      <button
        className="btn btn border d-flex align-items-center justify-content-center"
        type="button"
        value="back"
        onClick={click}
        style={{
          backgroundColor: "#ADC7CE",
          borderRadius: "1.5rem",
          width: "40%",
        }}
      >
        <img src="/caret.svg" alt="" style={{ transform: "rotate(180deg)" }} />
        Back
      </button>
      <button
        className="btn btn border d-flex align-items-center justify-content-center"
        type="button"
        value="next"
        onClick={click}
        style={{
          backgroundColor: "#0bb8e4",
          borderRadius: "1.5rem",
          width: "40%",
        }}
      >
        Next
        <img src="/caret.svg" alt="" />
      </button>
    </div>
  );
}
