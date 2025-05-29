import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ref, uploadBytes } from "firebase/storage";
import { storage } from '../util/firebaseConfig';

const JobApplyForm = ({ location, workingMode, jobRole }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    location: '',
    totalExp: '',
    jobRole: '',
    currentCompany: '',
    noticePeriod: '',
    relocated: false,
    cv: null,
    currentCtc: '',
    expectedCtc: '',
    experienceType: '',
  });

  const [cvFileName, setCvFileName] = useState('No file chosen');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'firstName' || name === 'lastName') {
      const trimmedValue = value.trim();
      if (trimmedValue.length > 0 && trimmedValue.length < 3) {
        setErrors((prev) => ({
          ...prev,
          [name]: `${name === 'firstName' ? 'First Name' : 'Last Name'} must be at least 3 characters long.`,
        }));
      } else {

        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, cv: file }));
    setCvFileName(file ? file.name : 'No file chosen');
  };

  async function uploadResumeFile(file) {
    try {
      const originalFileName = file.name;
      const lastDotIndex = originalFileName.lastIndexOf('.');
      const fileNameWithoutExtension = originalFileName.substring(0, lastDotIndex);
      const fileExtension = originalFileName.substring(lastDotIndex);
      const hexCode = Math.random().toString(16).substring(2, 8);
      const date = new Date().toLocaleDateString('en-GB').replace(/\//g, '');
      const newFileName = `${fileNameWithoutExtension.replace(/\s+/g, '_')}_${hexCode}_${date}${fileExtension}`;
      const storagePath = `resume/${newFileName}`;
      const storageRef = ref(storage, storagePath);

      await uploadBytes(storageRef, file);
      return storagePath;
    } catch (err) {
      console.error('Upload failed:', err);
      toast.error("Resume upload failed!");
      return null;
    }
  }

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile No. is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Invalid Mobile No.";
    }


    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email Address is invalid";
    }

    if (formData.experienceType === "experienced") {
      if (!formData.noticePeriod.trim()) {
        newErrors.noticePeriod = "Notice period is required";
      }

      if (!formData.currentCtc.trim()) {
        newErrors.currentCtc = "Current CTC is required";
      }

      if (!formData.expectedCtc.trim()) {
        newErrors.expectedCtc = "Expected CTC is required";
      }

      if (!formData.totalExp.trim()) {
        newErrors.totalExp = "Total experience is required";
      }

      if (!formData.currentCompany.trim()) {
        newErrors.currentCompany = "Current company is required";
      }
    }


    if (!formData.experienceType) {
      newErrors.experienceType = "Please select either Fresher or Experienced.";
    }

    if (!formData.cv) newErrors.cv = "Resume is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      if (!validate()) {
        return;
      }
      const resumePath = await uploadResumeFile(formData.cv);
      if (!resumePath) return;

      const data = new FormData();
      data.append("form-name", "jobApply");
      data.append("subject", `Job Application - ${formData.firstName} ${formData.lastName}`);
      data.append('jobTitle', jobRole);
      data.append("resumeURL", `https://codetechinfosystem.com/admin/${resumePath}`);

      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'cv' && value) {
          data.append(key, value);
        }
      });

      const response = await fetch("/", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      toast.success("Your application submitted successfully!");
      setFormData({
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
        currentCtc: '',
        expectedCtc: '',
        experienceType: '',
      });
      setCvFileName("No file chosen");

    } catch (error) {
      toast.error("Something Went Wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        name="jobApply" method='post' data-netlify="true" data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl space-y-4 shadow-lg"
        encType="multipart/form-data"
      >
        <input type="hidden" name="form-name" value="jobApply" />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full text-black border px-4 py-2 rounded font-raleway"
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full text-black border px-4 py-2 rounded font-raleway"
        />
        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Mobile No."
          value={formData.phone}
          onChange={handleChange}
          className="w-full text-black border px-4 py-2 rounded font-raleway"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full text-black border px-4 py-2 rounded font-raleway"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        <input
          type="text"
          name="location"
          placeholder="Current Location"
          value={formData.location}
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
        <div className="flex flex-col space-y-2">

          <label className="flex items-center space-x-2 text-base font-raleway">
            <input
              type="radio"
              name="experienceType"
              value="fresher"
              checked={formData.experienceType === "fresher"}
              onChange={handleChange}
            />
            <span className='text-gray-600'>Fresher</span>
          </label>
          <label className="flex items-center space-x-2 text-base font-raleway">
            <input
              type="radio"
              name="experienceType"
              value="experienced"
              checked={formData.experienceType === "experienced"}
              onChange={handleChange}
            />
            <span className='text-gray-600'>Experienced</span>
          </label>
          {errors.experienceType && <p className="text-red-500 text-sm mt-1">{errors.experienceType}</p>}
        </div>
        {formData.experienceType === 'experienced' && (
          <>
            <input
              type="text"
              name="totalExp"
              placeholder="Total Experience (e.g. 3 years)"
              value={formData.totalExp}
              onChange={handleChange}
              className="w-full text-black border px-4 py-2 rounded font-raleway"
            />
            {errors.totalExp && <p className="text-red-500 text-sm mt-1">{errors.totalExp}</p>}

            <input
              type="text"
              name="currentCompany"
              placeholder="Current Company"
              value={formData.currentCompany}
              onChange={handleChange}
              className="w-full text-black border px-4 py-2 rounded font-raleway"
            />
            {errors.currentCompany && <p className="text-red-500 text-sm mt-1">{errors.currentCompany}</p>}

            <input
              type="text"
              name="noticePeriod"
              placeholder="Notice Period (e.g. 15 days)"
              value={formData.noticePeriod}
              onChange={handleChange}
              className="w-full text-black border px-4 py-2 rounded font-raleway"
            />
            {errors.noticePeriod && <p className="text-red-500 text-sm mt-1">{errors.noticePeriod}</p>}

            <input
              type="number"
              name="currentCtc"
              min="0"
              placeholder="Current CTC (in LPA)"
              value={formData.currentCtc}
              onChange={handleChange}
              className="w-full text-black border px-4 py-2 rounded font-raleway"
            />
            {errors.currentCtc && <p className="text-red-500 text-sm mt-1">{errors.currentCtc}</p>}

            <input
              type="number"
              name="expectedCtc"
              min="0"
              placeholder="Expected CTC (in LPA)"
              value={formData.expectedCtc}
              onChange={handleChange}
              className="w-full text-black border px-4 py-2 rounded font-raleway"
            />
            {errors.expectedCtc && <p className="text-red-500 text-sm mt-1">{errors.expectedCtc}</p>}
          </>
        )}

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
            name="cv"
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf"
          />
          {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv}</p>}
        </div>

        {(workingMode === 'Hybrid' || workingMode === 'Onsite') && (
          <label className="flex items-center space-x-2 text-black mt-2">
            <input
              type="checkbox"
              name="relocated"
              checked={formData.relocated || false}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  relocated: e.target.checked,
                }))
              }
              className="text-black"
            />
            <span className="font-raleway">
              Are you ready to relocate to&nbsp;
              <strong>
                {Array.isArray(location)
                  ? location.map((loc) => loc.label).join(' or ')
                  : location || 'the specified location'}
              </strong>
              ?
            </span>
          </label>
        )}
        <button
          type="submit"
          className={`w-full text-white font-bold py-2 rounded mt-4 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#af9854]'}`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default JobApplyForm;
   