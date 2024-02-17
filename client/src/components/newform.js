import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
const NewForm = () => {
  const [formData, setFormData] = useState({
    schemeFullName: "",
    schemeImageLink: "",
    schemeDetails: "",
    shortDetail: "",
    benefits:"",
    city: "",
    state: "",
    ministry: "",
    gender: "",
    caste: "",
    age: "",
    originalSchemeLink:""
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch("/new-scheme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Scheme submitted successfully!");
        console.log("Scheme submitted successfully!");
        // Optionally, you can redirect or show a success message here
      } else {
        console.error("Error submitting scheme:", response.statusText);
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error("Error submitting scheme:", error);
      // Handle error, show error message, etc.
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <section>
        <div className="bg-gradient-to-r h-100 from-green-600 to-gray-600 font-[sans-serif] p-6">
          <div className="container mx-auto flex flex-col justify-center items-center">
            <h2 className="text-white text-3xl font-bold mb-4">
              ADD NEW SCHEME HERE
            </h2>
            <p className="text-white text-base text-center mb-6">
              Elevate your growth and success with the help of government schemes and enhance your ability to success.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-xl text-gray-600">ADD Details Of New Scheme </h2>
              <p className="text-gray-500 mb-6">
                This form could only be accessed by the admin, add details of the new scheme in the given form.
              </p>
             

              <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
  <div className="grid gap-4">

    {/* Scheme Full Name */}
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="schemeFullName"
        className="text-sm text-gray-500 dark:text-gray-400 absolute transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-start"
      >
        Scheme Full Name
      </label>
      <input
        type="text"
        name="schemeFullName"
        id="schemeFullName"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        value={formData.schemeFullName}
        onChange={handleChange}
        required
      />
    </div>

    {/* Scheme Image Link */}
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="schemeImageLink"
        className="text-sm text-gray-500 dark:text-gray-400 absolute transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-start"
      >
        Scheme Image Link
      </label>
      <input
        type="text"
        name="schemeImageLink"
        id="schemeImageLink"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        value={formData.schemeImageLink}
        onChange={handleChange}
        required
      />
    </div>

    {/* Scheme Details */}
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="schemeDetails"
        className="text-sm text-gray-500 dark:text-gray-400 absolute transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-start"
      >
        Scheme Details
      </label>
      <textarea
        name="schemeDetails"
        id="schemeDetails"
        rows="4"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        value={formData.schemeDetails}
        onChange={handleChange}
        required
      />
    </div>

    {/* Short Detail */}
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="shortDetail"
        className="text-sm text-gray-500 dark:text-gray-400 absolute transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-start"
      >
        Short Detail
      </label>
      <textarea
        name="shortDetail"
        id="shortDetail"
        rows="4"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        value={formData.shortDetail}
        onChange={handleChange}
        required
      />
    </div>

    {/* Benefits */}
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="benefits"
        className="text-sm text-gray-500 dark:text-gray-400 absolute transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-start"
      >
        Benefits
      </label>
      <textarea
        name="benefits"
        id="benefits"
        rows="4"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        value={formData.benefits}
        onChange={handleChange}
        required
      />
    </div>

    {/* State */}
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="state"
        className="text-sm text-gray-500 dark:text-gray-400 absolute transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-start"
      >
        State
      </label>
      <select
        name="state"
        id="state"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        value={formData.state}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select State</option>
    
  <option value="andhra pradesh">Andhra Pradesh</option>
  <option value="arunachal pradesh">Arunachal Pradesh</option>
  <option value="assam">Assam</option>
  <option value="bihar">Bihar</option>
  <option value="chandigarh">Chandigarh</option>
  <option value="chhattisgarh">Chhattisgarh</option>

  <option value="delhi">Delhi</option>
  <option value="goa">Goa</option>
  <option value="gujarat">Gujarat</option>
  <option value="haryana">Haryana</option>
  <option value="himachal pradesh">Himachal Pradesh</option>
  <option value="jammu and kashmir">Jammu and Kashmir</option>
  <option value="jharkhand">Jharkhand</option>
  <option value="karnataka">Karnataka</option>
  <option value="kerala">Kerala</option>
  <option value="ladakh">Ladakh</option>
  <option value="lakshadweep">Lakshadweep</option>
  <option value="madhya pradesh">Madhya Pradesh</option>
  <option value="maharashtra">Maharashtra</option>
  <option value="manipur">Manipur</option>
  <option value="meghalaya">Meghalaya</option>
  <option value="mizoram">Mizoram</option>
  <option value="nagaland">Nagaland</option>
  <option value="odisha">Odisha</option>
  <option value="puducherry">Puducherry</option>
  <option value="punjab">Punjab</option>
  <option value="rajasthan">Rajasthan</option>
  <option value="sikkim">Sikkim</option>
  <option value="tamil nadu">Tamil Nadu</option>
  <option value="telangana">Telangana</option>
  <option value="tripura">Tripura</option>
  <option value="uttar pradesh">Uttar Pradesh</option>
  <option value="uttarakhand">Uttarakhand</option>
  <option value="west bengal">West Bengal</option>
        {/* Add state options */}
      </select>
    </div>

    {/* Ministry */}
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="ministry"
        className="text-sm text-gray-500 dark:text-gray-400 absolute transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-start"
      >
        Ministry
      </label>
      <select
        name="ministry"
        id="ministry"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        value={formData.ministry}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select Ministry</option>
        <option value="nptel">NPTEL</option>
      <option value="ayush">AYUSH</option>
      <option value="aicte">AICTE</option>
      <option value="isro">ISRO</option>
      <option value="kvpy">KVPY</option>
      </select>
    </div>

    {/* Gender */}
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="gender"
        className="text-sm text-gray-500 dark:text-gray-400 absolute transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-start"
      >
        Gender
      </label>
      <select
        name="gender"
        id="gender"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        value={formData.gender}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>

    {/* Caste */}
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="caste"
        className="text-sm text-gray-500 dark:text-gray-400 absolute transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-start"
      >
        Caste
      </label>
      <select
        name="caste"
        id="caste"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        value={formData.caste}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select Caste</option>
        <option value="general">GENERAL</option>
        <option value="obc">OBC</option>
        <option value="st">ST</option>
        <option value="sc">SC</option>
        <option value="ews">EWS</option>
        <option value="minority">MINORITY</option>
        {/* Add caste options */}
      </select>
    </div>

    {/* Age */}
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="age"
        className="text-sm text-gray-500 dark:text-gray-400 absolute transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-start"
      >
        Age
      </label>
      <input
        type="number"
        name="age"
        id="age"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        value={formData.age}
        onChange={handleChange}
        required
      />
    </div>

    {/* Original Scheme Link */}
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="originalSchemeLink"
        className="text-sm text-gray-500 dark:text-gray-400 absolute transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-start"
      >
        Original Scheme Link
      </label>
      <input
        type="url"
        name="originalSchemeLink"
        id="originalSchemeLink"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        value={formData.originalSchemeLink}
        onChange={handleChange}
        required
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>

  </div>
</form>


            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default NewForm;