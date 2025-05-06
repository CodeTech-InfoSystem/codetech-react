import 'animate.css';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header
        className="text-center py-20"
        style={{
          background:
            "linear-gradient(180deg, #242423 3.95%, #434342 23.15%, #545454 37.84%, #7B7B7A 57.04%, #B9B9B9 73.93%, #D3D3D3 86.67%, #FFFFFF 100%)",
        }}
      >
        <h1 className="text-[3.5rem] font-bold text-[#AF9854]">About Us</h1>
      </header>


      {/* About Content */}
      <section className="py-8 px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <img
            src="/images/about.svg"
            alt="People working together"
            className="rounded-xl animate__animated animate__slideInDown"
          />

          {/* Right Content */}
          <div>
            <h3 className="text-4xl font-bold text-[#000000]">
              One of the Fastest Way to Business Growth
            </h3>
            <p className="text-gray-600 mt-4 w-[90%] font-raleway">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed.
            </p>

            {/* Advice Box */}
            <div className="mt-6 bg-white rounded-lg p-2  flex items-center">
              <div className="bg-[#F7F7F7] p-3 rounded-lg">
                <img
                  src="/images/help.svg"
                  alt="Help"
                />
              </div>
              <div className="ml-4">
                <p className="font-semibold">Get Instant Professional Advice</p>
                <p className="text-gray-600">
                  Ready to Help:{" "}
                  <a href="tel:+13566787897" className="text-[#AD954F] font-semibold">
                    +91 7993828531
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mt-10 flex flex-col md:flex-row items-center px-4 md:px-20">
        <img src="/images/mission.svg" alt="Our Mission" className="w-full md:w-1/2 rounded-lg md:w-[582px] md:h-[508px]" />
        <div className="md:ml-10 mt-4 md:mt-0">
          <span className="bg-[#AF9854] text-white px-4 py-1 rounded-3xl font-Baloo 2">Our Mission</span>
          <p className="mt-8 text-gray-600 text-[18px] font-raleway">
            At we believe in the transformation power of education and the boundless potential that resides within each individual. Our mission is to foster intellectual curiosity, empower individuals to realize their fullest potential, and contribute meaningfully to the betterment of society. commitment to academic excellence, diversity, and community engagement.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mt-10 flex flex-col-reverse md:flex-row items-center px-4 md:px-20">
        <div className="md:mr-10 mt-4 md:mt-0">
          <span className="bg-[#AF9854] text-white px-4 py-1 rounded-3xl font-Baloo 2">Our Vision</span>
          <p className="mt-8 text-gray-600 text-[18px] font-raleway">
            At we believe in the transformation power of education and the boundless potential that resides within each individual. Our mission is to foster intellectual curiosity, empower individuals to realize their fullest potential, and contribute meaningfully to the betterment of society. commitment to academic excellence, diversity, and community engagement.
          </p>
        </div>
        <img src="/images/vision.svg" alt="Our Vision" className="w-full md:w-1/2 rounded-lg md:w-[582px] md:h-[508px]" />
      </section>

      {/* Call to Action */}
      <div className="flex justify-center my-16 px-4">
        <div className="relative w-full md:w-3/4 lg:w-1/2 rounded-lg overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-[200px] object-cover rounded-lg">
            <source src="/blog-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
            <p className="text-white text-lg md:text-xl font-semibold w-[69%]">
              “Some of the History of Our Company is that we are Catching up through Video”
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href='/contact-us'
                className='px-4 py-1 bg-[#AD954F] text-white rounded-md'
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
