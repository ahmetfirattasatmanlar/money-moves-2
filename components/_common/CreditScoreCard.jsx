export default function CreditScoreCard() {
  return (
    <div
      className="card d-flex justify-content-center"
      style={{ width: "calc(33% - 25px)", borderRadius: "0.5rem" }}
    >
      <div
        className="card-body w-100 d-flex flex-column align-items-center"
        style={{ textAlign: "center" }}
      >
        <h5 className="card-title">Good</h5>
        <p className="m-0 card-text">14,99%</p>
        <p className="m-0 card-text" style={{ fontSize: "0.7rem" }}>
          Interes Rate
        </p>
      </div>
      <div
        className="card-body w-100 d-flex flex-column align-items-center"
        style={{ textAlign: "center" }}
      >
        <p className="m-0 card-text">$299.99</p>
        <p className="m-0 card-text" style={{ fontSize: "0.7rem" }}>
          Monthly Payment
        </p>
      </div>
    </div>
  );
}
