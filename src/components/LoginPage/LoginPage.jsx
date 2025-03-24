import axios from "axios";
import React, { useState } from "react";
import { FaCheckCircle, FaLock, FaMobileAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import img2 from "../../Assets/img2.jpg";
import logo from "../../Assets/logo.jpg";
import Root from "../Root";
import { localUrl } from "../../constant/constant";
//import { AuthContext } from "../../context/AuthContext";
import { ToastContainer } from "react-toastify";
// import const from ""
import { useSnackbar } from "notistack";

export const LoginPage = () => {
  // State for form fields and validation

  const [mobile, setMobile] = useState("");

  const [password, setPassword] = useState("");
  //const [errors, setErrors] = useState({});

  const [isPhoneValid, setIsPhoneVaild] = useState(false);
  const [isPasswordValid, setIsPasswordVaild] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  //const { login } = useContext(AuthContext);

  // Handle image selection

  const handlePhoneValidate = (e) => {
    setMobile(e.target.value);

    if (e.target.value.length === 10) {
      setIsPhoneVaild(true);
    } else {
      setIsPhoneVaild(false);
    }
  };

  const handlePasswordValidate = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length >= 6) {
      setIsPasswordVaild(true);
    } else {
      setIsPasswordVaild(false);
    }
  };

  // Form validation function
  /*const validate = () => {
    let isValid = true;
    let errors = {};


    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobile || !mobileRegex.test(mobile)) {
      errors.mobile = "Please enter a valid 10-digit mobile number.";
      isValid = false;
    }

   

    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };*/

  // Send OTP to the provided mobile number

  const handelLogIn = async () => {
    try {
      if (isPasswordValid && isPhoneValid) {
        const response = await axios.post(
          `${localUrl}/auth/login`,
          {
            phone: mobile,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = response.data;
        if (response.status === 200) {
          enqueueSnackbar(response.data.message, { variant: "success" });
          navigate(`/task`);
          console.log(data.token);
          localStorage.setItem("token", data.token);
        }
      }
    } catch (error) {
      if (error.response.status === 400) {
        // Display the error message from the API
        console.error("Error 400: ", error.response.data.message);
        enqueueSnackbar(error.response.data.message, { variant: "error" }); // Show the error message in an alert
      } else if (error.response.status === 500) {
        enqueueSnackbar(
          `Server responded with status: ${error.response.status}`
        );
      }
      console.error("Error sending OTP:", error.message);
    }
  };

  return (
    <Root>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="w-full max-w-4xl p-6 mx-auto ">
          <div className="flex flex-col items-center mb-6 text-center sm:block md:hidden">
            <img src={logo} alt="Lokardo Logo" className="h-20" />
          </div>
        </div>
        {/* Registration Button for Small Screens */}

        {/* Registration Form */}
        <form className="w-full max-w-md p-4 mx-auto">
          <div className="flex justify-center mb-6"></div>
          <div className="space-y-4">
            <div className="relative flex flex-col py-2 border-gray-300">
              <input
                className={`w-full px-10 py-3 text-sm placeholder-gray-500 border-2 rounded-full focus:outline-none ${"border-gray-300"}`}
                type="tel"
                placeholder="Please enter your mobile number"
                value={mobile}
                onChange={handlePhoneValidate}
              />

              <FaMobileAlt
                style={{
                  fontSize: "1.25rem",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
                className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-4"
              />

              {isPhoneValid && (
                <FaCheckCircle
                  style={{
                    fontSize: "1.25rem",
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                  className="absolute text-green-500 transform -translate-y-1/2 right-4 top-1/2"
                />
              )}
            </div>

            <div className="relative">
              <FaLock
                style={{
                  fontSize: "1.25rem",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
                className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-4"
              />
              <input
                className={`w-full px-10 py-3 text-sm placeholder-gray-500 border-2 rounded-full focus:outline-none ${
                  isPasswordValid
                    ? "border-red-500 placeholder-red-500"
                    : "border-gray-300"
                }`}
                type="password"
                placeholder={"Please enter your Password"}
                value={password}
                onChange={handlePasswordValidate}
              />
              {isPasswordValid && (
                <FaCheckCircle
                  style={{
                    fontSize: "1.25rem",
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                  className="absolute text-green-500 transform -translate-y-1/2 right-4 top-1/2"
                />
              )}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-10">
            {/* Payment Section */}
            <div className="flex flex-col space-y-2 ">
              {/* <button className="py-2 mx-auto mt-6 mb-6 text-xl font-bold text-black bg-white rounded-full w-52 ">
                Payment Section
              </button> */}

              {/* Payment options */}
              {/* <div className="flex flex-col space-y-4">
                <button className="w-48 py-1 mx-auto text-black bg-white rounded-full">
                  Pay via UPI
                </button>
                <button className="w-48 py-1 mx-auto text-black bg-white rounded-full">
                  Pay via QR
                </button>
              </div> */}

              <button
                onClick={handelLogIn}
                type="button"
                className="w-56 py-2 mt-32 font-bold text-yellow-600 bg-black rounded-full lg:w-80 lg:mt-0"
              >
                Log In
              </button>
            </div>

            <p className="mt-2 text-sm text-gray-300">
              Create Account?{" "}
              <Link to="/register" className="text-yellow-600">
                Register
              </Link>
            </p>
          </div>
        </form>
        {/* Terms & Conditions */}
        <div className="mb-12 text-center ">
          <Link to="/terms-and-conditions" className="text-white underline ">
            Terms & Condition
          </Link>
        </div>
      </div>
    </Root>
  );
};

export default LoginPage;
