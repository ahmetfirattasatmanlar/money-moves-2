export default function ContentBody({ children }) {
  return (
    <div
      className="d-flex flex-column justify-content-evenly align-items-center"
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        width: "100%",
        borderRadius: "2rem",
        overflowX: "hidden",
      }}
    >
      {children}
    </div>
  );
}
