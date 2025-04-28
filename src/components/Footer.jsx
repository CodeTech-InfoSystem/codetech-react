import { FaStar, FaRegStar } from "react-icons/fa";

const Footer = () => {
  const footerData = [
    { id: 1, image: "/images/ct-logo.svg" },
    { id: 2, image: "/images/google.svg" },
    { id: 3, image: "/images/goodfirms.svg" },
    { id: 4, image: "/images/learn.svg" },
  ];

  return (
    <>
      <footer className="bg-[rgba(228,220,197,0.5)] py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {/* Left - Logo & About */}
          <div className="flex flex-col items-center sm:items-start flex-grow">
            <img src="/images/ct-logo.svg" alt="company logo" className="w-[100px]" />
            <div className="m-4">
              <div className="flex items-center space-x-2 mt-4">
                <img src="/images/indiaflag.png" alt="India Flag" className="w-[30px] h-[30px]" />
                <p className="font-semibold text-lg">INDIA, INDORE</p>
              </div>
              <p className="text-sm text-gray-700 w-full sm:w-[80%] text-center sm:text-left mt-4">
                PU4, Scheme no. 54 PU4, Vijay Nagar, Madhya Pradesh 452011
                <br />
                hr@codetechinfosystem.com
                <br />
                Ph : +91 88891 43373
              </p>
            </div>
            <div className="relative">
              <div class="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center"><div class="w-2 h-2 bg-[#AD954F] rounded-full absolute animate-move-up-down"></div><div class="w-px h-12 bg-gray-300"></div></div>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-center flex-grow mt-12">
            {/* Rating Section (Stars and Rating Text) */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <FaStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
                <FaStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
                <FaStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
                <FaStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
                <FaRegStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
              </div>
              <span className="text-[#000000] text-[18px] font-semibold">4.5</span>

              
            </div>
            <img src="/images/google.png" alt="company logo" className="w-[124.04px] h-[41.01px] mt-2" />
          </div>

          {/* Career */}
          <div className="flex flex-col items-center sm:items-center flex-grow mt-12">
            {/* Rating Section (Stars and Rating Text) */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <FaStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
                <FaStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
                <FaStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
                <FaStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
                <FaRegStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
              </div>
              <span className="text-[#000000] text-[18px] font-semibold">4.5</span>
            </div>
            <img src="/images/goodfirms.png" alt="company logo" className="w-[200.07px] h-[30.22px] mt-2" />
          </div>

          {/* Subscribe Us */}
          <div className="flex flex-col items-center sm:items-center flex-grow mt-12">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <FaStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
                <FaStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
                <FaStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
                <FaStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
                <FaRegStar className="text-[#AC9450] w-[16.15px] h-[18.09px]" />
              </div>
              <span className="text-[#000000] text-[18px] font-semibold">4.5</span>
            </div>
            <div className="flex items-center">
              <img src="/images/Polygon5.svg" alt="company logo" className="w-[43.04px] h-[31.01px] mt-2" />
              <span className="ml-2 text-[36px] font-semibold text-[#000000] relative pr-2">
                Learninja
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#F9A682] text-[30px]">.</span>
              </span>
            </div>
            <div className="m-4">
              <div className="flex items-center space-x-2 mt-4">
                <img src="/images/indiaflag.png" alt="India Flag" className="w-[30px] h-[30px]" />
                <p className="font-semibold text-lg">INDIA, Hyderabad</p>
              </div>
              <p className="text-sm text-gray-700 w-full sm:w-[80%] text-center sm:text-left mt-4">
                CodeTech Infosystem
                <br />
                hr@codetechinfosystem.com
                <br />
                Hmt Sathavahana Nagar, Kukatpally, Hyderabad, Telangana 500072
              </p>
            </div>

          </div>

        </div>


      </footer>
      {/* Copyright Section */}
      <div className="bg-[#AC9450] py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-white text-lg font-medium">
            © CodeTech Infosystem. All Rights Reserved 2025
          </p>
          <div className="flex space-x-2">
            <a href="/terms" className="text-white text-sm font-medium hover:text-[#AC9450]">
              Terms and Conditions
            </a>
            <div className="h-6 border-l border-white mx-1"></div> {/* Adjusted margin to bring line closer */}
            <a href="/privacy" className="text-white text-sm font-medium hover:text-[#AC9450]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
