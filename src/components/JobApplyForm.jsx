import React, { useState } from 'react';

const JobApplyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    location: '',
    workingMode: '',
    totalExp: '',
    jobRole: '',
    currentCompany: '',
    noticePeriod: '',
    cv: null,
  });

  const [cvFileName, setCvFileName] = useState('No file chosen');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, cv: file }));
    setCvFileName(file ? file.name : 'No file chosen');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl space-y-4 shadow-lg"
    >
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full text-black border px-4 py-2 rounded font-raleway"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full text-black border px-4 py-2 rounded font-raleway"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Mobile No."
        value={formData.phone}
        onChange={handleChange}
        className="w-full text-black border px-4 py-2 rounded font-raleway"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full text-black border px-4 py-2 rounded font-raleway"
      />
      <input
        type="text"
        name="location"
        placeholder="Current Location"
        value={formData.location}
        onChange={handleChange}
        className="w-full text-black border px-4 py-2 rounded font-raleway"
      />
      <select
        name="workingMode"
        value={formData.workingMode}
        onChange={handleChange}
        className="w-full text-black border px-4 py-2 rounded font-raleway"
      >
        <option value="" className='font-raleway'>Select Preferabl Working Mode</option>
        <option value="Remote">Remote</option>
        <option value="Onsite">Onsite</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <input
        type="text"
        name="totalExp"
        placeholder="Total Experience (e.g. 3 years)"
        value={formData.totalExp}
        onChange={handleChange}
        className="w-full text-black border px-4 py-2 rounded font-raleway"
      />
      <input
        type="text"
        name="jobRole"
        placeholder="Job Role"
        value={formData.jobRole}
        onChange={handleChange}
        className="w-full text-black border px-4 py-2 rounded font-raleway"
      />
      <input
        type="text"
        name="currentCompany"
        placeholder="Current Company"
        value={formData.currentCompany}
        onChange={handleChange}
        className="w-full text-black border px-4 py-2 rounded font-raleway"
      />
      <input
        type="text"
        name="noticePeriod"
        placeholder="Notice Period (e.g. 15 days)"
        value={formData.noticePeriod}
        onChange={handleChange}
        className="w-full text-black border px-4 py-2 rounded font-raleway"
      />

      <div className="flex items-center gap-2">
        <label
          htmlFor="cv-upload"
          className="bg-[#af9854] text-white font-semibold py-2 px-4 rounded cursor-pointer font-raleway"
        >
          Upload Resume *
        </label>
        <span className="text-gray-500">{cvFileName}</span>
        <input
          id="cv-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#af9854] text-white font-bold py-2 rounded mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default JobApplyForm;
