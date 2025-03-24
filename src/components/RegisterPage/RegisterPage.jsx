import axios from "axios";
import React, { useState } from "react";
import {
  FaCamera,
  FaCheckCircle,
  FaEnvelope,
  FaLock,
  FaMobileAlt,
  FaUser,
  FaUserFriends,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import img2 from "../../Assets/img2.jpg";
import logo from "../../Assets/logo.jpg";
import Root from "../Root";
import { localUrl } from "../../constant/constant";
import { ToastContainer } from "react-toastify";
// import const from ""
import { useSnackbar } from "notistack";

export const RegisterPage = () => {
  // State for form fields and validation
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  //const [errors, setErrors] = useState({});

  const [isNameValid, setIsNameVaild] = useState(false);
  const [isPhoneValid, setIsPhoneVaild] = useState(false);
  const [isOTPValid, setIsOTPVaild] = useState(false);
  const [isPasswordValid, setIsPasswordVaild] = useState(false);
  const [isReferralCodeValid, setIsReferralCodeVaild] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  
  const navigate = useNavigate();

  // Handle image selection
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const result = event.target.result;
          if (typeof result === 'string') {
            setSelectedFile(file);
            setImageUrl(result);
          } else {
            console.log('Unexpected file reader result type.');
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameValidate = (e) => {
    setName(e.target.value);

    if (e.target.value.length >= 3) {
      setIsNameVaild(true);
    } else {
      setIsNameVaild(false);
    }
  };

  const handlePhoneValidate = (e) => {
    setMobile(e.target.value);

    if (e.target.value.length === 10) {
      setIsPhoneVaild(true);
    } else {
      setIsPhoneVaild(false);
    }
  };

  const handleOTPValidate = (e) => {
    setOtp(e.target.value);

    if (e.target.value.length === 6) {
      setIsOTPVaild(true);
    } else {
      setIsOTPVaild(false);
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

  const handleRefferValidate = (e) => {
    setReferralCode(e.target.value);

    if (e.target.value.length >= 3) {
      setIsReferralCodeVaild(true);
    } else {
      setIsReferralCodeVaild(false);
    }
  };

  // Form validation function
 /* const validate = () => {
    let isValid = true;
    let errors = {};

    if (!name) {
      errors.name = "Name is required.";
      isValid = false;
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobile || !mobileRegex.test(mobile)) {
      errors.mobile = "Please enter a valid 10-digit mobile number.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Please enter a valid code";
      isValid = false;
    }

    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    if (referralCode.length < 6) {
      errors.referralCode = "Referral Code is  required.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };*/

  // Send OTP to the provided mobile number
  const handleSendOtp = async () => {
    try {
      if (isNameValid && isPhoneValid) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", mobile);

        // Append image file correctly
        if (selectedFile) {
          formData.append('image', selectedFile); // Only append if a file is selected
        }
        const response = await axios.post(
          `${localUrl}/auth/send-otp`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        

        

        if (response.status === 200) {
          setOtpSent(true);
          enqueueSnackbar(response.data.message, { variant: "success" });
        } else {
          console.log("Failed to send OTP.");
        }
      } else {
        enqueueSnackbar("Please enter a valid inputs", { variant: "error" });
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
      console.error("Error sending OTP:", error.message); // More informative error message
    }
  };

  const handleVerifyOtp = async () => {
    try {
      if (isNameValid && isPhoneValid && isOTPValid) {
        const response = await axios.post(
          `${localUrl}/auth/verify-otp`,
          {
            phone: mobile,

            otp: otp,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = response.data;

        console.log(data);

        if (response.status === 200) {
          setOtpVerified(true);

          enqueueSnackbar(response.data.message, { variant: "success" });
        } else {
          setOtpVerified(false);
          console.log("Failed to send OTP.");
        }
      } else {
        enqueueSnackbar("Please enter a valid inputs", { variant: "error" });
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
      console.error("Error sending OTP:", error.message); // More informative error message
    }
  };

  const handleSetPassword = async () => {
    try {
      if (
        isNameValid &&
        isPhoneValid &&
        isOTPValid &&
        isReferralCodeValid &&
        password
      ) {
        const response = await axios.post(
          `${localUrl}/auth/set-password-referral`,
          {
            phone: mobile,
            password: password,
            referralCode: referralCode,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        
  
        if (response.status === 200) {
          setOtpVerified(true);
          enqueueSnackbar(response.data.message, { variant: "success" });
          navigate("/login");
        } else {
          setOtpVerified(false);
          console.log("Failed to send OTP.");
        }
      } else {
        enqueueSnackbar("Please enter a valid input", { variant: "error" });
      }
    } catch (error) {
      if (error.response) {
        // Only access response if it exists
        if (error.response.status === 400) {
          console.error("Error 400: ", error.response.data.message);
          enqueueSnackbar(error.response.data.message, { variant: "error" });
        } else if (error.response.status === 500) {
          enqueueSnackbar(
            `Server responded with status: ${error.response.status}`,
            { variant: "error" }
          );
        }
      } else {
        // Handle errors where there is no response (e.g., network errors)
        console.error("Network error or no response from server:", error.message);
        enqueueSnackbar("Network error, please try again later.", {
          variant: "error",
        });
      }
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
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-200 rounded-full">
              <label className="flex items-center justify-center w-full h-full cursor-pointer">
                {/* Show selected image or camera icon */}
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Selected"
                    className="object-cover w-full h-full rounded-full"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <FaCamera
                      style={{
                        fontSize: "2rem",
                        width: "2rem",
                        height: "2rem",
                      }}
                      className="text-gray-500"
                    />
                    <span className="mt-2 text-sm text-gray-500">Photo</span>
                  </div>
                )}
                {/* Hidden file input */}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <FaUser
                style={{
                  fontSize: "1.25rem",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
                className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-4"
              />
              <input
                className={`w-full px-10 py-3 text-sm placeholder-gray-500 border-2 rounded-full focus:outline-none ${
                  
                     "border-gray-300"
                }`}
                type="text"
                placeholder=
                  "Please enter your name"
                
                value={name}
                onChange={handleNameValidate}
              />
              {isNameValid && (
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

            <div className="relative flex flex-col py-2 border-gray-300">
              <input
                className={`w-full px-10 py-3 text-sm placeholder-gray-500 border-2 rounded-full focus:outline-none ${
                 
                     "border-gray-300"
                }`}
                type="tel"
                placeholder={
                  
                     "Please enter your mobile number"
                }
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
                <button
                  type="button"
                  className={`absolute px-3 py-1 text-sm text-white transform -translate-y-1/2 bg-black rounded-full right-10 top-1/2 ${
                    otpSent ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleSendOtp}
                  disabled={otpSent} // Disable after OTP sent
                >
                  send
                </button>
              )}

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

            <div className="relative flex flex-col py-2 border-gray-300">
              <div className="relative">
                <FaEnvelope
                  style={{
                    fontSize: "1.25rem",
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                  className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-4"
                />
                <input
                  className={`w-full px-10 py-3 text-sm placeholder-gray-500 border-2 rounded-full focus:outline-none ${
                    isOTPValid
                      ? "border-red-500 placeholder-red-500"
                      : "border-gray-300"
                  }`}
                  type="tel"
                  placeholder={"SMS Verification code"}
                  value={otp}
                  onChange={handleOTPValidate}
                />
                {/* Button inside input container */}
                {isOTPValid && (
                  <button
                    type="button"
                    className={`absolute px-3 py-1 text-sm text-white transform -translate-y-1/2 bg-black rounded-full right-10 top-1/2 ${
                      otpVerified ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleVerifyOtp}
                    disabled={otpVerified} // Disable after OTP sent
                  >
                    verify
                  </button>
                )}
                {isOTPValid && (
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
              {otpSent && (
                <p className="mt-2 text-sm text-green-600">
                  OTP has been sent to your mobile.
                </p>
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

            <div className="relative">
              <FaUserFriends
                style={{
                  fontSize: "1.25rem",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
                className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-4"
              />
              <input
                className={`w-full px-10 py-3 text-sm placeholder-gray-500 border-2 rounded-full focus:outline-none ${
                  isReferralCodeValid
                    ? "border-red-500 placeholder-red-500"
                    : "border-gray-300"
                }`}
                type="text"
                placeholder={"Please enter your referral code"}
                value={referralCode}
                onChange={handleRefferValidate}
              />

              {isReferralCodeValid && (
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
                onClick={handleSetPassword}
                type="button"
                className="w-56 py-2 mt-32 font-bold text-yellow-600 bg-black rounded-full lg:w-80 lg:mt-0"
              >
                REGISTER NOW
              </button>
            </div>

            <p className="mt-2 text-sm text-gray-300">
              Already have an account?{" "}
              <Link to="/login" className="text-yellow-600">
                Log In
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

export default RegisterPage;
