import React from 'react'
import { MdStar } from "react-icons/md";
export const ReviewsSection = () => {

  const testimonials = [
    {
      name: 'Sanjana verma',
      photo: '/images/person1.jpg',
      feedback: "Working at CodeTech has not just been fulfilling, it’s been truly inspiring!",
    },
    {
      name: 'sakshi patware',
      photo: '/images/person2.webp',
      feedback: "CodeTech infosystems has been instrumental in shaping my career.",
    },
    {
      name: 'Deepika Dubey',
      photo: '/images/person3.jpg',
      feedback: "I’ve had the pleasure of working as a web designer at CodeTech for over 10 years.",
    },
    {
      name: 'Bhola Gupta',
      photo: '/images/person4.webp',
      feedback: "I’m proud to be a part of CodeTech. It’s more than just a job—it’s our company, where we all contribute to its success.",
    },
    {
      name: 'Sourabh Patware',
      photo: '/images/person5.webp',
      feedback: "CodeTech infosystems has helped me grow from a developer to a team lead.",
    },
    {
      name: 'aman siddiqui',
      photo: '/images/person6.jpg',
      feedback: "Being part of CodeTech infosystems has been an incredible experience.",
    },
  ];
  return (
    <section className="bg-white py-16 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 font-Baloo 2">
          Discover Why Our Team Loves Working Here
        </h2>
        <p className="text-center mb-12 text-gray-600 font-raleway">
          Here's what our employees have to say about us on Glassdoor.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#f3f4f6] text-gray-800 rounded-2xl p-6 shadow-md flex flex-col justify-between"
            >
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <MdStar key={i} className="text-[#AC9450] w-4 h-5" />
                ))}
              </div>
              <div className="flex items-center mb-2">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-8 h-8 rounded-full mr-3 object-cover"
                />
                <h4 className="font-semibold font-raleway">{t.name}</h4>
              </div>
              <p className="text-gray-600 font-raleway">{t.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
