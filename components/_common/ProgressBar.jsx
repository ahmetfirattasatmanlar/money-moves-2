export default function ProgressBar(props) {
  const { progress } = props;
  return (
    <div className="progress w-75 border mt-2" style={{ height: "10px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${progress}` }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}
