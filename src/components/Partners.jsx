import React from "react";

const Partners = () => {
  return (
    <section className="relative text-center bg-white overflow-hidden mt-5">
      {/* Background Label (Gray) */}
      <div className="absolute inset-0">
        <img
          src="/images/gray-label.svg"
          alt="Gray Background Label"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scrolling Partner Logos (Gold) */}
      <div className="relative z-10">
        <img
          src="/images/partner.svg"
          alt="Partner Logos"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Partners;
