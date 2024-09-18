import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Root = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
