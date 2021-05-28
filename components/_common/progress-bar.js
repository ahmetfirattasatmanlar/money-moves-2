export default function ProgressBar({ progress = 0 }) {
  return (
    <div className="progress w-100 mt-2" style={{ height: ".8rem" }}>
      <div
        className="progress-bar bg-info"
        role="progressbar"
        style={{ width: `${progress}` }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}
