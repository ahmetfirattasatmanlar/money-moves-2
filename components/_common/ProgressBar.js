export default function ProgressBar(props) {
  const { progress } = props;
  return (
    <div class="progress w-75 border mt-4" style={{ height: "10px" }}>
      <div
        class="progress-bar"
        role="progressbar"
        style={{ width: `${progress}` }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}
