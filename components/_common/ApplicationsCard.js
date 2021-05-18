export default function ApplicationsCard() {
    return (
        <div className="d-flex border" style={{width: "80%", margin: "10px"}}>
            <img src="/powerSports.svg"/>
            <div className="d-flex">
                <div>
                    <p>$50,000</p>
                    <p>Power Sport</p>
                </div>
                <div>
                    <p>Pending</p>
                    <p>Nov 23, 2021 10:33am</p>
                </div>
            </div>
        </div>
    )
}