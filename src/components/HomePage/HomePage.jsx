import React from "react";
import { useNavigate } from "react-router-dom";
import webbg from "../../Assets/webbg.jpg";
import img1 from "../../Assets/img1.jpg";
import HomeFooter from "../HomeFooter";

function HomePage() {
  const navigate = useNavigate(); // Step 1: Initialize the useNavigate hook

  const handleStartClick = () => {
    navigate("/register"); // Step 2: Navigate to the register page on button click
  };

  return (
    <HomeFooter>
      <div className="relative h-screen bg-gray-800">
        {/*web Background Image */}
        <img
          src={webbg}
          alt="webbg"
          className="absolute inset-0 hidden object-cover w-full h-full lg:block md:block"
        />

        <div>
          {/* Background Image - Only for small screens */}
          <img
            src={img1}
            alt="img1"
            className="absolute inset-0 block object-cover w-full h-full lg:hidden"
          />
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center text-white h-[580px]  ">
          <p className="text-xl font-bold mt-52 lg:text-3xl lg:mt-12">
            Start Your Investment
            <br /> Journey by Just <br />
            Rs: 1000
          </p>
          <button
            className="px-6 py-1 mt-2 font-semibold text-black bg-green-500 rounded-full lg:mt-6 lg:py-3"
            onClick={handleStartClick} // Step 3: Attach the click event handler
          >
            Let’s Start
          </button>
          <h1 className="text-2xl font-bold text-black lg:mt-6">LOKARDO</h1>
          <p className="mt-1 font-bold lg:text-2xl lg:mt-4 ">
            Complete Task, Double Your Money
          </p>
        </div>

        {/* Footer Button */}
        <div className="absolute left-0 right-0 flex justify-center bottom-4">
          <button
            className="px-10 py-1 font-semibold text-black bg-green-500 rounded-full shadow-black lg:py-3 "
            onClick={handleStartClick} // Step 3: Attach the click event handler
          >
            Let’s Start
          </button>
        </div>
      </div>
    </HomeFooter>
  );
}

export default HomePage;
