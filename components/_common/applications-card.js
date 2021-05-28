export default function ApplicationsCard({ status = "", date = "", applicationType = "", amount = "" }) {

    const statusColor = () => {
        if (status === "Pending") "#f19824"
        else if (status === "Rejected") "#f55053"
        else "#00b167"
    }

    return (
        <div className="d-flex align-items-center py-3">
            {/* <img src={src} /> */}
            {applicationType === "Power Sports" ? <img src="/icon-power-sports.svg" /> : undefined}
            {applicationType === "Cash Loan" ? <img src="/icon-cash-loan.svg" /> : undefined}
            <div className="d-flex flex-column align-items-start ml-3">
                <p className="m-0"><strong>${amount}</strong></p>
                <small>{applicationType}</small>
            </div>
            <div className="d-flex flex-column align-items-end ml-auto">
                <p className="m-0" style={{ color: `${statusColor()}` }}>{status}</p>
                <small>{date}</small>
            </div>
        </div >
    )
}
