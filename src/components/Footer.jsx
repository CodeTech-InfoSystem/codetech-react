/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  const footerData = [
    { id: 1, image: "/images/ct-logo.svg" },
    { id: 2, image: "/images/google.svg" },
    { id: 3, image: "/images/goodfirms.svg" },
    { id: 4, image: "/images/learn.svg" },
  ];

  return (
    <footer className="bg-[#F3EFE3] pt-8">
      {/* Top Section */}
      <div className="flex justify-center text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {footerData.map((item, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {index !== 0 && (
                <div className="absolute left-0 top-[30%] -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center">
                  <div className="w-2 h-2 bg-[#AD954F] rounded-full absolute animate-move-up-down"></div>
                  <div className="w-px h-20 bg-gray-300"></div>
                </div>
              )}
              <img
                src={item.image}
                alt={`logo-${index}`}
                className={`mt-4 ${item.id === 2
                  ? 'mt-6 w-24'
                  : item.id === 3 || item.id === 4
                    ? 'mt-6 w-[23%] sm:w-[50%]'
                    : 'w-24'
                  }`}
              />

            </div>
          ))}
        </div>
      </div>

      {/* Office Info Blocks */}
      <div className="flex flex-col items-center text-sm mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 w-[85%] max-w-6xl mx-auto">
          {/* Office 1 */}
          <div className="flex flex-col text-sm text-center md:text-left items-center md:items-start">
            <p className="font-bold flex items-center justify-center md:justify-start gap-2">
              <img src="/images/india.svg" alt="Flag" className="w-8 h-8" /> INDIA, INDORE
            </p>
            <p className="font-medium font-raleway text-[#172B32]">CodeTech Infosystem</p>
            <p className="font-medium font-raleway text-[#172B32]">hr@codetechinfosystem.com</p>
            <p className="font-medium font-raleway text-[#172B32] text-center md:text-left">
              13/3, Pardeshipura, Indore, Madhya Pradesh 452003
            </p>
          </div>

          {/* Office 2 */}
          <div className="flex flex-col text-sm text-center md:text-left items-center md:items-start">
            <p className="font-bold flex items-center justify-center md:justify-start gap-2">
              <img src="/images/india.svg" alt="Flag" className="w-8 h-8" /> Dubai, Quaz
            </p>
            <p className="font-medium font-raleway text-[#172B32]">CodeTech Infosystem</p>
            <p className="font-medium font-raleway text-[#172B32] text-center md:text-left">
              Blow Dubai / Al Quoz Dubai 9966
            </p>
          </div>

          {/* Office 3 */}
          <div className="flex flex-col text-sm text-center md:text-left items-center md:items-start">
            <p className="font-bold flex items-center justify-center md:justify-start gap-2">
              <img src="/images/india.svg" alt="Flag" className="w-8 h-8" /> INDIA, Hyderabad
            </p>
            <p className="font-medium font-raleway text-[#172B32]">CodeTech Infosystem</p>
            <p className="font-medium font-raleway text-[#172B32]">hr@codetechinfosystem.com</p>
            <p className="font-medium font-raleway text-[#172B32] text-center md:text-left">
              Hmt Sathavahana Nagar, Kukatpally, Hyderabad, Telangana 500072
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" font-raleway bg-[#B5903A] text-white text-sm mt-10 py-3 flex flex-col md:flex-row justify-between items-center px-20">
        <span>@CodeTech Infosystem ALL RIGHTS RESERVED 2025</span>
        <div className="flex gap-3 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Terms And Conditions</a>
          <span>|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
