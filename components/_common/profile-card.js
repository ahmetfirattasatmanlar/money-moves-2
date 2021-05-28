export default function ProfileCard(props) {
  return (
    <div>
      <div className="bg-white p-1 d-inline-block rounded-circle mb-3">
        <img
          src="/profilePicture.svg"
          alt="..."
        />
      </div>
      <h5 className="font-weight-bold mb-1">Dylan Robinsons</h5>
      <small>$dylanrobinson</small>
    </div>
  );
}
