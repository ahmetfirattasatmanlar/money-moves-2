export default function ActivityCard(props) {
  const { src, amount, activityType, date } = props;
  return (
    <div
      className="d-flex align-items-center p-2"
      style={{ width: "80%", height: "15%", margin: "10px" }}
    >
      <img src={src} />
      <div
        className="d-flex flex-column align-items-start justify-content-end"
        style={{ marginLeft: "10px", width: "70%", height: "100%" }}
      >
        <h3
          style={{ fontSize: "1rem" }}
          className="d-flex flex-column justify-content-center align-items-start"
        >
          <b>{activityType}</b>
        </h3>
        <p
          style={{ fontSize: "0.7rem" }}
          className="d-flex flex-column justify-content-center align-items-start m-0"
        >
          {date}
        </p>
      </div>
      <div
        className="p-4 pt-2 d-flex align-items-center justify-content-center"
        style={{ height: "100%" }}
      >
        <p className="m-0">-${amount}</p>
      </div>
    </div>
  );
}
