import React from "react";
import logo from "../../Assets/logo.jpg";

function Header() {
  return (
    <>
      {/* Responsive Black Header with Logo - Only for Medium and Large Screens */}
      <div className="items-center justify-center hidden w-full px-4 bg-black md:flex md:px-8">
        <div className="py-4 text-center">
          <img src={logo} alt="Lokardo Logo" className="h-12 mx-auto md:h-14" />
        </div>
      </div>
    </>
  );
}

export default Header;
