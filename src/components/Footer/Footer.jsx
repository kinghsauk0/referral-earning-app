import React from "react";
import { Link } from "react-router-dom";
import billdesk from "../../Assets/billdesk.jpg";
import Mastercard from "../../Assets/mastercard.png";
import Visa from "../../Assets/visa.jpg";
import paytm from "../../Assets/Paytm.jpg";
import cybersecurity from "../../Assets/cybersecurity.jpg";
import fraud from "../../Assets/fraud.jpg";
import integrity from "../../Assets/integrity.png";
import sceure from "../../Assets/secure.jpg";
import logo from "../../Assets/logo.jpg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="p-4 text-white bg-black md:p-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          {/* Left side: Quick Links */}
          <div className="flex flex-col space-y-2">
            <img src={logo} alt="Lokardo Logo" className="mb-4 w-14 h-14" />{" "}
            {/* Replace with your logo path */}
            <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
              <div>
                <h3 className="font-bold">Quick Links</h3>
                <ul>
                  <Link to="/">
                    <li>
                      <a
                        href="#"
                        className="hover:underline hover:text-orange-600"
                      >
                        Home
                      </a>
                    </li>
                  </Link>
                  <Link to="/register">
                    <li>
                      <a
                        href="#"
                        className="hover:underline hover:text-orange-600"
                      >
                        RegisterPage
                      </a>
                    </li>
                  </Link>

                  <Link to="/about-task">
                    <li>
                      <a
                        href="#"
                        className="hover:underline hover:text-orange-600"
                      >
                        About Task
                      </a>
                    </li>
                  </Link>
                  <Link to="/task/:id">
                    <li>
                      <a
                        href="#"
                        className="hover:underline hover:text-orange-600"
                      >
                        My Task
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
              <div>
                <ul>
                  <Link to="/contact-us">
                    <li>
                      <a
                        href="#"
                        className="hover:underline hover:text-orange-600"
                      >
                        Contact Us
                      </a>
                    </li>
                  </Link>
                  <Link to="/terms-and-conditions">
                    <li>
                      <a
                        href="#"
                        className="hover:underline hover:text-orange-600"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                  </Link>

                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-600"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-600"
                    >
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-600"
                    >
                      Lokardo on iOS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-600"
                    >
                      Lokardo on Android
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-600"
                    >
                      Help
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-600"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-600"
                    >
                      Press Releases
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-600"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-600"
                    >
                      Certification
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-600"
                    >
                      Legality
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-600"
                    >
                      FAQs & Benefits
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right side: Security & Partners */}
          <div className="flex flex-col space-y-4">
            <div className="text-center">
              <h3 className="font-bold">Security & Game Integrity</h3>
              <div className="flex justify-center mt-2 space-x-5">
                <img src={fraud} alt="Security" className="w-10 h-10" />{" "}
                {/* Replace with your icons */}
                <img src={cybersecurity} alt="Security" className="w-10 h-10" />
                <img src={integrity} alt="Security" className="w-10 h-10" />
                <img src={sceure} alt="Security" className="w-10 h-10" />
              </div>
            </div>
            <div className="text-center ">
              <h3 className="font-bold">Our Payment Partners</h3>
              <div className="flex justify-center mt-2 space-x-4">
                <img
                  src={Mastercard}
                  alt="Payment Partner"
                  className="w-10 h-10"
                />{" "}
                {/* Replace with your icons */}
                <img
                  src={billdesk}
                  alt="Payment Partner"
                  className="w-10 h-10"
                />
                <img src={paytm} alt="Payment Partner" className="w-10 h-10" />
                <img src={Visa} alt="Payment Partner" className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-xs text-center ">
          <p>* You must be 18 years or older to play real money Lokardo.</p>
          <p>© {year} Play Games24x7 Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
