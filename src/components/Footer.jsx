import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E7DFC5] py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-8">
        {/* Left - Logo & About */}
        <div className="flex flex-col items-center sm:items-start">
          <img src="/images/ct-logo.svg" alt="company logo" className="w-[100px]" />
          <p className="text-sm text-gray-700 w-full sm:w-[80%] text-center sm:text-left mt-4">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            Services
          </h3>
          <div className="h-1 w-10 bg-[#AD954F] rounded-lg my-2"></div>
          <ul className="text-gray-700 space-y-2">
            <li>Web Design/Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>HubSpot Integration</li>
            <li>Email Marketing</li>
            <li>Website Migration</li>
          </ul>
        </div>

        {/* Career */}
        <div>
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            Career
          </h3>
          <div className="h-1 w-10 bg-[#AD954F] rounded-lg my-2"></div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-md">
              <div className="bg-white p-1 rounded-lg cursor-pointer hover:bg-gray-200">
                <img src="/images/react.svg" alt="ReactJs Dev." className="w-8 h-8 text-[#AD954F]" />
              </div>
              <div>
                <p className="font-bold">ReactJs Dev.</p>
                <p className="text-sm text-gray-600">1-5 Years of Exp.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-md">
              <div className="bg-white p-1 rounded-lg cursor-pointer hover:bg-gray-200">
                <img src="/images/wordpress.svg" alt="Wordpress Dev." className="w-8 h-8 text-[#AD954F]" />
              </div>
              <div>
                <p className="font-bold">Wordpress Dev.</p>
                <p className="text-sm text-gray-600">1-5 Years of Exp.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-md">
              <div className="bg-white p-1 rounded-lg cursor-pointer hover:bg-gray-200">
                <img src="/images/python.svg" alt="Python Dev." className="w-8 h-8 text-[#AD954F]" />
              </div>
              <div>
                <p className="font-bold">Python Developer</p>
                <p className="text-sm text-gray-600">1-5 Years of Exp.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe Us */}
        <div>
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            Subscribe Us
          </h3>
          <div className="h-1 w-10 bg-[#AD954F] rounded-lg my-2"></div>
          <p className="text-sm text-gray-700 w-full sm:w-[80%] text-center sm:text-left">
            It is a long established fact that a reader will be distracted by the readable content.
          </p>
          <div className="flex gap-3 mt-4 justify-center sm:justify-start">
            <a
              href="https://www.linkedin.com/company/codetechinfosystem/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-200"
            >
              <FaLinkedinIn className="text-[#AD954F]" />
            </a>
            <a
              href="https://www.instagram.com/codetechinfosystem?igsh=MXdqc2l4dmUwd29hOQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-200"
            >
              <FaInstagram className="text-[#AD954F]" />
            </a>
            <div className="bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-200">
              <FaFacebookF className="text-[#AD954F]" />
            </div>
            <div className="bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-200">
              <FaTwitter className="text-[#AD954F]" />
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            Contact Us
          </h3>
          <div className="h-1 w-10 bg-[#AD954F] rounded-lg my-2"></div>
          <p className="text-sm text-gray-700 w-full sm:w-[80%] text-center sm:text-left">
            Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
          </p>
          <p className="text-sm text-gray-700 w-full sm:w-[80%] text-center sm:text-left">
            hr@codetechinfosystem.com
          </p>
          <p className="text-sm text-gray-700 w-full sm:w-[80%] text-center sm:text-left">
            Ph : +91 88891 43373
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
