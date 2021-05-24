import { useRouter } from "next/router";

export default function PageTitle(props) {
  const { title, subTitle, upperTitle, element, align } = props;
  const route = useRouter();

  const transfer = route.pathname === "/transfer";

  const color = transfer ? "#fff" : "#000";
  const height = transfer ? "6vh" : "12vh";
  return (
    <div
      className={`d-flex flex-column justify-content-between align-items-${align} m-2`}
      style={{
        width: "90%",
        height: `${height}`,
        position: "relative",
      }}
    >
      {upperTitle && (
        <h2 style={{ fontSize: "0.7rem" }}>
          <b>{upperTitle}</b>
        </h2>
      )}

      <h1 style={{ fontSize: "1.3rem", color: `${color}` }}>
        <b>{title}</b>
      </h1>
      {subTitle && (
        <h2 style={{ fontSize: "1rem" }}>
          <small>{subTitle}</small>{" "}
        </h2>
      )}
      {element && element}
    </div>
  );
}
