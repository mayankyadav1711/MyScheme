import React, { useState } from "react";

const NewScheme = () => {
  const [formData, setFormData] = useState({
    schemeFullName: "",
    schemeImageLink: "",
    schemeDetails: "",
    shortDetail: "",
    city: "",
    state: "",
    ministry: "",
    gender: "",
    caste: "",
    age: "",
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
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Scheme Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="schemeFullName"> Scheme Full Name</label>
                        <input
                          type="text"
                          name="schemeFullName"
                          id="schemeFullName"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.schemeFullName}
                          onChange={handleChange}
                          placeholder="Scheme Name"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="schemeImageLink"> Scheme Image Link</label>
                        <input
                          type="text"
                          name="schemeImageLink"
                          id="schemeImageLink"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.schemeImageLink}
                          onChange={handleChange}
                          placeholder="Scheme Image Link"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="schemeDetails"> Scheme Details</label>
                        <input
                          type="text"
                          name="schemeDetails"
                          id="schemeDetails"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.schemeDetails}
                          onChange={handleChange}
                          placeholder="Scheme Details"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label htmlFor="shortDetail"> Short Detail About Scheme</label>
                        <input
                          type="text"
                          name="shortDetail"
                          id="shortDetail"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.shortDetail}
                          onChange={handleChange}
                          placeholder=""
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="city"> City</label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder=""
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="state"> State</label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder=""
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="ministry"> MINISTRY</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            name="ministry"
                            id="ministry"
                            placeholder="MINISTRY NAME"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={formData.ministry}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="gender"> GENDER</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            name="gender"
                            id="gender"
                            placeholder="GENDER"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={formData.gender}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="caste"> CASTE* if applied</label>
                        <input
                          type="text"
                          name="caste"
                          id="caste"
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          value={formData.caste}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="age"> AGE</label>
                        <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            name="age"
                            id="age"
                            placeholder={0}
                            className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={formData.age}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            onClick={handleSubmit}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewScheme;
