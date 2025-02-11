import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Quote } from '../assets';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Samual Karl",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 2,
    name: "Daria Linney",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 text-black bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center font-baloo">Testimonials</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Show 3 slides at a time
        spaceBetween={30} // Add spacing
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true, // Enable slide shadows
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-gray-100 rounded-lg p-6 relative mx-4 transition-transform duration-500 ease-in-out">
              {/* Quote Icon */}
              <span className="absolute top-4 right-6 text-3xl text-[#AD954F] font-bold">
                <img src={Quote} alt="quote" />
              </span>

              {/* Profile Image */}
              <div className="w-14 h-14 rounded-full overflow-hidden mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote Text */}
              <p className="text-gray-700">{testimonial.quote}</p>

              {/* Name & Role */}
              <div className="mt-4">
                <p className="font-semibold text-[#AD954F]">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
