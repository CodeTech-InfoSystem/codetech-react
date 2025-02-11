import { Assessment, starImage, Planning, Team, CodingTeam, Discussion, OfficeWork, Collabration } from "../assets";
import { motion } from "framer-motion";
const HeroSection = () => {
    return (
        <section className="text-white py-16">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AD954F] via-[#BCA86F] via-[#CDBF95] via-[#DED4B8] via-[#EBE6D5] to-white">
                    Software Services Enabling <br />
                    <span className="block">Business Competence</span>
                </h1>

                <p className="mt-4 text-lg text-gray-300 w-[40%] mx-auto text-center">
                    We help build and manage a team of world-class developers to bring your vision to life.
                </p>


                {/* Buttons */}
                <div className="my-6 flex justify-center gap-4">
                    <button className="px-10 py-1 bg-[#AD954F] text-white font-semibold rounded-2xl">
                        Enquiry
                    </button>
                </div>
                <button className="px-6 py-2 border-b border-white text-white font-semibold">
                    Our Services
                </button>

                {/* Image Grid */}
                {/* Image Grid - Matching the Given Design */}
                <div className="mt-12 grid grid-cols-4 place-items-center">
                    {/* Row 1 */}
                    <img src={Team} alt="Team Work" className="" />
                    <div></div>
                    <img src={Planning} alt="Coding Team" />
                    <img src={CodingTeam} alt="Coding Team" className="" />
                </div>
                <div className="grid grid-cols-4 gap-2 place-items-center">
                    <img src={Discussion} alt="Discussion" className="mr-[13%]" />
                    <img src={OfficeWork} alt="Office Work" />
                    <img src={Assessment} alt="Project Planning" />
                    <img src={Collabration} alt="Collaboration" className="ml-[13%]" />

                </div>
            </div>
            <motion.div
                className="absolute top-[45%] left-[10%] text-white text-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
                <img src={starImage} alt="star"/>
            </motion.div>

            <motion.div
                className="absolute top-[25%] right-[4%] "
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
                <img src={starImage} className="w-[192px] h-[192px]" alt="big-star"/>
            </motion.div>


        </section>
    );
};

export default HeroSection;
