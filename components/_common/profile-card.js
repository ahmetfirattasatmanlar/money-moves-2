export default function ProfileCard(props) {
  console.log(props);
  return (
    <div
      className="card bg-transparent text-center d-flex flex-column align-items-center"
      style={{ width: "100% ", height: "20vh", border: "none" }}
    >
      <img
        src="/profilePicture.svg"
        className="card-img-top w-50"
        alt="..."
        style={{ height: "70%" }}
      />
      <div className="card-body p-0 w-50 h-25">
        <h5 className="card-title text-white" style={{ fontSize: "1rem" }}>
          <b>Dylan Robinson</b>
        </h5>
        <p className="card-text text-white">
          <small>$dylanrobinson</small>
        </p>
      </div>
    </div>
  );
}
