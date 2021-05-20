export default function PageTitle(props) {
  const { title, subTitle, upperTitle, element, align } = props;
  console.log(props);
  return (
    <div
      className={`d-flex flex-column justify-content-between align-items-${align}`}
      style={{ width: "90%", height: "125px", marginTop: "20px" }}
    >
      {upperTitle && (
        <h2 style={{ fontSize: "1rem" }}>
          <b>{upperTitle}</b>
        </h2>
      )}
      <h1 style={{ fontSize: "1.9rem" }}>
        <b>{title}</b>
      </h1>
      {subTitle && (
        <h2 style={{ fontSize: "1rem", letterSpacing: "1px" }}>{subTitle}</h2>
      )}
      {element && element}
    </div>
  );
}
