import { MdStar, MdStarHalf } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <footer className="bg-[rgba(228,220,197,0.5)]">
        <div className="py-5 px-5">
          {/* Top Grid Section */}
          <div className="md:grid md:grid-flow-col md:auto-cols-max md:items-center md:justify-center md:gap-20 flex flex-col items-center gap-8">

            {/* 1. Logo */}
            <div className="flex flex-col items-center sm:items-start justify-center">
              <img src="/images/ct-logo.svg" alt="Company Logo" className="w-[100px]" />
            </div>

            {/* 2. Divider (Hidden on Mobile) */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative h-24 flex flex-col items-center">
                <div className="w-2 h-2 bg-[#AD954F] rounded-full animate-move-up-down"></div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
            </div>

            {/* 3. Google Rating */}
            <div className="flex flex-col justify-center items-center md:items-start w-full">
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <MdStar key={i} className="text-[#AC9450] w-4 h-5" />
                  ))}
                  <MdStarHalf className="text-[#AC9450] w-4 h-5" />
                </div>
                <span className="text-black text-lg font-semibold">4.5</span>
              </div>
              <img src="/images/google.png" alt="Google rating" className="w-[124px]"/>
            </div>

            {/* 4. Divider */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative h-24 flex flex-col items-center">
                <div className="w-2 h-2 bg-[#AD954F] rounded-full animate-move-up-down"></div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
            </div>

            {/* 5. Career Rating */}
            <div className="flex flex-col justify-center items-center md:items-start w-full">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <MdStar key={i} className="text-[#AC9450] w-4 h-5" />
                  ))}
                  <MdStarHalf className="text-[#AC9450] w-4 h-5" />
                </div>
                <span className="text-black text-lg font-semibold">4.5</span>
              </div>
              <img src="/images/goodfirms.png" alt="Goodfirms rating" className="w-[203px] mt-3" />
            </div>
              
            {/* 6. Divider */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative h-24 flex flex-col items-center">
                <div className="w-2 h-2 bg-[#AD954F] rounded-full animate-move-up-down"></div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
            </div>

            {/* 7. Learninja */}
            <div className="flex flex-col justify-center items-center md:items-start">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <MdStar key={i} className="text-[#AC9450] w-4 h-5" />
                  ))}
                  <MdStarHalf className="text-[#AC9450] w-4 h-5" />
                </div>
                <span className="text-black text-lg font-semibold">4.8</span>
              </div>
              <div className="flex items-center mt-2">
                <img src="/images/ab-brand.png" alt="Learninja Logo" className="w-[50px]" />
                <div className="flex items-center ml-2">
                  <span className="text-4xl font-bold text-black font-graphik text-[27.7px]">
                  AmbitionBox 
                   </span>
                  <span className="text-[#F9A682] text-4xl ml-1 font-graphik">.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-7 sm:mt-[15px]" >
            {/* Indore Address */}

            <div className="flex flex-col items-center sm:items-start w-full justify-center sm:justify-start">
              <div className="flex items-center space-x-2 mb-2">
                <img src="/images/indiaflag.png" alt="India Flag" className="w-[30px] h-[30px]" />
                <p className="font-semibold text-[24px] font-Baloo text-center sm:text-left">INDIA, INDORE</p>
              </div>
              <p className="font-raleway text-[18px] leading-[25px] text-center sm:text-left">
                Code Tech Infosystem
                <br />
                PU4, Scheme no. 54 PU4, Vijay Nagar,
                <br />
                Madhya Pradesh 452011
                <br />
                careers@codetechinfosystem.com
                <br />
                Ph : +7993828531
              </p>
            </div>

            {/* Dubai Address */}
            <div className="flex flex-col items-center sm:items-start w-full justify-center sm:justify-start">
              <div className="flex items-center space-x-2 mb-2">
                <img src="/images/dubai_flag.png" alt="Dubai Flag" className="w-[30px] h-[30px]" />
                <p className="font-semibold text-[24px] font-Baloo text-center sm:text-left">DUABI, QUAZ</p>
              </div>
              <p className="font-raleway text-[18px] leading-[25px] text-center sm:text-left">
                Code Tech Infosystem
                <br />
                Blow Dubai/Al Quoz Dubai 9966
              </p>
            </div>

            {/* Hyderabad Address */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-start w-full">
              <div className="sm:flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center space-x-2 mb-2 justify-center sm:justify-start">
                  <img src="/images/indiaflag.png" alt="India Flag" className="w-[30px] h-[30px]" />
                  <p className="font-semibold text-[24px] font-Baloo">INDIA, HYDERABAD</p>
                </div>
                <div className="flex flex-col text-[18px]">
                  <p className="font-raleway text-[18px] leading-[25px] sm:text-left text-center">
                    CodeTech Infosystem
                    <br />
                    Hmt Sathavahana Nagar, Kukatpally,
                    <br />
                    hr@codetechinfosystem.com
                    <br />
                    Hyderabad, Telangana 500072
                  </p>
                </div>
              </div>
            </div>
            </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-[#AC9450] py-1.5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 space-y-2 sm:space-y-0">
          <p className="text-white text-center sm:text-left text-lg font-medium font-raleway">
            © CodeTech Infosystem. All Rights Reserved 2025
          </p>
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-1 sm:space-y-0 sm:space-x-2">
            <a href="/" className="font-raleway text-white text-sm font-medium">
              Terms and Conditions
            </a>
            <div className="hidden sm:block font-raleway h-6 border-l border-white mx-1"></div>
            <a href="/" className="text-white text-sm font-medium">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
