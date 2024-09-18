import React from "react";
import { useNavigate } from "react-router-dom";
import Root from "../Root";
import img2 from "../../Assets/img2.jpg";
import { FaUser } from "react-icons/fa";
import logo from "../../Assets/logo.jpg";

function TaskPage() {
  const navigate = useNavigate();

  const handleAboutTaskNavigation = () => {
    navigate("/about-task"); // Navigate to the About Task page
  };

  const handleWithdrawalNavigation = () => {
    navigate("/withdral");
  };

  return (
    <Root>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="w-full max-w-4xl p-6 mx-auto ">
          <div className="flex flex-col items-center text-center sm:block md:hidden">
            <img src={logo} alt="Lokardo Logo" className="h-20 " />
          </div>
        </div>
        {/* User Info Section */}
        <div className="flex flex-col items-center py-8 lg:mt-0 ">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full">
              <button className="text-gray-500">
                <FaUser className="text-4xl" />
                <span className="block text-sm">Photo</span>
              </button>
            </div>
          </div>

          <input
            type="text"
            className="px-4 py-2 mt-0 text-center bg-white shadow"
            placeholder="User name"
          />
          <div className="flex mt-8 space-x-14">
            <button className="w-24 py-2 bg-gray-200 shadow lg:w-48 lg:px-6 md:w-48 ">
              Wallet
            </button>
            <button
              className="w-24 py-2 bg-gray-200 shadow lg:w-48 lg:px-6 md:w-48"
              onClick={handleWithdrawalNavigation}
            >
              Withdrawal
            </button>
          </div>
          <div className="flex mt-8 space-x-14">
            <button className="w-24 py-2 bg-gray-200 shadow lg:w-48 lg:px-6 md:w-48">
              History
            </button>
            <button
              className="w-24 py-2 bg-gray-200 shadow lg:w-48 lg:px-6 md:w-48"
              onClick={handleAboutTaskNavigation}
            >
              About Task
            </button>
          </div>
        </div>

        {/* Task Section */}
        <div className="px-4 py-8 text-white ">
          <h2 className="py-1 mb-4 text-3xl font-bold text-center bg-black rounded-md">
            My Task
          </h2>
          <div className="flex flex-col items-center">
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full ml-14">
                <button className="text-gray-500">
                  <FaUser className="text-4xl " />
                  <span className="block text-sm">Photo</span>
                </button>
              </div>
              <div className="flex flex-col">
                <button className="w-40 py-1 mt-6 ml-6 text-sm font-bold text-center text-black bg-white">
                  User Name
                </button>
                <button className="py-0 mt-6 text-sm font-bold text-center text-white bg-black ml-11 w-28">
                  Referral Code
                </button>
              </div>

              <div>
                <button className="w-40 py-1 ml-6 text-sm font-bold text-center text-black bg-amber-500">
                  A9****P3L
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Task Complete Section */}
        <div className="py-1 mt-8 ml-6 text-center text-white bg-green-500 rounded-md w-44">
          <h2 className="text-xl font-bold">TASK COMPLETE</h2>
        </div>

        {/* Thank You Message */}
        <div className="px-8 py-4 text-sm text-center">
          <p className="text-white">
            "Thank you for choosing Lokardo as your partner in progress! We
            trust you enjoyed the journey and look forward to welcoming you back
            for your next challenge."
          </p>
        </div>
      </div>
    </Root>
  );
}

export default TaskPage;
