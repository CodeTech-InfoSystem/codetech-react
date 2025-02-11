import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import {Companylogo,React,Python,Wordpress} from '../assets';

const Footer = () => {
  return (
    <footer className="bg-[#E7DFC5] py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left - Logo & About */}
        <div>
        <img src={Companylogo} alt="company logo" className="w-[100px]"/>

          <p className="text-sm text-gray-700 w-[80%]">
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
                <img src={React} alt="ReactJs Dev." className="w-8 h-8 text-[#AD954F]" />
              </div>
              <div>
                <p className="font-bold">ReactJs Dev.</p>
                <p className="text-sm text-gray-600">1-5 Years of Exp.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-md">
              <div className="bg-white p-1 rounded-lg cursor-pointer hover:bg-gray-200">
                <img src={Wordpress} alt="Wordpress Dev." className="w-8 h-8 text-[#AD954F]" />
              </div>
              <div>
              <p className="font-bold">Wordpress Dev.</p>
              <p className="text-sm text-gray-600">1-5 Years of Exp.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-md">
              <div className="bg-white p-1 rounded-lg cursor-pointer hover:bg-gray-200">
                <img src={Python} alt="Python Dev." className="w-8 h-8 text-[#AD954F]" />
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
          <p className="text-sm text-gray-700 w-[80%]">
            It is a long established fact that a reader will be distracted by the readable content.
          </p>
          <div className="flex gap-3 mt-4">
            <div className="bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-200">
              <FaLinkedinIn className="text-[#AD954F]" />
            </div>
            <div className="bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-200">
              <FaInstagram className="text-[#AD954F]" />
            </div>
            <div className="bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-200">
              <FaFacebookF className="text-[#AD954F]" />
            </div>
            <div className="bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-200">
              <FaTwitter className="text-[#AD954F]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
