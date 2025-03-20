import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const InScheme = () => {
  const { _id } = useParams();
  const [schemeDetails, setSchemeDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchemeDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/scheme/${_id}`);
        const data = await response.json();
        setSchemeDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching scheme details:", error);
        setLoading(false);
      }
    };

    fetchSchemeDetails();
  }, [_id]);

  if (loading) {
    return <p>Loading...</p>; // You can customize the loading indicator
  }
  return (
    <div className=" bg-gray-100">
      <>
        <section className="mb-32">
          <div
            id="map"
            className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
          >
            <img
              src={schemeDetails?.schemeImageLink}
              width="100%"
              height={100}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
              <div className="flex flex-wrap">
                <h2 className="text-6xl font-bold dark:text-black mb-6">
                  {schemeDetails?.schemeFullName}
                </h2>
                <div>
                  <section className="bg-white dark:bg-white-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                        <a
                          href="#"
                          className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
                        >
                          <svg
                            className="w-2.5 h-2.5 me-1.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 14"
                          >
                            <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                          </svg>
                          Tutorial
                        </a>
                        <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                          Details About The Scheme :
                        </h1>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                          {schemeDetails?.schemeDetails}
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                          <a
                            href="#"
                            className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
                          >
                            <svg
                              className="w-2.5 h-2.5 me-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 18"
                            >
                              <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                            </svg>
                            Design
                          </a>
                          <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                            Benifits Of The Scheme :
                          </h2>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                            {schemeDetails?.benefits}
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                          <a
                            href="#"
                            className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
                          >
                            <svg
                              className="w-2.5 h-2.5 me-1.5"
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
                                d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                              />
                            </svg>
                            Code
                          </a>
                          <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                            Documents Required :
                          </h2>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                          <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
    {schemeDetails?.documentsRequired.map((document, index) => (
      <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg
          className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
        <span>{document}</span>
      </li>
    ))}
  </ul>
                          </p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                          <a
                            href="#"
                            className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
                          >
                            <svg
                              className="w-2.5 h-2.5 me-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 18"
                            >
                              <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                            </svg>
                            Design
                          </a>
                          <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                            Eligibility Criteria :
                          </h2>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                          {schemeDetails?.shortDetail}
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                          <a
                            href="#"
                            className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
                          >
                            <svg
                              className="w-2.5 h-2.5 me-1.5"
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
                                d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                              />
                            </svg>
                            Code
                          </a>
                          <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                            People Can Apply (CAST) :
                          </h2>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                            <>
                              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                                STUDENTS FROM :
                              </h2>
                              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                <li>{schemeDetails?.caste}</li>
                                
                              </ul>
                            </>
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                          <a
                            href="#"
                            className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
                          >
                            <svg
                              className="w-2.5 h-2.5 me-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 18"
                            >
                              <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                            </svg>
                            Design
                          </a>
                          <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                           State
                          </h2>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                          {schemeDetails?.state}
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                          <a
                            href="#"
                            className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
                          >
                            <svg
                              className="w-2.5 h-2.5 me-1.5"
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
                                d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                              />
                            </svg>
                            Code
                          </a>
                          <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                            GOVERMENT MINISTRY
                          </h2>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                            <>
                              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                              {schemeDetails?.ministry}
                              </h2>
                             
                            </>
                          </p>
                        </div>
                        <Link to={schemeDetails?.originalSchemeLink}>
                          <button
                            type="button"
                            className="text-white w-40 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          >
                            APPLY NOW
                          </button>
                        </Link>
                      </div>
                      
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </div>
  );
};

export default InScheme;
