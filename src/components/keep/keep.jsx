import React,{useContext, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Root from "../Root";
import img2 from "../../Assets/img2.jpg";
import { FaUser } from "react-icons/fa";
import logo from "../../Assets/logo.jpg";
import { AuthContext } from "../../context/AuthContext";

function TaskPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user,fetchProfile } = useContext(AuthContext);
 
  const handleAboutTaskNavigation = () => {
    navigate("/about-task"); // Navigate to the About Task page
  };

  const handleWithdrawalNavigation = () => {
    navigate("/withdral");
  };
  useEffect(() => {
    fetchProfile()
  },[])

  
 
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
        <div className="flex flex-col items-center py-8 mt-10 lg:mt-0 ">
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
            placeholder="hcbcb"
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
                  {
                    user !== null ? user.user.name : "undfined"
                  }
                </button>
                <button className="py-0 mt-6 text-sm font-bold text-center text-white bg-black ml-11 w-28">
                  Referral Code
                </button>
              </div>

              <div>
                <button className="w-40 py-1 ml-6 text-sm font-bold text-center text-black bg-amber-500">
                  { user !== null ? user.user.referralCode : "undfined"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* user section */}
        <div className="relative">
          {/* Vertical and horizontal white bars */}
          <div className="absolute w-1 h-10 bg-white lg:top-[-31px] lg:ml-[360px] top-[-32px] ml-[157px]"></div>
          <div className="lg:w-[700px] h-1  bg-white mt-2 w-[300px]"></div>
          {/* Person nodes and vertical lines */}
          <div className="w-1 lg:h-32 bg-white lg:ml-[-2px] lg:mt-[-4px] h-20 ">
            {/* Person 1 */}
            <div className="flex flex-col items-center">
              <div className="justify-center text-center w-20 ml-5 mt-[80px] text-lg font-bold text-black bg-gray-100 lg:px-4 lg:py-1 lg:mt-24 lg:text-3xl lg:w-44">
                Person-1
              </div>
              <div className="w-24 ml-6 text-xs text-center text-white bg-red-500 lg:px-4 lg:py-1 lg:w-36 lg:mr-5 lg:text-sm">
                Phone Number
              </div>
              <div className="mt-1">
                <span className="text-2xl text-green-500">✔</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Person nodes and vertical lines */}
          <div className="w-1 lg:h-32 bg-white lg:ml-[700px] lg:mt-[-128px] ml-[298px] mt-[-83px] h-20">
            {/* Person 4*/}
            <div className="flex flex-col items-center">
              <div className="justify-center w-20 mt-[80px] text-lg font-bold text-center text-black bg-gray-100 lg:px-4 lg:py-1 lg:text-3xl lg:w-44 mr-3">
                Person-4
              </div>
              <div className="w-24 mr-4 text-xs text-center text-white bg-red-500 lg:px-4 lg:py-1 lg:w-36">
                Phone Number
              </div>
              <div className="mt-1">
                <span className="text-2xl text-green-500">✔</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Person nodes and vertical lines */}
          <div className="w-1 lg:h-32 bg-white lg:ml-[700px] lg:mt-[-128px] ml-[298px] mt-[-83px] h-20">
            {/* Person 4*/}
            <div className="flex flex-col items-center">
              <div className="justify-center w-20 mt-[80px] text-lg font-bold text-center text-black bg-gray-100 lg:px-4 lg:py-1 lg:text-3xl lg:w-44 mr-3">
                Person-4
              </div>
              <div className="w-24 mr-4 text-xs text-center text-white bg-red-500 lg:px-4 lg:py-1 lg:w-36">
                Phone Number
              </div>
              <div className="mt-1">
                <span className="text-2xl text-green-500">✔</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Person nodes and vertical lines */}
          <div className="w-1 lg:h-96 bg-white lg:mr-96 lg:mt-[-128px] h-52 mt-[-83px] mr-40">
            {/* Person 4*/}
            <div className="flex flex-col items-center">
              <div className="justify-center w-20 mt-[205px] text-lg font-bold text-center text-black bg-gray-100 lg:px-4 lg:py-1 lg:text-3xl lg:w-44 mr-3 lg:mt-[380px]">
                Person-2
              </div>
              <div className="w-24 mr-4 text-xs text-center text-white bg-red-500 lg:px-4 lg:py-1 lg:w-36">
                Phone Number
              </div>
              <div className="mt-1">
                <span className="text-2xl text-red-500">?</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Person nodes and vertical lines */}
          <div className="w-1 bg-white lg:h-96 lg:ml-96 lg:mt-[-380px] h-52 mt-[-208px] ml-40">
            {/* Person 4*/}
            <div className="flex flex-col items-center">
              <div className="justify-center w-20 mt-[205px] text-lg font-bold text-center text-black bg-gray-100 lg:px-4 lg:py-1 lg:text-3xl lg:w-44 mr-3 lg:mt-[380px]">
                Person-3
              </div>
              <div className="w-24 mr-4 text-xs text-center text-white bg-red-500 lg:px-4 lg:py-1 lg:w-36">
                Phone Number
              </div>
              <div className="mt-1">
                <span className="text-2xl text-red-500">?</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="justify-center lg:w-40 lg:px-4 lg:py-1 text-[9px] lg:font-bold text-white bg-black  mt-[-150px] w-24 text-center lg:text-[15px] lg:mt-[-300px]">
            TAP TO SHARE REFERRAL LINK
          </div>
          <p className="mt-2 text-[7px] text-gray-100  lg:text-lg ">
            - COMPLETE YOUR TASK WITHIN 10 DAY-
          </p>
        </div>
      
        {/* Task Complete Section */}
        <div className="py-1 ml-6 text-center text-white bg-green-500 rounded-md w-44 mt-28">
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