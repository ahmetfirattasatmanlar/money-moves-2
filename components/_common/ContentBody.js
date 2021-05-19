
export default function ContentBody({children}) {
    return (
        <div className="d-flex flex-column justify-content-evenly align-items-center" style={{backgroundColor: "#ffffff", minHeight: "80vh", width: "100vw", borderRadius: "2rem"}}>
          {children}
        </div>
    )
}