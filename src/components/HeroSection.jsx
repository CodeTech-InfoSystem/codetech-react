import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();
    const [showStars, setShowStars] = useState(window.innerWidth > 1020);

    useEffect(() => {
        const handleResize = () => setShowStars(window.innerWidth > 1020);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="text-white relative mt-[4.375rem]">
            <div className="max-w-7xl mx-auto text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AD954F] via-[#BCA86F] via-[#CDBF95] via-[#DED4B8] via-[#EBE6D5] to-white leading-[70px]" style={{ lineHeight: '70px' }}>
                    Software Services Enabling <br />
                    <span className="block">Business Competence</span>
                </h1>

                <p className="mt-[33px] text-lg text-gray-300 w-full md:w-[40%] mx-auto text-center font-raleway" style={{ lineHeight: '32px' }}>
                    We help build and manage a team of world-class developers to bring your vision to life.
                </p>

                {/* Buttons */}
                <div className="my-6 flex justify-center gap-4">
                    <button onClick={() => navigate("/contact-us")} className="px-10 py-2 bg-[#AD954F] text-white font-bold rounded-2xl lg:w-[234px] lg:h-[42px] leading-[1.5]">
                        Enquiry
                    </button>
                </div>
                <button onClick={() => navigate("/services")} className="px-6 py-2 border-b border-white text-white font-semibold">
                    Our Services
                </button>

                {/* Image Grid */}
                <div className="mt-12 grid grid-cols-4 gap-x-6 place-items-center">
                    <img src="/images/team.svg" alt="Team Work" className="w-full max-w-[400px] transition-transform duration-300 ease-in-out hover:scale-105" />
                    <div></div>
                    <img src="/images/planning.svg" alt="Planning" className="w-full max-w-[400px] transition-transform duration-300 ease-in-out hover:scale-105" />
                    <img src="/images/coding.svg" alt="Coding Team" className="w-full max-w-[400px] transition-transform duration-300 ease-in-out hover:scale-105" />
                </div>

                <div className="grid grid-cols-4 gap-x-6 place-items-center mt-6">
                    <img src="/images/discussion.svg" alt="Discussion" className="w-full max-w-[400px] transition-transform duration-300 ease-in-out hover:scale-105" />
                    <img src="/images/office.svg" alt="Office Work" className="w-full max-w-[400px] transition-transform duration-300 ease-in-out hover:scale-105" />
                    <img src="/images/assesment.svg" alt="Assessment" className="w-full max-w-[400px] transition-transform duration-300 ease-in-out hover:scale-105" />
                    <img src="/images/collabration.svg" alt="Collaboration" className="w-full max-w-[400px] transition-transform duration-300 ease-in-out hover:scale-105" />
                </div>



            </div>

            {/* Rotating Stars - Hide under 1020px and when menu is open */}
            {showStars && (
                <>
                    <motion.div
                        className="absolute top-[25%] left-[10%] text-white text-2xl hidden md:block"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    >
                        <img src="/images/start.svg" alt="star" />
                    </motion.div>

                    <motion.div
                        className="absolute top-[5%] right-[4%] hidden md:block"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    >
                        <img src="/images/start.svg" className="w-[192px] h-[192px]" alt="big-star" />
                    </motion.div>
                </>
            )}
        </section>
    );
};

export default HeroSection;
