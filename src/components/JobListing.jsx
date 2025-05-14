import React from 'react'
import JobListingForm from './JobListingForm'

 const JobListing = () => {
  return (
    <div className="text-white min-h-screen py-20 px-6 bg-[#242423] pb-[8.5rem]">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
     
      <div>
        <h1 className="text-4xl font-bold mb-6 font-Baloo 2">
          E-commerce Developer
        </h1>

        <h2 className="text-xl font-semibold text-[#af9854] font-Baloo 2">Experience</h2>
        <p className="mb-4 font-raleway">
          Minimum 6 months of experience required. Freshers may also apply.
        </p>

        <h2 className="text-xl font-semibold text-[#af9854] font-Baloo 2">Qualification</h2>
        <p className="mb-4 font-raleway">
          Bachelor of Science, Bachelor of Engineering/Bachelor of Technology,
          B.C.A, Diploma, M.E./M.Tech, M.S., M.C.A
        </p>

        <h2 className="text-xl font-semibold text-[#af9854] font-Baloo 2">Roles & Responsibilities:</h2>
        <ul className="list-disc list-inside mb-4 space-y-1 font-raleway">
          <li>Develop, customize, and maintain E-commerce websites and applications.</li>
          <li>Implement and optimize product catalogs, shopping carts, and payment gateways.</li>
          <li>Integrate third-party APIs (payment processors, CRM, ERP, etc.).</li>
          <li>Ensure website security, performance, and scalability.</li>
          <li>Develop and maintain responsive and mobile-friendly designs.</li>
          <li>Work with databases to manage product inventories, customer data, and transactions.</li>
          <li>Troubleshoot, debug, and optimize website speed and functionality.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#af9854]">Skill Required:</h2>
        <ul className="list-disc list-inside space-y-1 font-raleway">
          <li>Proficiency in platforms like Shopify, Magento, WooCommerce, etc.</li>
          <li>Strong knowledge of PHP, JavaScript, HTML, CSS, and MySQL.</li>
          <li>Experience with E-commerce frameworks (Laravel, etc.).</li>
          <li>Familiarity with CMS (WordPress, Drupal) and headless commerce.</li>
          <li>Experience with RESTful APIs and third-party integrations.</li>
        </ul>
      </div>

      {/* Form */}
      <div>
      <JobListingForm/>
      </div>
      </div>
  </div>
  )
}
export default JobListing