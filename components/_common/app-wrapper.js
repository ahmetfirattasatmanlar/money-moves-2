import Nav from "./nav";

export default function AppWrapper({ nav, withButtons, click, children }) {
  return (
    <div
      // style={{
      //   background: "linear-gradient(to right, #2b88d8, #001f78)",
      // }}
      className="d-flex flex-column justify-content-between"
    >
      {children}
      {nav ? <Nav /> : undefined}
    </div>
  );
}
