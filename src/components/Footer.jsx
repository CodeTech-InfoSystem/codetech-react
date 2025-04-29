import { MdStar,MdStarHalf  } from "react-icons/md";
const Footer = () => {
  const footerData = [
    { id: 1, image: "/images/ct-logo.svg" },
    { id: 2, image: "/images/google.svg" },
    { id: 3, image: "/images/goodfirms.svg" },
    { id: 4, image: "/images/learn.svg" },
  ];

  return (
    <>
      <footer className="bg-[rgba(228,220,197,0.5)]">
        <div className="py-10 px-6 md:px-12">

          <div className="grid grid-flow-col auto-cols-max items-center justify-center gap-20">
            {/* 1. Logo Section */}
            <div className="flex flex-col items-center sm:items-start justify-center">
              <img src="/images/ct-logo.svg" alt="Company Logo" className="w-[100px]" />
            </div>

            {/* 2. Divider */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative h-24 flex flex-col items-center">
                <div className="w-2 h-2 bg-[#AD954F] rounded-full animate-move-up-down"></div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
            </div>

            {/* 3. Services Rating */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center  space-x-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <MdStar  key={i} className="text-[#AC9450] w-4 h-5" />
                  ))}
                  <MdStarHalf className="text-[#AC9450] w-4 h-5" />
                </div>
                <span className="text-black text-lg font-semibold">4.5</span>
              </div>
              <img src="/images/google.png" alt="Google rating" className="w-[124px]" />
            </div>

            {/* 4. Divider */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative h-24 flex flex-col items-center">
                <div className="w-2 h-2 bg-[#AD954F] rounded-full animate-move-up-down"></div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
            </div>

            {/* 5. Career Rating */}
            <div className="flex flex-col justify-center w-full">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <MdStar  key={i} className="text-[#AC9450] w-4 h-5" />
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

            {/* 7. Subscribe / Learninja */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <MdStar  key={i} className="text-[#AC9450] w-4 h-5" />
                  ))}
                  <MdStarHalf className="text-[#AC9450] w-4 h-5" />
                </div>
                <span className="text-black text-lg font-semibold">4.5</span>
              </div>
              <div className="flex items-center mt-2">
                <img src="/images/Polygon5.svg" alt="Learninja Logo" className="w-[30px]" />
                <div className="flex items-center ml-2">
                  <span className="text-4xl font-bold text-black font-graphik text-[27.7px]">
                    Learninja
                  </span>
                  <span className="text-[#F9A682] text-4xl ml-1 font-graphik">.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">

            {/* Indore Address (Left) */}
            <div className="flex flex-col items-start sm:items-start w-full sm:w-3/4 pl-7">
              <div className="flex items-center space-x-2 mb-2">
                <img src="/images/indiaflag.png" alt="India Flag" className="w-[30px] h-[30px]" />
                <p className="font-semibold text-[24px] font-Baloo">INDIA, INDORE</p>
              </div>
              <p className="font-raleway text-[18px] leading-[30px]">
                PU4, Scheme no. 54 PU4, Vijay Nagar,
                <br />
                Madhya Pradesh 452011
                <br />
                hr@codetechinfosystem.com
                <br />
                Ph : +91 88891 43373
              </p>
            </div>

            {/* Hyderabad Address (Right) */}
            <div className="flex flex-col items-end sm:items-end w-full sm:w-3/4 ml-auto">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <img src="/images/indiaflag.png" alt="India Flag" className="w-[30px] h-[30px]" />
                  <p className="font-semibold text-[24px] font-Baloo">INDIA, Hyderabad</p>
                </div>
                <div className="flex flex-col text-[18px]">
                  <p className="font-raleway text-[18px] leading-[30px]" >
                    CodeTech Infosystem
                    <br />
                    hr@codetechinfosystem.com
                    <br />
                    Hmt Sathavahana Nagar, Kukatpally,
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
      <div className="bg-[#AC9450] py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-white text-lg font-medium font-raleway">
            © CodeTech Infosystem. All Rights Reserved 2025
          </p>
          <div className="flex space-x-2">
            <a href="/terms" className="font-raleway text-white text-sm font-medium hover:text-[#AC9450]">
              Terms and Conditions
            </a>
            <div className=" font-raleway h-6 border-l border-white mx-1"></div>
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
