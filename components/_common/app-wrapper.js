import Nav from "./nav";
import ButtonsContainer from "./ButtonsContainer";

export default function AppWrapper(props) {
  const { withNav, withButtons, click, children } = props;
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(to right, #2b88d8, #001f78)",
      }}
      className="d-flex flex-column justify-content-between"
    >
      {children}
      {withNav && <Nav />}
      {withButtons && <ButtonsContainer click={click} />}
    </div>
  );
}
