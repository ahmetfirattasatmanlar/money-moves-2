export default function TransferCard() {
  return (
    <div
      className="card mt-4 d-flex align-items-center"
      style={{ width: "90%", height: "7vh", borderRadius: "1rem" }}
    >
      <div className="row g-0 d-flex align-items-center h-100 w-100">
        <div className="col-md-4 h-100 w-25 d-flex justify-content-center align-items center">
          <img src="/hsbc.svg" alt="..." />
        </div>
        <div className="col-md-8 h-100 p-0 w-50 d-flex">
          <div className="card-body h-100 w-100 p-0 d-flex flex-column">
            <h5
              className="card-title m-0 h-50 d-flex align-items-center"
              style={{ fontSize: "1rem" }}
            >
              <b>HSBC</b>
            </h5>
            <p
              className="card-text m-0 h-50 d-flex align-items-center"
              style={{ fontSize: "0.7rem" }}
            >
              <b>**** **** **** 1234</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
