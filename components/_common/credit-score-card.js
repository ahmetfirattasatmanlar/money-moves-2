export default function CreditScoreCard({ click, name = "Good", interestRate = 0, monthlyPayment = 0, active = false }) {
    const sendName = () => {
        click(name);
    };

    return (
        <div className={`card d-flex justify-content-center rounded-lg ${active ? "active-card" : ""}`} style={{ cursor: "pointer" }} onClick={sendName}>
            <div className="card-body pb-0 w-100 d-flex flex-column align-items-center">
                <h5 className="card-title h6">{name}</h5>
                <p className="m-0 card-text">{interestRate}%</p>
                <p className="m-0 card-text text-center" style={{ fontSize: "0.7rem" }}>
                    <small className="text-muted">Interest Rate</small>
                </p>
            </div>
            <div className="card-body w-100 d-flex flex-column align-items-center" style={{ textAlign: "center" }}>
                <p className="m-0 card-text">${monthlyPayment}</p>
                <p className="m-0 card-text text-muted" style={{ fontSize: "0.7rem" }}>
                    <small>Monthly Payment</small>
                </p>
            </div>
        </div>
    );
}
