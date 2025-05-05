import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
    const [showStars, setShowStars] = useState(window.innerWidth > 1020);

    useEffect(() => {
        const handleResize = () => setShowStars(window.innerWidth > 1020);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="text-white pb-16 relative mt-16">
            <div className="max-w-7xl mx-auto text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AD954F] via-[#BCA86F] via-[#CDBF95] via-[#DED4B8] via-[#EBE6D5] to-white leading-[70px]" style={{ lineHeight: '70px' }}>
                    Software Services Enabling <br />
                    <span className="block">Business Competence</span>
                </h1>

                <p className="my-8 text-lg text-gray-300 w-full md:w-[50%] mx-auto text-center">
                We are the ones who bring your thoughts into the practical world with top notch quality and affordability.
                </p>

                {/* Buttons */}
                <div className="my-6 flex justify-center gap-4">
                    <button className="px-16 py-1 bg-[#AD954F] text-white font-semibold rounded-3xl">
                        Enquiry
                    </button>
                </div>
                <button className="px-6 py-2 border-b border-white text-white font-semibold">
                    Our Services
                </button>

                {/* Image Grid */}
                <div className="mt-12 grid grid-cols-4 gap-x-6 place-items-center">
                    <img src="/images/team.svg" alt="Team Work" className="w-full max-w-[400px]" />
                    <div></div>
                    <img src="/images/planning.svg" alt="Planning" className="w-full max-w-[400px]" />
                    <img src="/images/coding.svg" alt="Coding Team" className="w-full max-w-[400px]" />
                </div>
                <div className="grid grid-cols-4 gap-x-6 place-items-center">
                    <img src="/images/discussion.svg" alt="Discussion" className="w-full max-w-[400px]" />
                    <img src="/images/office.svg" alt="Office Work" className="w-full max-w-[400px]" />
                    <img src="/images/assesment.svg" alt="Assessment" className="w-full max-w-[400px]" />
                    <img src="/images/collabration.svg" alt="Collaboration" className="w-full max-w-[400px]" />
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
