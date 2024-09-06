import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Layout({ childern }) {
  return (
    <div>
      <Navbar />
      <div className="container">{childern}</div>
      <Footer />
    </div>
  );
}

export default Layout;
