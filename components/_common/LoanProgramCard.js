export default function LoanProgramCard(props) {
    const { src, cardName } = props
    return (
        <div className="d-flex flex-column justify-content-around align-items-center w-75" >
            <button type="button" className="btn btn-link" style={{textDecoration: "none"}}>
                <img className="border-circle shadow" src={src} style={{height: "125px", width: "125px"}}/>
                <p className="m-0" style={{fontSize: "1rem", color: "#000000"}}><b>{cardName}</b></p>
            </button>
        </div>
    )
}