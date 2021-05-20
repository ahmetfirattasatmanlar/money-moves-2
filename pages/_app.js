import "../styles/App.scss";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-dark">
      <div
        className="mx-auto bg-gradient"
        style={{ maxWidth: "25rem", height: "100vh" }}
      >
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
