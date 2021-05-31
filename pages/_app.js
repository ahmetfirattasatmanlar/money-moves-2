import "../styles/App.scss";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div
      className="mx-auto bg-gradient col-sm-6 px-0 "
      style={{ height: "100vh", position: 'relative' }}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
