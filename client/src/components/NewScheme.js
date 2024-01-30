import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewScheme = () => {

    return (

        <div>
            <section>
                <div className="bg-gradient-to-r h-100 from-green-600 to-gray-600 font-[sans-serif] p-6">
                    <div className="container mx-auto flex flex-col justify-center items-center">
                        <h2 className="text-white text-3xl font-bold mb-4">
                            ADD NEW SCHEME HERE
                        </h2>
                        <p className="text-white text-base text-center mb-6">
                            Elevate your growth and success with the help of goverment schems and enhance your ability to the sucess.
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
                                This form could only be access by the admin , add details of the new scheme in the given form .
                            </p>
                            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                    <div className="text-gray-600">
                                        <p className="font-medium text-lg">Scheme Details</p>
                                        <p>Please fill out all the fields.</p>
                                    </div>
                                    <div className="lg:col-span-2">
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="flex items-center justify-center w-full">
  <label
    htmlFor="dropzone-file"
    className="flex flex-col items-center justify-center w-FULL h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
  >
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <svg
        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF (MAX. 800x400px)
      </p>
    </div>
    <input id="dropzone-file" type="file" className="hidden" />
  </label>
</div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="full_name"> Scheme Full Name</label>
                                                <input
                                                    type="text"
                                                    name="full_name"
                                                    id="full_name"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    defaultValue=""
                                                    placeholder="Scheme Name"
                                                />
                                            </div>
                                            <div className="md:col-span-5">
                                                <label htmlFor="email">Enter Full Details About The Scheme </label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    defaultValue=""

                                                />
                                            </div>
                                            <div className="md:col-span-3">
                                                <label htmlFor="address">Short Detail About Scheme</label>
                                                <input
                                                    type="text"
                                                    name="address"
                                                    id="address"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    defaultValue=""
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label htmlFor="city">City</label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    defaultValue=""
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label htmlFor="country">MINISTRY</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input
                                                        name="country"
                                                        id="country"
                                                        placeholder="MINISTRY NAME"
                                                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                        defaultValue=""
                                                    />
                                                    <button
                                                        tabIndex={-1}
                                                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                                                    >
                                                        <svg
                                                            className="w-4 h-4 mx-2 fill-current"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <line x1={18} y1={6} x2={6} y2={18} />
                                                            <line x1={6} y1={6} x2={18} y2={18} />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        tabIndex={-1}
                                                        htmlFor="show_more"
                                                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                                                    >
                                                        <svg
                                                            className="w-4 h-4 mx-2 fill-current"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <polyline points="18 15 12 9 6 15" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label htmlFor="state">GENDER</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input
                                                        name="state"
                                                        id="state"
                                                        placeholder="GENDER"
                                                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                        defaultValue=""
                                                    />
                                                    <button
                                                        tabIndex={-1}
                                                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                                                    >
                                                        <svg
                                                            className="w-4 h-4 mx-2 fill-current"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <line x1={18} y1={6} x2={6} y2={18} />
                                                            <line x1={6} y1={6} x2={18} y2={18} />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        tabIndex={-1}
                                                        htmlFor="show_more"
                                                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                                                    >
                                                        <svg
                                                            className="w-4 h-4 mx-2 fill-current"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <polyline points="18 15 12 9 6 15" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="md:col-span-1">
                                                <label htmlFor="zipcode">CASTE* if applied</label>
                                                <input
                                                    type="text"
                                                    name="zipcode"
                                                    id="zipcode"
                                                    className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    placeholder=""
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="md:col-span-5">
                                                <div className="inline-flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        name="billing_same"
                                                        id="billing_same"
                                                        className="form-checkbox"
                                                    />
                                                    <label htmlFor="billing_same" className="ml-2">
                                                        The given all details above are not false .
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="soda">AGE</label>
                                                <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <button
                                                        tabIndex={-1}
                                                        htmlFor="show_more"
                                                        className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4 mx-2"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <input
                                                        name="soda"
                                                        id="soda"
                                                        placeholder={0}
                                                        className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                        defaultValue={0}
                                                    />
                                                    <button
                                                        tabIndex={-1}
                                                        htmlFor="show_more"
                                                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4 mx-2 fill-current"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                            
                                            <div className="md:col-span-5 text-right">
                                                <div className="inline-flex items-end">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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