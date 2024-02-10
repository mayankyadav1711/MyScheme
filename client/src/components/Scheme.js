import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Scheme = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [schemes, setSchemes] = useState([]);
    const [filteredSchemes, setFilteredSchemes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
      age: "",
      gender: "",
      state: "",
      ministry: "",
      caste: "",
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [schemesPerPage] = useState(6);
  
    useEffect(() => {
      fetchSchemes();
    }, []);
  
    useEffect(() => {
      applyFiltersAndSearch();
    }, [schemes, filters, searchQuery]);
  
    const fetchSchemes = async () => {
      try {
        const response = await fetch("/get-schemes");
        const data = await response.json();
        setSchemes(data);
      } catch (error) {
        console.error("Error fetching schemes:", error);
      }
    };
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleFilterChange = (filter, value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filter]: value,
      }));
    };
  
    const resetFilters = () => {
      setFilters({
        age: "",
        gender: "",
        state: "",
        ministry: "",
        caste: "",
      });
    };
  
    const applyFiltersAndSearch = () => {
        let filtered = schemes;
      
        // Convert searchQuery to lowercase for case-insensitive search
        const searchRegex = new RegExp(searchQuery.toLowerCase(), "i");
      
        filtered = filtered.filter((scheme) => {
          // Check schemeFullName, state, city, and other fields for a match
          return (
            searchRegex.test(scheme.schemeFullName.toLowerCase()) ||
            searchRegex.test(scheme.state.toLowerCase()) 
            // Add more fields as needed
            // ...
          );
        });
      
        // Apply other filters
        Object.keys(filters).forEach((filter) => {
            if (filters[filter]) {
              filtered = filtered.filter((scheme) => {
                if (filter === "age") {
                  // Convert the age to a string before using toLowerCase
                  return scheme[filter].toString().toLowerCase() === filters[filter].toString().toLowerCase();
                } else {
                  return scheme[filter].toString().toLowerCase() === filters[filter].toLowerCase();
                }
              });
            }
          });
          
      
        setFilteredSchemes(filtered);
        setCurrentPage(1);
      };
      
    const indexOfLastScheme = currentPage * schemesPerPage;
    const indexOfFirstScheme = indexOfLastScheme - schemesPerPage;
    const currentSchemes = filteredSchemes.slice(
      indexOfFirstScheme,
      indexOfLastScheme
    );
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const schemeCards = currentSchemes.map((scheme) => (
   
        <Link to={`/inscheme/${scheme._id}`} >
        <div key={scheme._id}  className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={scheme.schemeImageLink}  // Replace with the actual key for the image URL
            alt={scheme.schemeFullName}  // Replace with the actual key for the scheme name
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {scheme.schemeFullName}
            </div>
            <p className="text-gray-700 text-base">
              {scheme.shortDetail} {/* Replace with the actual key for the scheme description */}
            </p>
          </div>
          
        </div>
         </Link>
       
      ));
      const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(filteredSchemes.length / schemesPerPage); i++) {
          pageNumbers.push(i);
        }
    
        return (
          <div className="flex items-center justify-center mt-4">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-3 py-1 mx-2 font-medium text-green-700 border border-green-700 rounded ${
                  currentPage === number ? "bg-green-100" : ""
                }`}
              >
                {number}
              </button>
            ))}
          </div>
        );
      };
  return (
    <>
      <>
        <div>
          <nav className="bg-green-50">
            <header className="fixed inset-x-0 top-2 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-green-80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
              <div className="px-5">
                <div className="flex items-center justify-between">
                  <div className="flex shrink-0">
                    <a
                      aria-current="page"
                      className="flex items-center"
                      href="/"
                    >
                      <img
                        className="h-7 w-auto"
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                        alt=""
                      />
                      <p className="sr-only">Website Title</p>
                    </a>
                  </div>
                  <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                    <a
                      aria-current="page"
                      className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                      href="#"
                    >
                      How it works
                    </a>
                    <a
                      className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                      href="#"
                    >
                      Pricing
                    </a>
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    <a
                      className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                      href="/login"
                    >
                      Sign in
                    </a>
                    <a
                      className="inline-flex items-center justify-center rounded-xl bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      href="/login"
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </header>
          </nav>
          <section class=" bg-green dark:bg-green-50">
            <div class="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-5xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-green">
                  One Stop Platform To Find Scheme's
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Government scheme portals provide citizens easy access to
                  information, applications, and tracking for public welfare
                  initiatives and services online.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  text-green rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Get started Now
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
                >
                  Sign Up Here
                </a>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                |{" "}
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                  alt="mockup"
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center w-screen h-300 space-y-4 bg-white-100 md:flex-row md:space-y-0 md:space-x-4">
            <div className="w-screen max-w-screen m-10">
              <div className="flex flex-col">
                <div className="p-5 bg-white border border-indigo-200 shadow-lg rounded-xl">
                  <form action="" method="GET">
                    <div className="relative flex items-center justify-between w-full mb-10 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="absolute block text-green-700 left-2 h-7 w-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <input
                      type="name"
                      name="search"
                      className="w-full h-12 py-4 pl-12 pr-40 bg-green-100 border border-green-100 rounded-md shadow-sm outline-none cursor-text focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Search Any Scheme Here ..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Filter by Age */}
  <div className="flex flex-col">
    <label
      htmlFor="filterAge"
      className="text-sm font-medium text-green-900"
    >
      FILTER BY AGE
    </label>
    <select
      id="filterAge"
      className="block w-full px-2 py-2 mt-2 bg-green-100 border border-green-100 rounded-md shadow-sm outline-none cursor-pointer focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
      onChange={(e) => handleFilterChange("age", e.target.value)}
      value={filters.age}
    >
      <option value="">All</option>
      <option value="18">18</option>
      <option value="20">20</option>
      <option value="22">22</option>
      <option value="24">24</option>
      <option value="26">26</option>
      <option value="28">28</option>
    </select>
  </div>

  {/* Filter by Gender */}
  <div className="flex flex-col">
    <label
      htmlFor="filterGender"
      className="text-sm font-medium text-green-900"
    >
      FILTER BY GENDER
    </label>
    <select
      id="filterGender"
      className="block w-full px-2 py-2 mt-2 bg-green-100 border border-green-100 rounded-md shadow-sm outline-none cursor-pointer focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
      onChange={(e) => handleFilterChange("gender", e.target.value)}
      value={filters.gender}
    >
      <option value="">All</option>
      <option value="FEMALE">FEMALE</option>
      <option value="MALE">MALE</option>
    </select>
  </div>

  {/* Search by State */}
  <div className="flex flex-col">
    <label
      htmlFor="filterState"
      className="text-sm font-medium text-green-900"
    >
      SEARCH BY STATE
    </label>
    <select
      id="filterState"
      className="block w-full px-2 py-2 mt-2 bg-green-100 border border-green-100 rounded-md shadow-sm outline-none cursor-pointer focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
      onChange={(e) => handleFilterChange("state", e.target.value)}
      value={filters.state}
    >
      <option value="">All</option>
      <option value="Gujarat">Gujarat</option>
      <option value="Rajasthan">Rajasthan</option>
      <option value="Punjab">Punjab</option>
      <option value="Delhi">Delhi</option>
      <option value="Harayana">Harayana</option>
      <option value="Bihar">Bihar</option>
    </select>
  </div>

  {/* Filter by Ministry */}
  <div className="flex flex-col">
    <label
      htmlFor="filterMinistry"
      className="text-sm font-medium text-green-900"
    >
      FILTER BY MINISTRY
    </label>
    <select
      id="filterMinistry"
      className="block w-full px-2 py-2 mt-2 bg-green-100 border border-green-100 rounded-md shadow-sm outline-none cursor-pointer focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
      onChange={(e) => handleFilterChange("ministry", e.target.value)}
      value={filters.ministry}
    >
      <option value="">All</option>
      <option value="NPTEL">NPTEL</option>
      <option value="AYUSH">AYUSH</option>
      <option value="AICTE">AICTE</option>
      <option value="ISRO">ISRO</option>
      <option value="KVPY">KVPY</option>
    </select>
  </div>

  {/* Filter by Caste */}
  <div className="flex flex-col">
    <label
      htmlFor="filterCaste"
      className="text-sm font-medium text-green-900"
    >
      FILTER BY CASTE
    </label>
    <select
      id="filterCaste"
      className="block w-full px-2 py-2 mt-2 bg-green-100 border border-green-100 rounded-md shadow-sm outline-none cursor-pointer focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
      onChange={(e) => handleFilterChange("caste", e.target.value)}
      value={filters.caste}
    >
      <option value="">All</option>
      <option value="GENERAL">GENERAL</option>
      <option value="OBC">OBC</option>
      <option value="ST">ST</option>
      <option value="SC">SC</option>
      <option value="MINORITY">MINORITY</option>
    </select>
  </div>
</div>

                    <div className="grid justify-start w-full grid-cols-2 mt-8 space-x-4 md:flex">
                      <button type="button"
                      onClick={resetFilters}
                      className="flex items-center px-8 py-2 font-medium text-green-700 bg-green-100 rounded-lg outline-none hover:opacity-80 focus:ring">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                        Reset
                      </button>
                      <button 
                      type="button"
                      onClick={applyFiltersAndSearch}
                      className="flex items-center px-8 py-2 font-medium text-white bg-green-500 rounded-lg outline-none hover:opacity-80 focus:ring">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="bg-gradient-to-r h-100 from-green-600 to-blue-600 font-[sans-serif] p-6">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <h2 className="text-white text-3xl font-bold mb-4">
                  Discover Our New Govermnet Scheme Here
                </h2>
                <p className="text-white text-base text-center mb-6">
                  Elevate your growth and success with the help of goverment
                  schems and enhance your ability to the sucess.
                </p>
              </div>
            </div>
          </section>
          <section>
            <>
              {/* Required meta tags */}
              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              {/* Tailwind CSS */}
              <link
                href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
                rel="stylesheet"
              />

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {schemeCards}
        </div>
            </>
          </section>
          <section>
        {renderPagination()}
      </section>
        </div>
      </>
    </>
  );
};

export default Scheme;
