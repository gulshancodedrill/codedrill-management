import React, { useState } from "react";
import Select from "react-select";
import bg from "../../assets/images/bg.jpg";
import { Link } from "react-router-dom";

export default function RegistrationPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    country: "",
    stateProvince: "",
    phoneCode: "+91",
    phoneNumber: "",
    skills: [] as string[],
    experience: "",
    position: "",
    lastCompany: "",
    currentCompany: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillChange = (selectedOptions: any) => {
    const selectedSkills = selectedOptions
      ? selectedOptions.map((opt: any) => opt.value)
      : [];
    setFormData((prev) => ({
      ...prev,
      skills: selectedSkills,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted ✅", formData);
  };

  const skillOptions = [
    "Drupal",
    "Wordpress",
    "Node JS",
    "Mongodb",
    "React JS",
    "Next JS",
    "Nest JS",
    "Tailwind",
    "Prisma",
    "MySQL",
    "PostgreSQL",
    "GraphQL",
    "TypeScript",
    "JavaScript",
    "HTML",
    "Python",
    "Java",
    "PHP",
    "CSS",
  ].map((skill) => ({ value: skill, label: skill }));

  const selectedSkillOptions = skillOptions.filter((opt) =>
    formData.skills.includes(opt.value)
  );

  const countryCodes = [
    { code: "+91", label: "India" },
    { code: "+1", label: "United States" },
    { code: "+44", label: "United Kingdom" },
    { code: "+61", label: "Australia" },
    { code: "+49", label: "Germany" },
    { code: "+33", label: "France" },
  ];

  const positionOptions = [
    { value: "senior_php_developer", label: "Senior PHP Developer" },
    { value: "junior_php_developer", label: "Junior PHP Developer" },
    { value: "senior_mern_developer", label: "Senior MERN Developer" },
  ];

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image covering full container height */}
      <img
        src={bg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full px-10 py-20 gap-10 min-h-screen">
        {/* Left side welcome text */}
        <div className="text-gray-700 max-w-lg">
          <h1 className="text-4xl mb-4">
            Welcome To{" "}
            <span className="text-[#1D1D99] font-bold">Codedrill Infotech</span>
          </h1>

          <div className="text-lg text-black text-center font-medium flex justify-center">
            We believe in <q>Think, Create, Promote & Grow</q>.
          </div>
          <div className="flex justify-center mt-3">
            <div className="border-t-3 w-40"></div>
          </div>
        </div>

        {/* Right side form */}
        <div className="backdrop-blur-md bg-white/5 border border-slate-200 shadow-xl rounded-xl w-full max-w-md p-6 ring-1 ring-black/5">
          <h2 className="text-xl font-bold mb-4 text-black">
            {step === 1
              ? "Personal Details"
              : step === 2
              ? "Contact Details"
              : "Professional Details"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                    placeholder="Confirm Password"
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm mb-1">Address Line 1</label>
                  <input
                    type="text"
                    name="address1"
                    value={formData.address1}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                    placeholder="Address Line 1"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Address Line 2</label>
                  <input
                    type="text"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                    placeholder="Address Line 2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Postcode</label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                    placeholder="Postcode"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black"
                  >
                    <option value="">Select Country</option>
                    {countryCodes.map(({ code, label }) => (
                      <option key={code} value={label}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">State/Province</label>
                  <input
                    type="text"
                    name="stateProvince"
                    value={formData.stateProvince}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                    placeholder="State/Province"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Phone Number</label>
                  <div className="flex">
                    <select
                      name="phoneCode"
                      value={formData.phoneCode}
                      onChange={handleChange}
                      className="rounded-l-lg p-2 bg-white/20 border border-black/30 text-black"
                    >
                      {countryCodes.map(({ code, label }) => (
                        <option key={code} value={code}>
                          {label} ({code})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="flex-1 rounded-r-lg p-2 border border-l-0 bg-white/20 border-black/30 text-black placeholder:text-black/70"
                      placeholder="1234567890"
                    />
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div>
                  <label className="block text-sm mb-1">Skills</label>
                  <Select
                    isMulti
                    options={skillOptions}
                    value={selectedSkillOptions}
                    onChange={handleSkillChange}
                    className="text-black"
                    classNamePrefix="react-select"
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 6,
                      colors: {
                        ...theme.colors,
                        primary25: "#e0f2ff",
                        primary: "#3b82f6",
                      },
                    })}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Experience (Years)</label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                    placeholder="e.g., 3"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Position in Company</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black"
                  >
                    <option value="">Select Position</option>
                    {positionOptions.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-1">Last Company</label>
                  <input
                    type="text"
                    name="lastCompany"
                    value={formData.lastCompany}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                    placeholder="Last Company"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Current Company</label>
                  <input
                    type="text"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                    placeholder="Current Company"
                  />
                </div>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="pt-4 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep((prev) => prev - 1)}
                  className="bg-gray-300  cursor-pointer hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep((prev) => prev + 1)}
                  className="ml-auto bg-[#1D1D99] cursor-pointer  hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto bg-[#ef78d3] cursor-pointer hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
                
              )}
              
            </div>
            <div className="text-center text-sm font-semibold text-slate-600">
                
                Already have an account? <Link to={"/login"}  className="underline text-[#1D1D99] cursor-pointer font-bold">Login</Link> 
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}
