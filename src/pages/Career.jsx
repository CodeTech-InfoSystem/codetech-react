import React from 'react';
import { FaChartLine, FaBullseye, FaCrown } from 'react-icons/fa';
import { Benefits } from '../components/Benefits';
import { ReviewsSection } from '../components/ReviewsSection';
import WOW from 'wowjs';
import 'animate.css';
import { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { CurrentOpnings } from '../components/CurrentOpnings';

const Career = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="min-h-screen pt-2"
      style={{
        background: "linear-gradient(180deg, #242423 37.91%, #434342 51.86%, #545454 56.79%, #686868 62.25%, #7B7B7A 67.71%, #8B8B8B 72.59%, #B6B6B5 81.95%, #D9D9D9 88.38%, #EBEBEB 94.04%, #FFFFFF 100%)",
      }}
    >
      <section className="text-white relative sm:px-8">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AD954F] via-[#BCA86F] via-[#CDBF95] via-[#DED4B8] via-[#EBE6D5] to-white leading-[70px] mt-[80px]" style={{ lineHeight: '70px' }}>
            We are growing! Grow <br />
            <span className="block">with us!</span>
          </h1>

          <p className="mt-[33px] text-lg text-gray-300 w-full md:w-[40%] mx-auto text-center font-raleway" style={{ lineHeight: '32px' }}>
            Apply now and experience a workplace where your potential meets our vision for building exceptional software
          </p>

          {/* Buttons */}
          <div className="my-6 flex justify-center gap-4">
            <button
              onClick={() => {
                document.getElementById("current-openings")?.scrollIntoView({ behavior: "smooth" });
              }}

              className="group px-6 py-2 bg-[#AD954F] text-white font-bold rounded-2xl lg:w-[260px] lg:h-[42px] leading-[1.5] flex items-center justify-center gap-2 whitespace-nowrap mt-4"
            >
              <span className="flex items-center gap-2">
                Explore Opportunities

                <GoArrowUpRight className="text-[1.2em]" />

              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="text-white relative mt-12 py-10 sm:px-8">
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden border-2 border-[#4f4f4f]">
          <img
            src="/images/groupimg.jpg"
            alt="Our team working in office"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* card section */}

      <section className="bg-white py-10 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-Baloo 2">Our Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 font-raleway">
            Our goal at CodeTech is to take on any processes that don’t directly grow your business, so that you can focus on mission-critical tasks.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-[#f7f7f7] rounded-2xl p-8 shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-1xl">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full">
                  <FaChartLine className="text-[#ad954f] text-2xl" />
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">A Journey of Growth</h3>
              <p className="text-gray-600 font-raleway">
                Started in 2014, CodeTech was founded by two industry veterans passionate about transforming the e-commerce space. We are now 75 strong and growing to serve our expanding client base.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f7f7f7] rounded-2xl p-8 shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-1xl">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full">
                  <FaBullseye className="text-[#ad954f] text-2xl" />
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">What we’re passionate about</h3>
              <p className="text-gray-600 font-raleway">
                We help people achieve e-commerce success by freeing up their time to focus on what is really important to them
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f7f7f7] rounded-2xl p-8 shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-1xl">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full">
                  <FaCrown className="text-[#ad954f] text-2xl" />
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Our Special Sauce</h3>
              <p className="text-gray-600 font-raleway">
                We address end-to-end e-commerce challenges with 6 applications that deal with everything ranging from reporting and analytics to fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*start benefits */}
      <div>
        <Benefits />
      </div>

      {/*  Review section*/}
      <div>
        <ReviewsSection />
      </div>
      {/* Opnings */}
      <div>
        <CurrentOpnings />
      </div>
    </div>
  );
};

export default Career;
