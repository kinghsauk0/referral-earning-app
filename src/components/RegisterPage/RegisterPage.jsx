import React, { useState } from "react";
import { Link } from "react-router-dom";
import img2 from "../../Assets/img2.jpg";
import {
  FaUser,
  FaMobileAlt,
  FaEnvelope,
  FaLock,
  FaUserFriends,
  FaCheckCircle,
  FaCamera,
} from "react-icons/fa";
import Root from "../Root";
import logo from "../../Assets/logo.jpg";

// import const from ""

export const RegisterPage = () => {
  // State for form fields and validation
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set image preview
      };
      reader.readAsDataURL(file);
    }
  };

  // Form validation function
  const validate = () => {
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
      errors.email = "Please enter a valid email.";
      isValid = false;
    }

    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    if (referralCode.length < 6) {
      errors.referralCode = "ReferralCode is  required.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  // Send OTP to the provided mobile number
  const handleSendOtp = () => {
    fetch(`https://lokardobackend.onrender.com/auth/send-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setOtpSent(true);
          console.log("OTP sent successfully.");
        } else {
          console.log("Failed to send OTP.");
        }
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit the form if valid
      console.log("Form submitted successfully");
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <Root>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="w-full max-w-4xl p-6 mx-auto ">
          <div className="flex flex-col items-center mb-6 text-center sm:block md:hidden">
            <img src={logo} alt="Lokardo Logo" className="h-20" />
          </div>
        </div>
        {/* Registration Button for Small Screens */}
        <div className="flex-col items-center block mt-[-130px] mb-6 text-center lg:mt-6">
          <button className="w-56 py-2 mt-32 font-bold text-yellow-600 bg-black rounded-full lg:w-80 lg:mt-0">
            REGISTER NOW
          </button>
          <p className="mt-1 text-sm text-gray-300">
            Please read the terms & conditions carefully before investing
          </p>
        </div>

        {/* Registration Form */}
        <form className="w-full max-w-md p-4 mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-200 rounded-full">
              <label className="flex items-center justify-center w-full h-full cursor-pointer">
                {/* Show selected image or camera icon */}
                {selectedImage ? (
                  <img
                    src={selectedImage}
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
                  onChange={handleImageChange}
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
                className="w-full px-12 py-2 text-sm placeholder-gray-500 border-none rounded-full focus:outline-none"
                type="text"
                placeholder="Please enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="mt-0 ml-6 text-sm text-red-500">{errors.name}</p>
              )}
              <FaCheckCircle
                style={{
                  fontSize: "1.25rem",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
                className="absolute text-green-500 transform -translate-y-2/3 right-4 top-1/2"
              />
            </div>

            <div className="relative flex flex-col py-2 border-gray-300">
              <input
                className="w-full px-12 py-2 text-sm placeholder-gray-500 border-none rounded-full focus:outline-none"
                type="tel"
                placeholder="+91 Please enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <FaMobileAlt
                style={{
                  fontSize: "1.25rem",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
                className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-4"
              />
              {errors.mobile && (
                <p className="ml-6 text-sm text-red-500">{errors.mobile}</p>
              )}
              <FaCheckCircle
                style={{
                  fontSize: "1.25rem",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
                className="absolute mt-3 text-green-500 right-4"
              />
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
                  className="w-full px-12 py-2 pr-24 text-sm placeholder-gray-500 border-none rounded-full focus:outline-none"
                  type="text"
                  placeholder="SMS Verification code"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* Button inside input container */}
                <button
                  type="button"
                  className="absolute px-3 py-1 text-sm text-white transform -translate-y-1/2 bg-black rounded-full right-10 top-1/2"
                  onClick={handleSendOtp} // Trigger OTP function
                >
                  Send
                </button>
                <FaCheckCircle
                  style={{
                    fontSize: "1.25rem",
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                  className="absolute text-green-500 transform -translate-y-1/2 right-4 top-1/2"
                />
              </div>
              {errors.email && (
                <p className="mt-0 ml-6 text-sm text-red-500">{errors.email}</p>
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
                className="w-full px-12 py-2 text-sm placeholder-gray-500 border-none rounded-full focus:outline-none"
                type="password"
                placeholder="Please enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="ml-6 text-sm text-red-500">{errors.password}</p>
              )}
              <FaCheckCircle
                style={{
                  fontSize: "1.25rem",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
                className="absolute text-green-500 transform -translate-y-1/2 right-4 top-1/2"
              />
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
                className="w-full px-12 py-2 text-sm placeholder-gray-500 border-none rounded-full focus:outline-none"
                type="text"
                placeholder="Please enter referral code"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
              />
              {errors.referralCode && (
                <p className="ml-6 text-sm text-red-500">
                  {errors.referralCode}
                </p>
              )}
              <FaCheckCircle
                style={{
                  fontSize: "1.25rem",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
                className="absolute text-green-500 transform -translate-y-1/2 right-4 top-1/2"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-10">
            {/* Payment Section */}
            <div className="flex flex-col mb-4 space-y-2">
              <button className="py-2 mx-auto text-xl font-bold text-black bg-white rounded-full w-60">
                Payment Section
              </button>

              {/* Payment options */}
              <div className="flex flex-col space-y-4">
                <button className="w-48 py-1 mx-auto text-black bg-white rounded-full">
                  Pay via UPI
                </button>
                <button className="w-48 py-1 mx-auto text-black bg-white rounded-full">
                  Pay via QR
                </button>
              </div>

              {/* Success and Enter buttons */}
              <div className="flex flex-col">
                <button className="py-2 mx-auto mt-5 text-xl font-bold text-white bg-green-500 rounded-full w-72">
                  REGISTRATION SUCCESSFUL
                </button>

                <button
                  className="w-32 py-2 mx-auto mt-5 font-bold text-yellow-600 bg-black rounded-full"
                  onClick={handleSubmit}
                >
                  ENTER
                </button>
              </div>
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
        <div className="mt-8 mb-16 text-center">
          <Link to="/terms-and-conditions" className="text-white underline ">
            Terms & Condition
          </Link>
        </div>
      </div>
    </Root>
  );
};

export default RegisterPage;
