export default function ActivityCard() {
    return (
        <div className="d-flex align-items-center" style={{width: "80%", height: "15%", margin: "10px"}}>
            <img src="/transferTo.svg"/>
            <div className="d-flex flex-column align-items-start justify-content-end" style={{marginLeft: "10px", width: "70%", height: "100%"}}>
                <h3 style={{fontSize: "1rem"}} className="d-flex flex-column justify-content-center align-items-start"><b>Transfer to bank</b></h3>
                <p style={{fontSize: "0.7rem"}} className="d-flex flex-column justify-content-center align-items-start">Nov 23, 2021 10:33am</p>
            </div>
            <div className="p-4 pt-2 d-flex align-items-center" style={{height: "100%"}}>
                <p>-$520.74</p>
            </div>
        </div>
    )
}