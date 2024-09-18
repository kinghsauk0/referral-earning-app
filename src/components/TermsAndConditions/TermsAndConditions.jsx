import React from "react";
import img2 from "../../Assets/img2.jpg"; // Replace with your background image
import helpCenter from "../../Assets/helpcenter.png"; // Replace with your help center logo
import Root from "../Root";
import logo from "../../Assets/logo.jpg";

function TermsAndConditions() {
  return (
    <Root>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="w-full max-w-4xl p-6 mx-auto">
          <div className="flex flex-col items-center mb-6 text-center sm:block md:hidden">
            <img src={logo} alt="Lokardo Logo" className="h-20 mb-4" />
          </div>

          {/* Title and Help Section */}

          <div className="flex flex-row items-center  ml-10 gap-x-14 md:gap-12 lg:gap-20 mt-44 md:flex-row md:justify-between md:mt-[-80px] md:ml-72 lg:flex-row lg:items-start lg:justify-between lg:mb-12 lg:ml-80 lg:mt-10">
            <h1 className="px-3 py-2 text-sm font-bold text-center text-white rounded-md ml-6 sm:mt-[-60px] md:text-left bg-neutral-700 bg-opacity-90 mt-[-80px]">
              TERMS & CONDITIONS
            </h1>
            <div className="flex space-x-1 lg:mt-[-55px] md:mt-[-77px] mt-[-70px] ml-0  lg:ml-0">
              <img
                src={helpCenter}
                alt="Help Center Logo"
                className="w-4 h-4 "
              />
              <button className="text-xs font-semibold text-black hover:underline">
                HELP
              </button>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="mb-6 text-sm font-semibold text-white">
            Main Title: Understanding the Terms and Conditions of Investing in
            Lokardo: A Money Doubling Website
          </h2>

          {/* Sections */}
          <div className="space-y-6">
            {/* Introduction */}
            <div>
              <h3 className="inline-block px-2 py-1 text-sm font-semibold text-white bg-neutral-700 bg-opacity-60">
                Introduction:
              </h3>
              <p className="mt-2 text-white">
                Are you considering investing in Lokardo, a money doubling
                website that offers the opportunity to double? Before diving in,
                it’s crucial to understand the terms and conditions to make an
                informed decision. Let’s explore the key aspects of investing in
                Lokardo, including the minimum and maximum investment limits,
                the time frame for completing the referral task, and more.
              </p>
            </div>

            {/* Minimum and Maximum Investment Limit */}
            <div>
              <h3 className="inline-block px-2 py-1 text-sm font-semibold text-white bg-opacity-60 bg-neutral-700">
                Minimum and Maximum Investment Limit:
              </h3>
              <ul className="pl-4 mt-2 text-white list-disc list-inside">
                <li>
                  The minimum and maximum investment limit at a time on Lokardo
                  is set at Rs. 1000. This means that investors can invest a
                  minimum of Rs. 1000 and a maximum of Rs. 1000 at a time.
                </li>
                <li>
                  Investors can start with a small amount and test the waters
                  before committing a larger sum of money.
                </li>
                <li>
                  It also helps in managing risk and prevents investors from
                  putting all their funds into a single investment.
                </li>
              </ul>
            </div>

            {/* Referral Requirement */}
            <div>
              <h3 className="inline-block px-2 py-1 text-sm font-semibold text-white bg-neutral-700 bg-opacity-60">
                Referral Requirement:
              </h3>
              <p className="mt-2 text-white">
                To double your money on Lokardo, you need to refer four people
                to the platform within a specified time frame. This referral
                system is a key requirement to unlock the doubling of your
                investment.
              </p>
            </div>

            {/* Completion Time Frame */}
            <div>
              <h3 className="inline-block px-2 py-1 text-sm font-semibold text-white bg-neutral-700 bg-opacity-60">
                Completion Time Frame:
              </h3>
              <p className="mt-2 text-white">
                To complete the referral task on Lokardo, it’s crucial to act
                quickly and motivate others to do the same. Completing the task
                within the specified time frame is crucial to avoid the loss of
                your investment.
              </p>
            </div>

            {/* Risk Disclaimer */}
            <div>
              <h3 className="inline-block px-2 py-1 text-sm font-semibold text-white bg-neutral-700">
                Risk Disclaimer:
              </h3>
              <p className="mt-2 text-white">
                Investing in Lokardo comes with inherent risks, as with any
                investment. The terms that investments and securities are
                subject to market risks. Investors are advised to invest at
                their own risk and understand the potential rewards as well as
                the risks involved.
              </p>
            </div>

            {/* Conclusion */}
            <div>
              <h3 className="inline-block px-2 py-1 text-sm font-semibold text-white bg-neutral-800">
                Conclusion:
              </h3>
              <p className="mt-2 text-white">
                Investing in Lokardo can be a lucrative opportunity to double
                your money by referring four people within a specified time
                frame. However, it’s essential to adhere to the terms and
                conditions set by the platform. By following the minimum and
                maximum investment limits, completing the referral task within
                the time frame, and understanding the risks involved, investors
                can make informed decisions and potentially reap the rewards of
                their investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}

export default TermsAndConditions;
