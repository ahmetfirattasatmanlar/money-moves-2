import { useRouter } from "next/router";

export default function ContentBody({ children }) {
  const route = useRouter();
  const transfer = route.pathname === "/transfer";

  return (
    <div
      className="d-flex flex-column justify-content-evenly align-items-center"
      style={{
        backgroundColor: `${transfer ? "transparent" : "#ffffff"}`,
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
