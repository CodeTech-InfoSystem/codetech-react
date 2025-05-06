import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Codetech Infosystem has consistently demonstrated technical excellence and a deep understanding of our project requirements. Their commitment to quality and timely delivery has made them a reliable technology partner for our business",
  },
  {
    id: 2,
    name: "Sarah Khan",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote:
      "Partnering with Codetech Infosystem was instrumental in scaling our online presence. Their design thinking, development expertise, and post-launch support exceeded our expectations",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "From initial consultation to final delivery, Codetech Infosystem maintained a high standard of professionalism. Their team’s attention to detail, technical knowledge, and agile approach made our mobile app launch a success",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-white text-black px-2 sm:px-0">

      <h2 className="text-4xl font-bold mb-8 text-center">Testimonials</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        pagination={{ clickable: true }}
        centeredSlides={true}
        initialSlide={1} // Center the middle slide
        slidesPerView={1} // Default to 1 slide per view for small screens
        modules={[EffectCoverflow, Pagination]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 0 },
          768: { slidesPerView: 3, spaceBetween: 0 },
          1024: { slidesPerView: 3, spaceBetween: 0 },
          1280: { slidesPerView: 3, spaceBetween: 0 },
        }}
        className="w-full px-6"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="flex justify-center">
            {({ isActive }) => (
              <div
                className={`relative bg-gray-100 rounded-xl p-4 sm:p-4 md:p-6 w-full
                 max-w-[800px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[800px]
                 transition-all duration-500 ease-in-out text-left 
                 ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-80 blur-[1px]"}`}
              >
                {/* Profile & Text Container */}
                <div className="flex items-start gap-4">
                  {/* Profile Image */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden font-raleway">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 leading-relaxed mt-4 text-base md:text-base lg:text-base font-raleway">
                  {testimonial.quote}
                </p>

                {/* Name & Role */}
                <div className="mt-4 font-raleway">
                  <p className="font-semibold text-[#AD954F] text-base sm:text-base">{testimonial.name}</p>
                  <p className="text-gray-500  sm:text-sm">{testimonial.role}</p>
                </div>

                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <img src="/images/quote.svg" alt="Quote Icon" className="h-8" />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Pagination Dots */}
        <div className="mt-8">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
