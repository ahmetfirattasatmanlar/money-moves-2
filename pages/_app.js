import "../styles/App.scss";
import React from "react";

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-gradient px-0" style={{ height: "100vh", position: "relative" }}>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
