import React from "react";

const Partners = () => {
  return (
    <section className="relative text-center bg-white overflow-hidden mt-5">
      {/* Background Label (Gray) */}
      <div className="absolute">
        <img src="/images/gray-label.svg" alt="Gray Background Label" />
      </div>

      {/* Scrolling Partner Logos (Gold) */}
      <div className="relative">
        <div className="">
          <img src="/images/partner.svg" alt="Partner Logos" />
        </div>

      </div>
    </section>
  );
};

export default Partners;
