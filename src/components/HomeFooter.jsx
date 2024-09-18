import React from "react";
import Footer from "./Footer/Footer";

function HomeFooter({ children }) {
  return (
    <div>
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default HomeFooter;
