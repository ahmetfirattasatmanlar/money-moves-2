export default function ApplicationsCard(props) {
    const{ src, status, date, cardName, amount } = props

    const statusColor = () => {
        if(status === "Pending") {
            return "#f19824"
        }

        if(status === "Rejected") {
            return "#f55053"
        }

        return "#00b167"
    }

    return (
        <div className="d-flex justify-content-around align-items-center" style={{width: "100%", margin: "10px"}}>
            <img src={src} style={{width: "50px", height: "50px"}}/>
            <div className="d-flex justify-content-around w-75">
                <div className="d-flex flex-column align-items-start">
                    <p><b>${amount}</b></p>
                    <p style={{fontSize: "0.8rem"}}>{cardName}</p>
                </div>
                <div className="d-flex flex-column align-items-end">
                    <p style={{color: `${statusColor()}`}}>{status}</p>
                    <p style={{fontSize: "0.8rem"}}>{date}</p>
                </div>
            </div>
        </div>
    )
}