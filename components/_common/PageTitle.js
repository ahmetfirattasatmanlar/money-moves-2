export default function PageTitle(props) {
  const { title, subTitle, upperTitle, element, align } = props;
  return (
    <div
      className={`d-flex flex-column justify-content-between align-items-${align} border`}
      style={{
        width: "90%",
        height: "12vh",
        marginTop: "1rem",
        position: "relative",
      }}
    >
      {upperTitle && (
        <h2 style={{ fontSize: "0.7rem" }}>
          <b>{upperTitle}</b>
        </h2>
      )}
      <h1 style={{ fontSize: "1.3rem" }}>
        <b>{title}</b>
      </h1>
      {subTitle && (
        <h2 style={{ fontSize: "1rem", letterSpacing: "0.1rem" }}>
          {subTitle}
        </h2>
      )}
      {element && element}
    </div>
  );
}
