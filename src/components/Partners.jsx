import React from "react";
import { Partner } from '../assets';

const Partners = () => {
    return (
        <section className="text-center">
            <div className="bg-white rounded-lg flex items-center justify-center">
                <img src={Partner} className="" alt="partnerImage"/>
            </div>
        </section>
    );
};

export default Partners;
