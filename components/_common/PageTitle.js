export default function PageTitle(props) {
    const {title, subTitle, upperTitle, element, align} = props
    return (
        <div className="w-100 d-flex flex-column justify-content-between" style={{height: "125px", marginTop: "20px", textAlign: `${align}`}}>
            {upperTitle && <h2 style={{fontSize: "1rem"}}><b>{upperTitle}</b></h2>}
            <h1 style={{fontSize: "1.9rem"}}><b>{title}</b></h1>
            {subTitle && <h2 style={{fontSize: "1rem", letterSpacing: "1px"}}>{subTitle}</h2>}
            {element && element} 
        </div>
    )
}