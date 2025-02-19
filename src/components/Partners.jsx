import React from "react";
import { Partner, GrayLabel } from '../assets';

const Partners = () => {
    return (
        <section className="relative text-center bg-white overflow-hidden">
            {/* Background Label (Gray) */}
            <div className="absolute">
                <img src={GrayLabel} alt="Gray Background Label"/>
            </div>

            {/* Scrolling Partner Logos (Gold) */}
            <div className="relative">
                <div className="">
                    <img src={Partner} alt="Partner Logos"/>
                </div>
                
            </div>
        </section>
    );
};

export default Partners;
