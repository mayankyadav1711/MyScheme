import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

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
        const response = await fetch("https://myscheme-backend.vercel.app/get-schemes");
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
      <Link to={`/inscheme/${scheme._id}`} key={scheme._id}>
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src={scheme.schemeImageLink}
            alt={scheme.schemeFullName}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {scheme.schemeFullName}
            </div>
            <p className="text-gray-700 text-base">
              {scheme.shortDetail}
            </p>
          </div>
          <div className="px-6 py-4 flex justify-end">
            <Link
              to={`/inscheme/${scheme._id}`}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green active:bg-green-800"
            >
              View Scheme
            </Link>
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
          <Navbar/>
        <HeroSection/>
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
      <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
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
      <option value="nptel">NPTEL</option>
      <option value="ayush">AYUSH</option>
      <option value="aicte">AICTE</option>
      <option value="isro">ISRO</option>
      <option value="kvpy">KVPY</option>
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
      <option value="general">GENERAL</option>
        <option value="obc">OBC</option>
        <option value="st">ST</option>
        <option value="sc">SC</option>
        <option value="ews">EWS</option>
        <option value="minority">MINORITY</option>
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

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 m-16">
  {currentSchemes.map((scheme) => (
    <Link to={`/inscheme/${scheme._id}`} key={scheme._id}>
      <div className="flex flex-col rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          className="w-full h-48 object-cover"
          src={scheme.schemeImageLink}
          alt={scheme.schemeFullName}
        />
        <div className="px-6 py-4 flex-grow">
          <div className="font-bold text-xl mb-2">
            {scheme.schemeFullName}
          </div>
          <p className="text-gray-700 text-base">
            {scheme.shortDetail}
          </p>
        </div>
        <div className="flex justify-center items-center mt-4 mb-4">
          <Link
            to={`/inscheme/${scheme._id}`}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-green active:bg-green-800"
          >
            View Scheme
          </Link>
        </div>
      </div>
    </Link>
  ))}
</div>


            </>
          </section>
          <section className="m-24">
        {renderPagination()}
      </section>
        </div>
      </>

      <Footer/>
    </>
  );
};

export default Scheme;
