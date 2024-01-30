import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Scheme = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setDropdownOpen(true);
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };


    return (
        <>
            <>
                <div>
                    <nav>
                        <header className="fixed inset-x-0 top-2 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-green-80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                            <div className="px-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex shrink-0">
                                        <a aria-current="page" className="flex items-center" href="/">
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
                                <h1 class="max-w-2xl mb-4 text-5xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-green">One Stop Platform To Find Scheme's</h1>
                                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                    Government scheme portals provide citizens easy access to information, applications, and tracking for public welfare initiatives and services online.</p>
                                <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  text-green rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                    Get started Now
                                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                                <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-green-700 dark:focus:ring-gray-800">
                                    Sign Up Here
                                </a>
                            </div>
                            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                                |             <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
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
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                            <div className="flex flex-col">
                                                <label
                                                    htmlFor="brand"
                                                    className="text-sm font-medium text-green-900"
                                                >
                                                    FILTER BY  AGE
                                                </label>
                                                <select
                                                    id="brand"
                                                    className="block w-full px-2 py-2 mt-2 bg-green-100 border border-green-100 rounded-md shadow-sm outline-none cursor-pointer focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                                                >
                                                    <option>Adidas</option>
                                                    <option>Nike</option>
                                                    <option>Rebook</option>
                                                    <option>Puma</option>
                                                    <option>Vans</option>
                                                    <option>Converse</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label
                                                    htmlFor="brand"
                                                    className="text-sm font-medium text-green-900"
                                                >
                                                    FILTER BY GENDER
                                                </label>
                                                <select
                                                    id="brand"
                                                    className="block w-full px-2 py-2 mt-2 bg-green-100 border border-green-100 rounded-md shadow-sm outline-none cursor-pointer focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                                                >
                                                    <option>ALL</option>
                                                    <option>FEMALE</option>
                                                    <option>MALE</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label
                                                    htmlFor="brand"
                                                    className="text-sm font-medium text-green-900"
                                                >
                                                    SEARCH BY STATE
                                                </label>
                                                <select
                                                    id="brand"
                                                    className="block w-full px-2 py-2 mt-2 bg-green-100 border border-green-100 rounded-md shadow-sm outline-none cursor-pointer focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                                                >
                                                    <option>Adidas</option>
                                                    <option>Nike</option>
                                                    <option>Rebook</option>
                                                    <option>Puma</option>
                                                    <option>Vans</option>
                                                    <option>Converse</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label
                                                    htmlFor="brand"
                                                    className="text-sm font-medium text-green-900"
                                                >
                                                    FILTER BY MINISTRY
                                                </label>
                                                <select
                                                    id="brand"
                                                    className="block w-full px-2 py-2 mt-2 bg-green-100 border border-green-100 rounded-md shadow-sm outline-none cursor-pointer focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                                                >
                                                    <option>Adidas</option>
                                                    <option>Nike</option>
                                                    <option>Rebook</option>
                                                    <option>Puma</option>
                                                    <option>Vans</option>
                                                    <option>Converse</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label
                                                    htmlFor="brand"
                                                    className="text-sm font-medium text-green-900"
                                                >
                                                    FILTER BY CASTE
                                                </label>
                                                <select
                                                    id="brand"
                                                    className="block w-full px-2 py-2 mt-2 bg-green-100 border border-green-100 rounded-md shadow-sm outline-none cursor-pointer focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                                                >
                                                    <option>Adidas</option>
                                                    <option>Nike</option>
                                                    <option>Rebook</option>
                                                    <option>Puma</option>
                                                    <option>Vans</option>
                                                    <option>Converse</option>
                                                </select>
                                            </div>
                                            <div className="flex items-center justify-center flex-col">
                                                <button
                                                    id="dropdownDefault"
                                                    data-dropdown-toggle="dropdown"
                                                    className="text-green-700 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                    type="button"
                                                >
                                                    Filter by category
                                                    <svg
                                                        className="w-4 h-4 ml-2"
                                                        aria-hidden="true"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                </button>
                                                {/* Dropdown menu */}
                                                <div
                                                    id="dropdown"
                                                    className="z-10 hidden w-56 p-3 bg-green-100 rounded-lg shadow dark:bg-green-700"
                                                >
                                                    <h6 className="mb-3 text-sm font-medium text-green-900 dark:text-green">
                                                        Category
                                                    </h6>
                                                    <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                                                        <li className="flex items-center">
                                                            <input
                                                                id="apple"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                className="w-4 h-4 bg-green-100 border-green-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-green-500"
                                                            />
                                                            <label
                                                                htmlFor="apple"
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                            >
                                                                Apple (56)
                                                            </label>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <input
                                                                id="fitbit"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                            />
                                                            <label
                                                                htmlFor="fitbit"
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                            >
                                                                Fitbit (56)
                                                            </label>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <input
                                                                id="dell"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                            />
                                                            <label
                                                                htmlFor="dell"
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                            >
                                                                Dell (56)
                                                            </label>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <input
                                                                id="asus"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                defaultChecked=""
                                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                            />
                                                            <label
                                                                htmlFor="asus"
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                            >
                                                                Asus (97)
                                                            </label>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <input
                                                                id="logitech"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                defaultChecked=""
                                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                            />
                                                            <label
                                                                htmlFor="logitech"
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                            >
                                                                Logitech (97)
                                                            </label>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <input
                                                                id="msi"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                defaultChecked=""
                                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                            />
                                                            <label
                                                                htmlFor="msi"
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                            >
                                                                MSI (97)
                                                            </label>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <input
                                                                id="bosch"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                defaultChecked=""
                                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                            />
                                                            <label
                                                                htmlFor="bosch"
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                            >
                                                                Bosch (176)
                                                            </label>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <input
                                                                id="sony"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                            />
                                                            <label
                                                                htmlFor="sony"
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                            >
                                                                Sony (234)
                                                            </label>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <input
                                                                id="samsung"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                defaultChecked=""
                                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                            />
                                                            <label
                                                                htmlFor="samsung"
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                            >
                                                                Samsung (76)
                                                            </label>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <input
                                                                id="canon"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                            />
                                                            <label
                                                                htmlFor="canon"
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                            >
                                                                Canon (49)
                                                            </label>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <input
                                                                id="microsoft"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                            />
                                                            <label
                                                                htmlFor="microsoft"
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                            >
                                                                Microsoft (45)
                                                            </label>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <input
                                                                id="razor"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                            />
                                                            <label
                                                                htmlFor="razor"
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                                            >
                                                                Razor (49)
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="grid justify-start w-full grid-cols-2 mt-8 space-x-4 md:flex">
                                            <button className="flex items-center px-8 py-2 font-medium text-green-700 bg-green-100 rounded-lg outline-none hover:opacity-80 focus:ring">
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
                                            <button className="flex items-center px-8 py-2 font-medium text-white bg-green-500 rounded-lg outline-none hover:opacity-80 focus:ring">
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
                                    Elevate your growth and success with the help of goverment schems and enhance your ability to the sucess.
                                </p>
                                
                            </div>
                        </div>

                    </section>
                    <section>
                        <>
                            {/* Required meta tags */}
                            <meta charSet="utf-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            {/* Tailwind CSS */}
                            <link
                                href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
                                rel="stylesheet"
                            />

                            <div className="p-40 bg-green-100 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                                {/*Card 1*/}
                                <div className="rounded overflow-hidden shadow-lg">
                                    <img className="w-full" src="https://pmmodiyojana.in/wp-content/uploads/2022/11/image-207.png" alt="Mountain" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">MYSY SCHOLARSHIP</div>
                                        <p className="text-gray-700 text-base">
                                            The MYSY (Mukhyamantri Yuva Swavalamban Yojana) scholarship aims to empower students in Gujarat, India, by providing financial assistance for higher education.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #MYSY
                                        </span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #GUJARATGOV
                                        </span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #STUDENTS
                                        </span>
                                    </div>
                                </div>
                                {/*Card 2*/}
                                <div className="rounded overflow-hidden shadow-lg">
                                    <img className="w-full" src="https://pmmodiyojana.in/wp-content/uploads/2022/11/image-207.png" alt="Mountain" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">MYSY SCHOLARSHIP</div>
                                        <p className="text-gray-700 text-base">
                                            The MYSY (Mukhyamantri Yuva Swavalamban Yojana) scholarship aims to empower students in Gujarat, India, by providing financial assistance for higher education.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #MYSY
                                        </span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #GUJARATGOV
                                        </span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #STUDENTS
                                        </span>
                                    </div>
                                </div>
                                {/*Card 3*/}
                                <div className="rounded overflow-hidden shadow-lg">
                                    <img className="w-full" src="https://pmmodiyojana.in/wp-content/uploads/2022/11/image-207.png" alt="Mountain" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">MYSY SCHOLARSHIP</div>
                                        <p className="text-gray-700 text-base">
                                            The MYSY (Mukhyamantri Yuva Swavalamban Yojana) scholarship aims to empower students in Gujarat, India, by providing financial assistance for higher education.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #MYSY
                                        </span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #GUJARATGOV
                                        </span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #STUDENTS
                                        </span>
                                    </div>
                                </div>
                                <div className="rounded overflow-hidden shadow-lg">
                                    <img className="w-full" src="https://pmmodiyojana.in/wp-content/uploads/2022/11/image-207.png" alt="Mountain" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">MYSY SCHOLARSHIP</div>
                                        <p className="text-gray-700 text-base">
                                            The MYSY (Mukhyamantri Yuva Swavalamban Yojana) scholarship aims to empower students in Gujarat, India, by providing financial assistance for higher education.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #MYSY
                                        </span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #GUJARATGOV
                                        </span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #STUDENTS
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>

                    </section>
                    <section>
                        <div className="flex bg-green-100 items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                            {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
                            <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                                <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                                    <svg
                                        width={14}
                                        height={8}
                                        viewBox="0 0 14 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.1665 4H12.8332"
                                            stroke="currentColor"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M1.1665 4L4.49984 7.33333"
                                            stroke="currentColor"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M1.1665 4.00002L4.49984 0.666687"
                                            stroke="currentColor"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                                </div>
                                <div className="sm:flex hidden">
                                    <p className="text-m font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                                        1
                                    </p>
                                    <p className="text-m font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                                        2
                                    </p>
                                    <p className="text-m font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                                        3
                                    </p>
                                    <p className="text-m font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">
                                        4
                                    </p>
                                    <p className="text-m font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                                        5
                                    </p>
                                    <p className="text-m font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                                        6
                                    </p>
                                    <p className="text-m font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                                        7
                                    </p>
                                    <p className="text-m font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                                        8
                                    </p>
                                </div>
                                <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                                    <p className="text-m font-medium leading-none mr-3">Next</p>
                                    <svg
                                        width={14}
                                        height={8}
                                        viewBox="0 0 14 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.1665 4H12.8332"
                                            stroke="currentColor"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M9.5 7.33333L12.8333 4"
                                            stroke="currentColor"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M9.5 0.666687L12.8333 4.00002"
                                            stroke="currentColor"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </section>

                </div>
            </>

        </>
    );
};

export default Scheme;

