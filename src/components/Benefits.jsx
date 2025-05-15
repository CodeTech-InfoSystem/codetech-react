import React, { useEffect } from 'react'
import { FaLaptopCode, FaBookOpen, FaBalanceScale } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import WOW from 'wowjs';
import 'animate.css';

export const Benefits = () => {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const benefits = [
    {
      title: 'Work & Life Balance',
      description: 'We offer flexible work arrangements with options for remote work, hybrid schedules, or flexible hours, while maintaining a 5-day workweek.',
      image: '/images/work-life-balance.jpg',
      icon: <FaBalanceScale className="text-4xl text-[#ad954f]" />
    },
    {
      title: 'Learning & Growth',
      description: "We’re committed to your growth, offering internal learning portals, access to top industry conferences and webinars, and cross-training and upskilling opportunities, whether you're starting your career or aiming for a leadership role.",
      image: '/images/Growth-of-Learning.png',
      icon: <FaBookOpen className="text-4xl text-[#ad954f]" />
    },
    {
      title: 'Career Development',
      description: 'We prioritize career development through training programs and internship opportunities, formal mentorship programs, and career path planning with internal mobility options and performance development plans.',
      image: '/images/career-development.png',
      icon: <FaLaptopCode className="text-4xl text-[#ad954f]" />
    },
    {
      title: 'Core Benefits',
      description: 'We offer Paid Time Off (PTO) including monthly paid leave, holiday leave, and sick leave, along with a Provident Fund (PF) and additional benefits to support your well-being.',
      image: '/images/skill-development.avif',
      icon: <FaUserShield className="text-4xl text-[#ad954f]" />
    },
    {
      title: 'Continuous Learning',
      description: 'You will work with the best minds and grow through continuous learning and development programs.',
      image: '/images/continuous-learning.png',
      icon: <FaBookOpen className="text-4xl text-[#ad954f]" />
    },
  ];

  return (
    <section className="bg-[#f3f4f6] py-16 sm:px-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 font-Baloo">Employee Benefits and Perks</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 .text-gray-600">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] rounded-2xl p-6 shadow-md text-center flex flex-col items-center font-raleway min-h-[300px]"
            >
              {/* Icon */}
              <div className="mb-4">{benefit.icon}</div>

              {/* Title */}
              <h3 className="font-semibold text-xl text-gray-900 mb-3">{benefit.title}</h3>

              {/* Description */}
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
