import React from "react";
import img2 from "../../Assets/img2.jpg";
import Root from "../Root";
import logo from "../../Assets/logo.jpg";

function AboutTask() {
  return (
    <Root>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${img2})` }}
      >
        {/* Header Section */}
        <div className="w-full max-w-4xl p-6 mx-auto">
          <div className="flex flex-col items-center mb-6 text-center sm:block md:hidden">
            <img src={logo} alt="Lokardo Logo" className="h-20 " />
          </div>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-4xl px-4 py-8 overflow-hidden text-white lg:mt-0 scroll-mt-0 md:px-8">
          <div className="p-4">
            {/* Title */}
            <div className="flex justify-center mb-6 lg:-mt-1">
              <button className="px-6 py-2 mt-4 font-bold text-white rounded-md -text-lg lg:mt-0 bg-neutral-800 bg-opacity-90 lg:w-60 md:mt-0">
                About Task
              </button>
            </div>

            {/* Introduction Section */}
            <section className="mb-6">
              <h2 className="mb-2 text-2xl font-semibold text-white w-36 bg-neutral-800 bg-opacity-70">
                Introduction:
              </h2>
              <p className="text-white">
                Welcome to our latest blog post on Lokardo, where we will
                explore a simple and effective way to double your money in just
                10 days. If you're looking for a hassle-free method to increase
                your earnings, look no further. With Lokardo, all you need to do
                is complete a quick task, refer four of your friends or family
                members, and watch your money grow. Let's delve into the details
                of this lucrative opportunity and how you can take advantage of
                it.
              </p>
            </section>

            {/* Task Section */}
            <section className="mb-6">
              <h2 className="w-16 mb-2 text-2xl font-semibold text-white bg-neutral-800 bg-opacity-70">
                Task:
              </h2>
              <p className="mb-4 text-white">
                You have to just refer 4 of your known persons (friends, family
                members, relatives, etc.) to invest Rs 1000 in "Lokardo" so that
                they can too double their money (1000) which they will invest.
              </p>
              <h1 className="space-y-2 text-white list-disc list-inside">
                <p>
                  -The 4 persons should register Lokardo with your referral code
                  so that you will get a green tick in your taskbar.
                </p>
                <p>
                  -After getting 4 green ticks under 4 persons' icons in your
                  taskbar, your task will be completed.
                </p>
                <p>
                  -Your invested 1000 rupees will be converted into 2000 and
                  credited to your withdrawal section, and you can withdraw the
                  amount to your bank account instantly.
                </p>
              </h1>
            </section>

            {/* Important Point Section */}
            <section className="mb-2 ">
              <h2 className="p-2 mb-2 text-2xl font-semibold text-white bg-red-600 bg-opacity-50 w-52 ">
                Important Point:
              </h2>
              <p className="p-2 text-white bg-red-600 bg-opacity-50 rounded">
                If you couldn’t complete your task within 10 days, your money
                will not be refunded. Try to complete it within 10 days.
              </p>
            </section>

            {/* Why Lokardo Section */}
            <section>
              <h2 className="mb-2 text-2xl font-semibold text-white w-44 bg-neutral-800 bg-opacity-70">
                Why Lokardo?
              </h2>
              <h1 className="space-y-2 text-white list-disc list-inside">
                <p>
                  - Lokardo offers a secure and transparent platform for
                  investment.
                </p>
                <p>
                  - The process is straightforward and does not involve any
                  complex procedures.
                </p>
                <p>
                  -The opportunity to double your money within a short timeframe
                  is rare and valuable.
                </p>
                <p>
                  -Referring known individuals increases trust and confidence in
                  the investment process.
                </p>
              </h1>
            </section>
          </div>
        </div>
      </div>
    </Root>
  );
}

export default AboutTask;
