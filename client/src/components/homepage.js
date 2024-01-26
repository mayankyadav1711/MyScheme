/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const Home = () => {


  return (
    <div>
    
   <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <link
    rel="preload"
    as="image"
    imagesrcset="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&w=96&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&w=256&q=75 2x"
  />
  <link
    rel="preload"
    as="image"
    imagesrcset="https://cdn.myscheme.in/images/emblem-black.svg 640w, https://cdn.myscheme.in/images/emblem-black.svg 750w, https://cdn.myscheme.in/images/emblem-black.svg 828w, https://cdn.myscheme.in/images/emblem-black.svg 1080w, https://cdn.myscheme.in/images/emblem-black.svg 1200w, https://cdn.myscheme.in/images/emblem-black.svg 1920w, https://cdn.myscheme.in/images/emblem-black.svg 2048w, https://cdn.myscheme.in/images/emblem-black.svg 3840w"
    imagesizes="100vw"
  />
  <link
    rel="preload"
    as="image"
    imagesrcset="https://cdn.myscheme.in/images/myscheme-logo.svg 640w, https://cdn.myscheme.in/images/myscheme-logo.svg 750w, https://cdn.myscheme.in/images/myscheme-logo.svg 828w, https://cdn.myscheme.in/images/myscheme-logo.svg 1080w, https://cdn.myscheme.in/images/myscheme-logo.svg 1200w, https://cdn.myscheme.in/images/myscheme-logo.svg 1920w, https://cdn.myscheme.in/images/myscheme-logo.svg 2048w, https://cdn.myscheme.in/images/myscheme-logo.svg 3840w"
    imagesizes="100vw"
  />
  <link
    rel="preload"
    as="image"
    imagesrcset="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&w=64&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&w=128&q=75 2x"
  />
  <link
    rel="preload"
    as="image"
    imagesrcset="https://cdn.myscheme.in/images/icons/language.svg 1x, https://cdn.myscheme.in/images/icons/language.svg 2x"
  />
  <title>myScheme</title>
  <link
    rel="apple-touch-icon"
    sizes="60x60"
    href="/images/favico/apple-icon-60x60.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="72x72"
    href="/images/favico/apple-icon-72x72.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="76x76"
    href="/images/favico/apple-icon-76x76.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="114x114"
    href="/images/favico/apple-icon-114x114.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="120x120"
    href="/images/favico/apple-icon-120x120.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="144x144"
    href="/images/favico/apple-icon-144x144.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="152x152"
    href="/images/favico/apple-icon-152x152.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/images/favico/apple-icon-180x180.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="192x192"
    href="/images/favico/android-icon-192x192.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/images/favico/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="96x96"
    href="/images/favico/favicon-96x96.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="/images/favico/favicon-16x16.png"
  />
  <link rel="manifest" href="/images/favico/manifest.json" />
  <meta content="https://myscheme.gov.in" property="og:url" />
  <meta
    property="og:title"
    content="myScheme - One-stop search and discovery platform of the Government schemes"
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://cdn.myscheme.in/images/logo.png" />
  <meta
    property="og:image:secure_url"
    content="https://cdn.myscheme.in/images/logo.png"
  />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content={475} />
  <meta property="og:image:height" content={86} />
  <meta
    property="og:image:alt"
    content="myScheme - One-stop search and discovery platform of the Government schemes"
  />
  <meta
    property="og:site_name"
    content="myScheme - One-stop search and discovery platform of the Government schemes"
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    property="og:description"
    content="myScheme is a National Platform that aims to offer one-stop search and discovery of the Government schemes."
  />
  <meta name="twitter:card" content="summary" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta
    name="description"
    content="myScheme is a National Platform that aims to offer one-stop search and discovery of the Government schemes."
    url=""
  />
  <meta
    name="keywords"
    content="myScheme, Government Schemes, Government Scheme, GovernmentScheme, GovernmentSchemes, Find Government Scheme, Gov Scheme Platform, Gov Scheme"
  />
  <meta name="theme-color" content="#16A34A" />
  <link
    rel="preload"
    as="image"
    imagesrcset="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=3840&q=75 3840w"
    imagesizes="100vw"
  />
  <link
    rel="preload"
    as="image"
    imagesrcset="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=3840&q=75 3840w"
    imagesizes="100vw"
  />
  <link
    rel="preload"
    as="image"
    imagesrcset="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=3840&q=75 3840w"
    imagesizes="100vw"
  />
  <link
    rel="preload"
    as="image"
    imagesrcset="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=3840&q=75 3840w"
    imagesizes="100vw"
  />
  <link
    rel="preload"
    as="image"
    imagesrcset="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=3840&q=75 3840w"
    imagesizes="100vw"
  />
  <link
    rel="preload"
    as="image"
    imagesrcset="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=3840&q=75 3840w"
    imagesizes="100vw"
  />
  <meta name="next-head-count" content={46} />
  <link
    rel="preload"
    href="https://cdn.myscheme.in/_next/static/css/dbd43b58cb9169ab.css"
    as="style"
  />
  <link
    rel="stylesheet"
    href="https://cdn.myscheme.in/_next/static/css/dbd43b58cb9169ab.css"
    data-n-g=""
  />
  <link
    rel="preload"
    href="https://cdn.myscheme.in/_next/static/css/f905e3f5554554b8.css"
    as="style"
  />
  <link
    rel="stylesheet"
    href="https://cdn.myscheme.in/_next/static/css/f905e3f5554554b8.css"
    data-n-p=""
  />
  <noscript data-n-css="" />
  <div id="__next">
    <div className="h-screen w-screen bg-black/20 fixed top-0 left-0 z-[50] opacity-0 hidden transform transition-all ease-in-out">
      <div className="relative flex flex-col items-center justify-center h-full">
        <div className="no-scrollbar relative bg-white rounded-lg shadow w-[90%] md:w-auto md:max-w-[60%] lg:min-w-[30%] max-h-[80vh] overflow-auto">
          <div className="px-6 py-4 border-0 border-b border-solid border-gray-300 flex flex-1 items-center justify-between"></div>
          <div className="p-6 text-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="mx-auto w-10 h-10 mb-3 text-red-600"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
            </svg>
            <h3 className="font-normal text-gray-800">
              <p className="font-mono">Are you sure you want to sign out?</p>
            </h3>
          </div>
          <div className="bg-gray-100 p-4 flex justify-center rounded-b-lg">
            <div className="flex gap-2 justify-between w-full">
              <button
                type="button"
                aria-label="Action Button"
                className="px-5 py-2.5 text-base rounded-md undefined undefined white border-solid border border-cyan-200 !text-gray-800 hover:border-cyan-400 hover:shadow bg-secondary text-white hover:bg-primary transition ease-in-out font-medium leading-none flex-1 undefined"
                title=""
              >
                Cancel
              </button>
              <button
                type="button"
                aria-label="Action Button"
                className="px-5 py-2.5 text-base rounded-md undefined undefined green bg-secondary text-white hover:bg-primary transition ease-in-out font-medium leading-none flex-1 undefined"
                title=""
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav className="fixed top-0 z-30 w-full navbar-expand-lg !p-0 shadow-none">
      <div className="lg:flex flex-wrap items-center justify-between lg:px-2 py-2.5">
        <div className="container px-4 lg:px-0 mx-auto relative">
          <div className="gap-4 grid grid-cols-1 !grid-cols-5 md:grid-cols-2 lg:grid-cols-4 undefined">
            <div className="flex items-center gap-4 justify-between items-center col-span-4 sm:col-span-2 justify-between flex-1 lg:justify-start !gap-4">
              <div className="flex items-center gap-4 justify-between items-center !justify-start !gap-1 sm:!gap-2">
                <a
                  className="undefined relative h-8 lg:h-10 w-5 lg:w-6 normal-case"
                  href="/"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <img
                      srcSet="
                    https://cdn.myscheme.in/images/emblem-black.svg  640w,
                    https://cdn.myscheme.in/images/emblem-black.svg  750w,
                    https://cdn.myscheme.in/images/emblem-black.svg  828w,
                    https://cdn.myscheme.in/images/emblem-black.svg 1080w,
                    https://cdn.myscheme.in/images/emblem-black.svg 1200w,
                    https://cdn.myscheme.in/images/emblem-black.svg 1920w,
                    https://cdn.myscheme.in/images/emblem-black.svg 2048w,
                    https://cdn.myscheme.in/images/emblem-black.svg 3840w
                  "
                      alt="Ministry of Electronics and Information Technology"
                      title="Ministry of Electronics and Information Technology"
                      sizes="100vw"
                      src="https://cdn.myscheme.in/images/emblem-black.svg"
                      decoding="async"
                      data-nimg="fill"
                      className="border-0"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%"
                      }}
                    />
                  </span>
                </a>
                <h1 className="relative">
                  <button
                    aria-label="Action Button"
                    className="px-5 py-2.5 text-base rounded-md undefined undefined border-0 bg-transparent !p-0 text-secondary hover:text-primary blue text-secondary hover:text-primary transition ease-in-out font-medium leading-none px-2 border-0 border-l rounded-none border-solid border-gray-100 block relative h-6 w-36 lg:h-8 lg:w-48 undefined"
                    title=""
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                      }}
                    >
                      <img
                        srcSet="
                      https://cdn.myscheme.in/images/myscheme-logo.svg  640w,
                      https://cdn.myscheme.in/images/myscheme-logo.svg  750w,
                      https://cdn.myscheme.in/images/myscheme-logo.svg  828w,
                      https://cdn.myscheme.in/images/myscheme-logo.svg 1080w,
                      https://cdn.myscheme.in/images/myscheme-logo.svg 1200w,
                      https://cdn.myscheme.in/images/myscheme-logo.svg 1920w,
                      https://cdn.myscheme.in/images/myscheme-logo.svg 2048w,
                      https://cdn.myscheme.in/images/myscheme-logo.svg 3840w
                    "
                        alt="myScheme"
                        title="myScheme"
                        sizes="100vw"
                        src="https://cdn.myscheme.in/images/myscheme-logo.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="border-0 mx-auto"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%"
                        }}
                      />
                    </span>
                  </button>
                </h1>
                <a
                  target="_blank"
                  className="undefined md:block normal-case"
                  href="https://www.digitalindia.gov.in/"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2730%27/%3e"
                      />
                    </span>
                    <img
                      srcSet="
                    /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&w=96&q=75  1x,
                    /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&w=256&q=75 2x
                  "
                      alt="Digital India Corporation"
                      src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&w=256&q=75"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="border-0"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </span>
                </a>
              </div>
              <ul className="relative z-10 flex flex-wrap text-sm items-center hidden lg:flex sm:ml-6 mt-3 gap-2" />
            </div>
            <div className="md:col-span-3 flex flex-row items-center flex-1 gap-3 justify-end">
              <ul className="grid grid-cols-1 w-full md:w-[90%] lg:w-3/5 !flex lg:!flex-1 justify-end items-center lg:justify-start gap-2"></ul>
              <div className="flex items-center gap-4 justify-between items-center flex-1 !justify-end !gap-1">
                <div>
                  <ul className="grid grid-cols-1 hidden lg:block ml-2 md:ml-3 gap-2" />
                </div>
                <ul className="relative z-10 flex flex-wrap text-sm items-center gap-1">
                  <li title="" className="">
                    <button
                      type="button"
                      aria-label="Action Button"
                      className="px-5 py-2.5 text-base rounded-md undefined undefined border-0 bg-transparent !p-0 text-secondary hover:text-primary dark transition ease-in-out font-medium leading-none lg:hidden undefined"
                      title=""
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="ml-2 inline-block w-8 h-8 !m-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
                      </svg>
                    </button>
                  </li>
                  <li title="" className="relative hidden lg:block">
                    <div>
                      <div className="cursor-pointer flex flex-row items-center">
                        <div className="cursor-pointer bg-green-700 group-hover:bg-white text-white group-hover:text-secondary mr-1 lg:mr-2 rounded-full h-9 w-9 flex items-center justify-center">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "inline-block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative",
                              maxWidth: "100%"
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                maxWidth: "100%"
                              }}
                            >
                              <img
                                style={{
                                  display: "block",
                                  maxWidth: "100%",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: 0,
                                  margin: 0,
                                  padding: 0
                                }}
                                alt=""
                                aria-hidden="true"
                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                              />
                            </span>
                            <img
                              alt="Change language"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                              decoding="async"
                              data-nimg="intrinsic"
                              className="border-0"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%"
                              }}
                            />
                            <noscript>
                              &lt;img srcset="
                              https://cdn.myscheme.in/images/icons/language.svg
                              1x,
                              https://cdn.myscheme.in/images/icons/language.svg
                              2x " alt="Change language"
                              src="https://cdn.myscheme.in/images/icons/language.svg"
                              decoding="async" data-nimg="intrinsic" style="
                              position: absolute; top: 0; left: 0; bottom: 0;
                              right: 0; box-sizing: border-box; padding: 0;
                              border: none; margin: auto; display: block; width:
                              0; height: 0; min-width: 100%; max-width: 100%;
                              min-height: 100%; max-height: 100%; "
                              class="border-0" loading="lazy" /&gt;
                            </noscript>
                          </span>
                        </div>
                        <span className="text-green-700 text-base inline-block font-mono">
                          Eng
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex">
          <div className="hidden lg:hidden bg-black/50 fixed z-20 top-0 left-0 w-full h-screen" />
          <div className="-translate-x-full lg:hidden bg-white z-50 fixed h-full transform transition-all ease-in-out top-0 w-4/5 left-0 overflow-y-auto h-screen">
            <div className="flex items-center gap-4 justify-between items-center px-2 py-2 shadow-md mb-2 bg-white sticky top-0 z-10">
              <div className="flex items-center justify-start gap-1 md:gap-2">
                <a
                  className="undefined block relative w-6 h-12 normal-case"
                  href="/"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <img
                      srcSet="
                    https://cdn.myscheme.in/images/emblem-black.svg  640w,
                    https://cdn.myscheme.in/images/emblem-black.svg  750w,
                    https://cdn.myscheme.in/images/emblem-black.svg  828w,
                    https://cdn.myscheme.in/images/emblem-black.svg 1080w,
                    https://cdn.myscheme.in/images/emblem-black.svg 1200w,
                    https://cdn.myscheme.in/images/emblem-black.svg 1920w,
                    https://cdn.myscheme.in/images/emblem-black.svg 2048w,
                    https://cdn.myscheme.in/images/emblem-black.svg 3840w
                  "
                      alt="Ministry of Electronics and Information Technology"
                      title="Ministry of Electronics and Information Technology"
                      sizes="100vw"
                      src="https://cdn.myscheme.in/images/emblem-black.svg"
                      decoding="async"
                      data-nimg="fill"
                      className="border-0"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </span>
                </a>
                <button
                  aria-label="Action Button"
                  className="px-5 py-2.5 text-base rounded-md undefined undefined border-0 bg-transparent !p-0 text-secondary hover:text-primary blue text-secondary hover:text-primary transition ease-in-out font-medium leading-none px-2 border-0 border-l border-solid border-gray-100 block relative h-6 w-36 undefined"
                  title=""
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <img
                      srcSet="
                    https://cdn.myscheme.in/images/myscheme-logo.svg  640w,
                    https://cdn.myscheme.in/images/myscheme-logo.svg  750w,
                    https://cdn.myscheme.in/images/myscheme-logo.svg  828w,
                    https://cdn.myscheme.in/images/myscheme-logo.svg 1080w,
                    https://cdn.myscheme.in/images/myscheme-logo.svg 1200w,
                    https://cdn.myscheme.in/images/myscheme-logo.svg 1920w,
                    https://cdn.myscheme.in/images/myscheme-logo.svg 2048w,
                    https://cdn.myscheme.in/images/myscheme-logo.svg 3840w
                  "
                      alt="myScheme"
                      title="myScheme"
                      sizes="100vw"
                      src="https://cdn.myscheme.in/images/myscheme-logo.svg"
                      decoding="async"
                      data-nimg="fill"
                      className="border-0 mx-auto"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%"
                      }}
                    />
                  </span>
                </button>
                <a
                  target="_blank"
                  className="undefined block normal-case"
                  href="https://www.digitalindia.gov.in/"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2725%27/%3e"
                      />
                    </span>
                    <img
                      srcSet="
                    /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&w=64&q=75  1x,
                    /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&w=128&q=75 2x
                  "
                      alt="Digital India Corporation"
                      src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&w=128&q=75"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="border-0"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </span>
                </a>
              </div>
              <div>
                <button
                  type="button"
                  aria-label="Action Button"
                  className="px-5 py-2.5 text-base rounded-md undefined undefined border-0 bg-transparent !p-0 text-secondary hover:text-primary dark transition ease-in-out font-medium leading-none undefined"
                  title=""
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    className="ml-2 inline-block w-8 h-8"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="border-0 border-b border-solid border-green-50 p-3 bg-green-50">
              <div className="cursor-pointer flex flex-row items-center">
                <span className="cursor-pointer bg-green-700 group-hover:bg-white text-white group-hover:text-secondary mr-1 lg:mr-2 rounded-full h-9 w-9 flex items-center justify-center">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                      />
                    </span>
                    <img
                      srcSet="
                    https://cdn.myscheme.in/images/icons/language.svg 1x,
                    https://cdn.myscheme.in/images/icons/language.svg 2x
                  "
                      alt="Change language"
                      src="https://cdn.myscheme.in/images/icons/language.svg"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="border-0"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%"
                      }}
                    />
                  </span>
                </span>
                <button
                  aria-label="English"
                  className="px-7 py-3 text-lg rounded-md undefined undefined border-0 bg-transparent !p-0 text-secondary hover:text-primary dark transition ease-in-out font-medium leading-none !text-green-600 !font-mono undefined"
                  title="English"
                >
                  English
                </button>
                {/* */}/{/* */}
                <button
                  aria-label="हिंदी"
                  className="px-7 py-3 text-lg rounded-md undefined undefined border-0 bg-transparent !p-0 text-secondary hover:text-primary dark transition ease-in-out font-medium leading-none false !font-mono undefined"
                  title="हिंदी"
                >
                  हिंदी
                </button>
              </div>
            </div>
            <ul className="grid grid-cols-1 p-4 space-y-2 gap-2">
              <li title="" className="">
                <button
                  aria-label="Sign In"
                  className="px-5 py-2.5 text-base rounded-md undefined undefined green bg-secondary text-white hover:bg-primary transition ease-in-out font-medium leading-none block ml-2 relative rounded-md undefined"
                  title="Sign In"
                >
                  Sign In
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right-long"
                    className="svg-inline--fa fa-arrow-right-long fa-lg ml-2 inline-block"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <main className="">
      <section className="relative bg-white bg-no-repeat bg-right-top-8 w-full">
        <section>
          <div className="relative">
            <section
              id="hero"
              className="landingComp relative parallax-wrap flex items-center justify-start bg-cover lg:bg-center bg-gradient-to-b from-green-50 to-white"
            >
              <div className="relative flex flex-1 flex-col w-screen items-center overflow-hidden pt-0 pb-10 lg:pt-0 lg:pb-0">
                <div className="relative w-full">
                  <button
                    aria-label="Change theme mode"
                    className="px-4 py-2 text-sm rounded-full w-5 h-5 px-0 py-0 undefined undefined green bg-secondary text-white hover:bg-primary transition ease-in-out font-medium leading-none hidden md:block absolute text-white text-2xl z-10 bg-green-700 h-8 w-6 lg:h-10 lg:w-10 rounded-none opacity-75 flex items-center justify-center left-0 rounded-r-lg d-block top-[40%] opacity-30 hover:opacity-50 undefined"
                    title="Change theme mode"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="ml-2 inline-block w-3 h-3 lg:w-5 lg:h-5 !ml-0 !mr-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      />
                    </svg>
                  </button>
                  <swiper-container init="false" loop="true">
                    <swiper-slide classname="w-full relative">
                      <div className="w-full relative cursor-auto">
                        <div className="hidden sm:block">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative"
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                paddingTop: "42.03125%"
                              }}
                            />
                            <img
                              srcSet="
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=640&q=75   640w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=750&q=75   750w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=828&q=75   828w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=1080&q=75 1080w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=1200&q=75 1200w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=1920&q=75 1920w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=2048&q=75 2048w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=3840&q=75 3840w
                          "
                              alt="Slideshow Images"
                              sizes="100vw"
                              src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=3840&q=75"
                              decoding="async"
                              data-nimg="responsive"
                              className="border-0"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%"
                              }}
                            />
                          </span>
                        </div>
                        <div className="block sm:hidden">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative"
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                paddingTop: "46.666666666666664%"
                              }}
                            />
                            <img
                              srcSet="
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=640&q=75   640w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=750&q=75   750w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=828&q=75   828w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=1080&q=75 1080w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=1200&q=75 1200w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=1920&q=75 1920w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=2048&q=75 2048w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=3840&q=75 3840w
                          "
                              alt="Slideshow Images"
                              sizes="100vw"
                              src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F2.webp&w=3840&q=75"
                              decoding="async"
                              data-nimg="responsive"
                              className="border-0"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%"
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide classname="w-full relative">
                      <div className="w-full relative cursor-auto">
                        <div className="hidden sm:block">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative"
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                paddingTop: "42.03125%"
                              }}
                            />
                            <img
                              srcSet="
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=640&q=75   640w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=750&q=75   750w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=828&q=75   828w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=1080&q=75 1080w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=1200&q=75 1200w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=1920&q=75 1920w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=2048&q=75 2048w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=3840&q=75 3840w
                          "
                              alt="Slideshow Images"
                              sizes="100vw"
                              src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=3840&q=75"
                              decoding="async"
                              data-nimg="responsive"
                              className="border-0"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%"
                              }}
                            />
                          </span>
                        </div>
                        <div className="block sm:hidden">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative"
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                paddingTop: "46.666666666666664%"
                              }}
                            />
                            <img
                              srcSet="
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=640&q=75   640w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=750&q=75   750w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=828&q=75   828w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=1080&q=75 1080w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=1200&q=75 1200w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=1920&q=75 1920w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=2048&q=75 2048w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=3840&q=75 3840w
                          "
                              alt="Slideshow Images"
                              sizes="100vw"
                              src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F1.webp&w=3840&q=75"
                              decoding="async"
                              data-nimg="responsive"
                              className="border-0"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%"
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide classname="w-full relative">
                      <div className="w-full relative cursor-auto">
                        <div className="hidden sm:block">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative"
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                paddingTop: "42.03125%"
                              }}
                            />
                            <img
                              srcSet="
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=640&q=75   640w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=750&q=75   750w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=828&q=75   828w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=1080&q=75 1080w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=1200&q=75 1200w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=1920&q=75 1920w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=2048&q=75 2048w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=3840&q=75 3840w
                          "
                              alt="Slideshow Images"
                              sizes="100vw"
                              src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=3840&q=75"
                              decoding="async"
                              data-nimg="responsive"
                              className="border-0"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%"
                              }}
                            />
                          </span>
                        </div>
                        <div className="block sm:hidden">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative"
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                paddingTop: "46.666666666666664%"
                              }}
                            />
                            <img
                              srcSet="
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=640&q=75   640w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=750&q=75   750w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=828&q=75   828w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=1080&q=75 1080w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=1200&q=75 1200w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=1920&q=75 1920w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=2048&q=75 2048w,
                            /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=3840&q=75 3840w
                          "
                              alt="Slideshow Images"
                              sizes="100vw"
                              src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fmobile%2F3.webp&w=3840&q=75"
                              decoding="async"
                              data-nimg="responsive"
                              className="border-0"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%"
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper-container>
                  <button
                    aria-label="Change theme mode"
                    className="px-4 py-2 text-sm rounded-full w-5 h-5 px-0 py-0 undefined undefined green bg-secondary text-white hover:bg-primary transition ease-in-out font-medium leading-none hidden md:block absolute text-white text-2xl z-10 bg-green-700 h-8 w-6 lg:h-10 lg:w-10 rounded-none opacity-75 flex items-center justify-center right-0 rounded-l-lg d-block top-[40%] opacity-30 hover:opacity-50 undefined"
                    title="Change theme mode"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="ml-2 inline-block w-3 h-3 lg:w-5 lg:h-5 !ml-0 !mr-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col bg-cover bg-gradient-to-b from-green-50 to-white h-full w-full items-center justify-center pt-10">
                  <ul className="relative z-10 flex flex-wrap text-sm items-center font-mono lg:tracking-loose justify-center items-center flex flex-row gap-2">
                    <li
                      title=""
                      className="text-lg 2xl:text-3xl lg:text-xl tracking-tight text-black opacity-90"
                    >
                      #GOVERNMENTSCHEMES
                    </li>
                    <li
                      title=""
                      className="text-lg 2xl:text-3xl lg:text-xl tracking-tight text-black opacity-90"
                    >
                      /
                    </li>
                    <li
                      title=""
                      className="text-lg 2xl:text-3xl lg:text-xl tracking-tight text-black opacity-90"
                    >
                      #SCHEMESFORYOU
                    </li>
                  </ul>
                  <button
                    aria-label="Find Schemes For You"
                    className="px-7 py-3 text-lg rounded-md undefined undefined green bg-secondary text-white hover:bg-primary transition ease-in-out font-medium leading-none block mt-5 relative undefined"
                    title="Find Schemes For You"
                  >
                    Find Schemes For You
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right-long"
                      className="svg-inline--fa fa-arrow-right-long fa-xl ml-2 inline-block"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section>
          <section
            id="schemeCount"
            className="relative bg-no-repeat py-12 md:py-20 !pt-2 md:!pt-10 lg:!pt-16 !pb-0 !pt-0"
          >
            <div className="container mx-auto px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative lg:!w-3/5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 justify-center items-stretch" />
            </div>
          </section>
        </section>
        <section>
          <section
            id="catStatesMinistries"
            className="relative bg-no-repeat py-12 md:py-20 null"
          >
            <div className="container mx-auto px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative">
              <div className="mb-4 md:mb-8 flex flex-col items-center justify-start w-full">
                <p className="flex text-sm font-bold md:text-base items-center gap-3 md:gap-6 text-darkIndigo-300 text-center mb-5 md:mb-10">
                  <span className="bg-green-100 text-green-700 cursor-pointer rounded px-3 py-2 block leading-none">
                    Categories
                  </span>
                  <span className="cursor-pointer rounded px-3 py-2 block leading-none">
                    States/UTs
                  </span>
                  <span className="cursor-pointer rounded px-3 py-2 block leading-none">
                    Central
                    {/* */}
                    {/* */}Ministries
                  </span>
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
                  Find schemes based
                </h2>
                <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
                  on categories
                </h2>
              </div>
              <div className="bg-white z-0 relative mx-auto text-center lg:text-left justify-center rounded-xl">
                <div className="absolute opacity-70 -bottom-10 -left-10 w-36 h-40 -z-10 bg-repeat bg-shape-one" />
                <div className="absolute opacity-70 -top-10 -right-5 lg:-right-10 w-36 h-40 -z-10 bg-repeat categories-bg-2"></div>
                <div className="bg-white p-2 md:p-4 relative">
                  <div className="absolute -bottom-10 -right-5 lg:-right-10 -z-10 opacity-50">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%"
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%"
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
                        />
                      </span>
                      <img
                        alt="bg-shape"
                        title="bg-shape"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="border-0"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          objectFit: "contain"
                        }}
                      />
                      <noscript>
                        &lt;img srcset="
                        /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fshapes%2Fblue-bg-shape.png&amp;amp;w=128&amp;amp;q=75
                        1x,
                        /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fshapes%2Fblue-bg-shape.png&amp;amp;w=256&amp;amp;q=75
                        2x " alt="bg-shape" title="bg-shape"
                        src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fshapes%2Fblue-bg-shape.png&amp;amp;w=256&amp;amp;q=75"
                        decoding="async" data-nimg="intrinsic" style=" position:
                        absolute; top: 0; left: 0; bottom: 0; right: 0;
                        box-sizing: border-box; padding: 0; border: none;
                        margin: auto; display: block; width: 0; height: 0;
                        min-width: 100%; max-width: 100%; min-height: 100%;
                        max-height: 100%; object-fit: contain; "
                        class="border-0" loading="lazy" /&gt;
                      </noscript>
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-10 gap-y-6" />
                </div>
              </div>
            </div>
          </section>
        </section>
        <section>
          <section
            id="howitworks"
            className="relative bg-no-repeat py-12 md:py-20 bg-gradient-to-t from-green-50 to-white z-0 relative after:absolute after:-bottom-6 after:right-0 lg:after:right-0 after:w-full after:h-0 after:border-green-50 after:border-[40px] after:border-solid after:-z-10 after:rotate-[2deg] after:transform mb-20"
          >
            <div className="container mx-auto px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative">
              <div className="mb-20 flex flex-col items-center justify-start w-full">
                <p className="text-xl text-darkIndigo-300 text-center mb-2">
                  How it works
                </p>
                <h2 className="text-3xl sm:text-4xl text-center px-8 font-extrabold leading-snug">
                  Easy steps to apply
                </h2>
                <h2 className="text-3xl sm:text-4xl text-center px-8 font-extrabold leading-snug">
                  for Government Schemes
                </h2>
              </div>
              <div className="grid grid-cols-1 md:flex flex-wrap gap-4 justify-between items-center relative z-0 !block lg:!flex flex-nowrap lg:!gap-x-[40px] !gap-y-10 lg:!gap-y-0 after:bg-gray-100 after:absolute after:top-0 lg:after:top-1/2 after:left-1/2 lg:after:left-0 after:w-0.5 after:h-full lg:after:w-full lg:after:h-0.5 after:-z-10 mb-10 lg:mb-0">
                <div className="absolute rounded-full w-20 h-20 z-0 bg-green-100 -bottom-7 -right-1 lg:-right-7" />
                <div className="absolute opacity-70 -top-16 -left-20 w-36 h-40 z-0 bg-repeat bg-shape-one" />
                <div className="flex-1">
                  <div className="relative bg-white flex z-10 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:animate-bounceOnce p-8 false">
                    <div className="relative z-20 bg-white w-full h-full rounded-lg flex flex-col items-center gap-3">
                      <div className="h-16">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%"
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%"
                            }}
                          >
                            <img
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0
                              }}
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2761%27%20height=%2761%27/%3e"
                            />
                          </span>
                          <img
                            alt="[object Object]"
                            title="[object Object]"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="intrinsic"
                            className="border-0"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover"
                            }}
                          />
                          <noscript>
                            &lt;img srcset="
                            https://cdn.myscheme.in/images/icons/check.svg 1x,
                            https://cdn.myscheme.in/images/icons/check.svg 2x "
                            alt="[object Object]" title="[object Object]"
                            src="https://cdn.myscheme.in/images/icons/check.svg"
                            decoding="async" data-nimg="intrinsic" style="
                            position: absolute; top: 0; left: 0; bottom: 0;
                            right: 0; box-sizing: border-box; padding: 0;
                            border: none; margin: auto; display: block; width:
                            0; height: 0; min-width: 100%; max-width: 100%;
                            min-height: 100%; max-height: 100%; object-fit:
                            cover; " class="border-0" loading="lazy" /&gt;
                          </noscript>
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-green-600">
                        Enter Details
                      </h3>
                      <span className="text-center">
                        <span>
                          Start by entering your
                          <strong>basic details!</strong>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-0 transform rotate-90 lg:rotate-0">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 192 512"
                    className="text-darkIndigo-50"
                    height={40}
                    width={40}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="text-darkIndigo-50 -ml-12"
                    height={80}
                    width={80}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="relative bg-white flex z-10 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:animate-bounceOnce p-8 false">
                    <div className="relative z-20 bg-white w-full h-full rounded-lg flex flex-col items-center gap-3">
                      <div className="h-16">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%"
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%"
                            }}
                          >
                            <img
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0
                              }}
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2761%27%20height=%2761%27/%3e"
                            />
                          </span>
                          <img
                            alt="[object Object]"
                            title="[object Object]"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="intrinsic"
                            className="border-0"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover"
                            }}
                          />
                          <noscript>
                            &lt;img srcset="
                            https://cdn.myscheme.in/images/icons/search.svg 1x,
                            https://cdn.myscheme.in/images/icons/search.svg 2x "
                            alt="[object Object]" title="[object Object]"
                            src="https://cdn.myscheme.in/images/icons/search.svg"
                            decoding="async" data-nimg="intrinsic" style="
                            position: absolute; top: 0; left: 0; bottom: 0;
                            right: 0; box-sizing: border-box; padding: 0;
                            border: none; margin: auto; display: block; width:
                            0; height: 0; min-width: 100%; max-width: 100%;
                            min-height: 100%; max-height: 100%; object-fit:
                            cover; " class="border-0" loading="lazy" /&gt;
                          </noscript>
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-green-600">
                        Search
                      </h3>
                      <span className="text-center">
                        <span>
                          Our search engine will
                          <strong>find the relevant schemes</strong>!
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-0 transform rotate-90 lg:rotate-0">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 192 512"
                    className="text-darkIndigo-50"
                    height={40}
                    width={40}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="text-darkIndigo-50 -ml-12"
                    height={80}
                    width={80}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="relative bg-white flex z-10 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:animate-bounceOnce p-8 false">
                    <div className="relative z-20 bg-white w-full h-full rounded-lg flex flex-col items-center gap-3">
                      <div className="h-16">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%"
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%"
                            }}
                          >
                            <img
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0
                              }}
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2747%27%20height=%2761%27/%3e"
                            />
                          </span>
                          <img
                            alt="[object Object]"
                            title="[object Object]"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="intrinsic"
                            className="border-0"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover"
                            }}
                          />
                          <noscript>
                            &lt;img srcset="
                            https://cdn.myscheme.in/images/icons/apply.svg 1x,
                            https://cdn.myscheme.in/images/icons/apply.svg 2x "
                            alt="[object Object]" title="[object Object]"
                            src="https://cdn.myscheme.in/images/icons/apply.svg"
                            decoding="async" data-nimg="intrinsic" style="
                            position: absolute; top: 0; left: 0; bottom: 0;
                            right: 0; box-sizing: border-box; padding: 0;
                            border: none; margin: auto; display: block; width:
                            0; height: 0; min-width: 100%; max-width: 100%;
                            min-height: 100%; max-height: 100%; object-fit:
                            cover; " class="border-0" loading="lazy" /&gt;
                          </noscript>
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-green-600">
                        Select &amp; Apply
                      </h3>
                      <span className="text-center">
                        <span>
                          <strong>Select and apply</strong> for the best suited
                          scheme
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section>
          <section
            id="about"
            className="relative bg-no-repeat py-12 md:py-20 relative z-0"
          >
            <div className="container mx-auto px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="flex flex-1 mr-2">
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-green-600 mb-6">
                      About
                    </h3>
                    <p className="text-slate-600 mb-6 2xl:mb-12 text-lg !leading-relaxed">
                      myScheme is a National Platform that aims to offer
                      one-stop search and discovery of the Government schemes.
                    </p>
                    <p className="text-slate-600 text-lg !leading-relaxed">
                      It provides an innovative, technology-based solution to
                      discover scheme information based upon the eligibility of
                      the citizen.
                    </p>
                    <p className="text-slate-600 text-lg !leading-relaxed">
                      The platform helps the citizen to find the right
                      Government schemes for them. It also guides on how to
                      apply for different Government schemes. Thus no need to
                      visit multiple Government websites.
                    </p>
                    <a
                      className="undefined mt-8 block normal-case"
                      href="/about"
                    >
                      <button
                        aria-label="View More"
                        className="flex items-center px-5 py-2.5 text-base rounded-md undefined undefined border border-solid !bg-transparent text-secondary hover:text-primary border-primary hover:border-primary green transition ease-in-out font-medium leading-none mt-6 undefined"
                        title=""
                      >
                        View More
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="ml-2 inline-block w-6 h-6"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 w-full mt-4 lg:mt-0 lg:ml-4 items-center justify-center">
                  <div className="rounded-xl w-[90%] h-[300px] my-6 relative before:absolute before:-bottom-2 before:-left-2 before:w-full before:h-full before:bg-green-300 before:rounded-xl before:-z-1">
                    <div className="absolute rounded-bl-xl w-[96%] h-[96%] -z-1 border-0 border-b-2 border-l-2 border-solid border-green-200 -bottom-3.5 -left-3.5"></div>
                    <div className="absolute rounded-bl-2xl w-[94%] h-[94%] -z-1 border-0 border-b-2 border-l-2 border-solid border-green-200 -bottom-5 -left-5"></div>
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                      }}
                    >
                      <img
                        alt="Video about myScheme"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="fill"
                        className="border-0 w-full h-full rounded-xl"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%"
                        }}
                      />
                      <noscript>
                        &lt;img srcset="
                        /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fyt_about.jpg&amp;amp;w=640&amp;amp;q=75
                        640w,
                        /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fyt_about.jpg&amp;amp;w=750&amp;amp;q=75
                        750w,
                        /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fyt_about.jpg&amp;amp;w=828&amp;amp;q=75
                        828w,
                        /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fyt_about.jpg&amp;amp;w=1080&amp;amp;q=75
                        1080w,
                        /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fyt_about.jpg&amp;amp;w=1200&amp;amp;q=75
                        1200w,
                        /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fyt_about.jpg&amp;amp;w=1920&amp;amp;q=75
                        1920w,
                        /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fyt_about.jpg&amp;amp;w=2048&amp;amp;q=75
                        2048w,
                        /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fyt_about.jpg&amp;amp;w=3840&amp;amp;q=75
                        3840w " alt="Video about myScheme" sizes="100vw"
                        src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fyt_about.jpg&amp;amp;w=3840&amp;amp;q=75"
                        decoding="async" data-nimg="fill" style=" position:
                        absolute; top: 0; left: 0; bottom: 0; right: 0;
                        box-sizing: border-box; padding: 0; border: none;
                        margin: auto; display: block; width: 0; height: 0;
                        min-width: 100%; max-width: 100%; min-height: 100%;
                        max-height: 100%; " class="border-0 w-full h-full
                        rounded-xl" loading="lazy" /&gt;
                      </noscript>
                    </span>
                    <div className="rounded-xl absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="cursor-pointer w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 448 512"
                            className="text-white"
                            height={20}
                            width={20}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section>
          <section
            id="faqs"
            className="relative bg-no-repeat py-12 md:py-20 bg-gradient-to-b from-green-50 to-white relative z-0 after:absolute after:-top-6 after:left-0 lg:after:-left-10 after:w-full after:h-0 after:border-green-50 after:border-[40px] after:border-solid after:-z-10 after:rotate-[2deg] after:transform mt-20 !min-h-[10px]"
          >
            <div className="container mx-auto px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative">
              <div className="grid grid-cols-1 md:flex flex-wrap gap-4 justify-between items-center !block lg:!flex !gap-10 lg:!gap-20">
                <div className="hidden lg:block z-0 relative before:content[*] before:h-3/4 before:w-3/4 before:absolute before:-top-10 before:-left-5 lg:before:-left-10 before:bg-green-shape before:-z-1">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27480%27%20height=%27480%27/%3e"
                      />
                    </span>
                    <img
                      alt="Questions Image"
                      title="Questions Image"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="border-0 object-contain"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%"
                      }}
                    />
                    <noscript>
                      &lt;img srcset="
                      https://cdn.myscheme.in/images/questions.svg 1x,
                      https://cdn.myscheme.in/images/questions.svg 2x "
                      alt="Questions Image" title="Questions Image"
                      src="https://cdn.myscheme.in/images/questions.svg"
                      decoding="async" data-nimg="intrinsic" style=" position:
                      absolute; top: 0; left: 0; bottom: 0; right: 0;
                      box-sizing: border-box; padding: 0; border: none; margin:
                      auto; display: block; width: 0; height: 0; min-width:
                      100%; max-width: 100%; min-height: 100%; max-height: 100%;
                      " class="border-0 object-contain" loading="lazy" /&gt;
                    </noscript>
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-10">
                    <p className="text-xl text-darkIndigo-300 text-left mb-2">
                      Frequently Asked Questions
                    </p>
                    <h2 className="text-3xl sm:text-4xl text-left font-extrabold leading-snug">
                      Checkout our knowledge base for some of your answers!
                    </h2>
                  </div>
                  <div className="py-4 first:pt-0 last:pb-0 undefined">
                    <div className="cursor-pointer undefined">
                      <div className="flex flex-row items-center justify-between">
                        <p className="font-bold w-11/12">What is myScheme?</p>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="ml-1"
                          height={25}
                          width={25}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="rounded-b mt-3 hidden">
                      <p className="text-base leading-relaxed">
                        myScheme is an e-Marketplace for Govt. schemes and
                        services. Using myScheme you can find various government
                        schemes, check your eligibility, and apply for the
                        schemes.
                      </p>
                    </div>
                  </div>
                  <div className="py-4 first:pt-0 last:pb-0 undefined">
                    <div className="cursor-pointer undefined">
                      <div className="flex flex-row items-center justify-between">
                        <p className="font-bold w-11/12">
                          How myScheme will help common citizens?
                        </p>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="ml-1"
                          height={25}
                          width={25}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="rounded-b mt-3 hidden">
                      <p className="text-base leading-relaxed">
                        myScheme will reduce the time and effort of citizens in
                        searching for appropriate government schemes.The easy
                        user interface of myScheme helps common people a lot in
                        discovering and applying for schemes.
                      </p>
                    </div>
                  </div>
                  <div className="py-4 first:pt-0 last:pb-0 undefined">
                    <div className="cursor-pointer undefined">
                      <div className="flex flex-row items-center justify-between">
                        <p className="font-bold w-11/12">
                          Can I apply for the schemes through myScheme?
                        </p>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="ml-1"
                          height={25}
                          width={25}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="rounded-b mt-3 hidden">
                      <p className="text-base leading-relaxed">
                        For now, the platform shall direct you to the
                        application page of the scheme of your choice.It is
                        envisaged that in the upcoming phases, myScheme shall
                        have the feature to apply for schemes / services from
                        within the platform/ app.
                      </p>
                    </div>
                  </div>
                  <div className="py-4 first:pt-0 last:pb-0 undefined">
                    <div className="cursor-pointer undefined">
                      <div className="flex flex-row items-center justify-between">
                        <p className="font-bold w-11/12">
                          How does myScheme work? How do I check for my
                          eligibility through myScheme ?
                        </p>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="ml-1"
                          height={25}
                          width={25}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="rounded-b mt-3 hidden">
                      <p className="text-base leading-relaxed">
                        myScheme offers a convenient three - step process for
                        the citizens to discover the government schemes for
                        which they are eligible:
                        {/* */}
                        Step 1 - The user enters his / her attributes such as
                        demographic, income, social details, etc.
                        {/* */}Step 2 - The myScheme findsthe relevant schemes
                        from hundreds of schemes for the user.
                        {/* */}Step 3 - The user can select from the list of
                        eligible schemes and get more information from the
                        dedicated scheme page with detailed knowledge, FAQs, and
                        application process and traverse to the application URL
                        to apply.
                      </p>
                    </div>
                  </div>
                  <div className="py-4 first:pt-0 last:pb-0 undefined">
                    <div className="cursor-pointer undefined">
                      <div className="flex flex-row items-center justify-between">
                        <p className="font-bold w-11/12">
                          What all information about a particular scheme can I
                          find on myScheme ?
                        </p>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="ml-1"
                          height={25}
                          width={25}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="rounded-b mt-3 hidden">
                      <p className="text-base leading-relaxed">
                        myScheme provides details on the eligibility criteria,
                        application process, and benefits being offered under
                        that scheme. myScheme also answers the Frequently Asked
                        Questions(FAQs) about the scheme.
                      </p>
                    </div>
                  </div>
                  <a className="undefined block normal-case" href="/faqs">
                    <button
                      aria-label="View More"
                      className="flex items-center px-5 py-2.5 text-base rounded-md undefined undefined border border-solid !bg-transparent text-secondary hover:text-primary border-primary hover:border-primary green transition ease-in-out font-medium leading-none mt-6 undefined"
                      title=""
                    >
                      View More
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="ml-2 inline-block w-6 h-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
    <section
      id="contact"
      className="bg-darkIndigo-900 relative z-0 after:absolute after:-top-3 lg:after:-top-6 after:-left-1 after:w-full after:h-0 after:border-darkIndigo-900 after:border-[50px] after:border-solid after:-z-10 after:rotate-[3deg] lg:after:rotate-[2deg] after:transform mt-20"
    >
      <div className="container mx-auto px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative z-0">
        <div className="gap-4 grid grid-cols-1 py-12 !items-start !gap-8 md:grid-cols-2 lg:grid-cols-4 undefined">
          <div className="flex-1">
            <div className="flex gap-2 align-items-center">
              <p className="text-white text-white/80 hover:text-white">
                <span>©{/* */}2024</span>
              </p>
              <div className="relative h-6 w-36 lg:h-8 lg:w-48">
                <a className="undefined block normal-case" href="/">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <img
                      alt="myScheme"
                      title="myScheme"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="fill"
                      className="border-0"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%"
                      }}
                    />
                    <noscript>
                      &lt;img srcset="
                      https://cdn.myscheme.in/images/myscheme-logo-white.svg
                      640w,
                      https://cdn.myscheme.in/images/myscheme-logo-white.svg
                      750w,
                      https://cdn.myscheme.in/images/myscheme-logo-white.svg
                      828w,
                      https://cdn.myscheme.in/images/myscheme-logo-white.svg
                      1080w,
                      https://cdn.myscheme.in/images/myscheme-logo-white.svg
                      1200w,
                      https://cdn.myscheme.in/images/myscheme-logo-white.svg
                      1920w,
                      https://cdn.myscheme.in/images/myscheme-logo-white.svg
                      2048w,
                      https://cdn.myscheme.in/images/myscheme-logo-white.svg
                      3840w " alt="myScheme" title="myScheme" sizes="100vw"
                      src="https://cdn.myscheme.in/images/myscheme-logo-white.svg"
                      decoding="async" data-nimg="fill" style=" position:
                      absolute; top: 0; left: 0; bottom: 0; right: 0;
                      box-sizing: border-box; padding: 0; border: none; margin:
                      auto; display: block; width: 0; height: 0; min-width:
                      100%; max-width: 100%; min-height: 100%; max-height: 100%;
                      " class="border-0" loading="lazy" /&gt;
                    </noscript>
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center mt-4">
              <span className="text-sm text-white mr-2">Powered by</span>
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2780%27%20height=%2740%27/%3e"
                  />
                </span>
                <img
                  alt="Digital India"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="border-0"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%"
                  }}
                />
                <noscript>
                  &lt;img srcset="
                  https://cdn.myscheme.in/images/logos/digital-india.svg 1x,
                  https://cdn.myscheme.in/images/logos/digital-india.svg 2x "
                  alt="Digital India"
                  src="https://cdn.myscheme.in/images/logos/digital-india.svg"
                  decoding="async" data-nimg="intrinsic" style=" position:
                  absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing:
                  border-box; padding: 0; border: none; margin: auto; display:
                  block; width: 0; height: 0; min-width: 100%; max-width: 100%;
                  min-height: 100%; max-height: 100%; " class="border-0"
                  loading="lazy" /&gt;
                </noscript>
              </span>
            </div>
            <div className="flex flex-col text-white text-white/80 text-sm hover:text-white mt-1 mb-0">
              <span className="cursor-pointer">
                Digital India Corporation(DIC)
              </span>
              <span className="cursor-pointer">
                Ministry of Electronics &amp; IT (MeitY)
              </span>
              <span className="cursor-pointer">
                Government of India<sup>®</sup>
              </span>
            </div>
            <div className="flex items-center flex-row mt-2 gap-3 sm:gap-2">
              <div className="cursor-pointer h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  height={15}
                  width={15}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
              </div>
              <div className="cursor-pointer h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height={15}
                  width={15}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div className="cursor-pointer h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={15}
                  width={15}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </div>
              <div className="cursor-pointer h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height={15}
                  width={15}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-white text-2xl font-heading font-semibold mb-6">
              Quick Links
            </h2>
            <ul className="grid grid-cols-1 text-white items-center !gap-4 gap-2">
              <li
                title="About Us"
                className="flex hover:pl-1 duration-500 gap-2 opacity-80 hover:opacity-100 transition-all ease-in-out text-sm"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                </svg>
                <a className="undefined block normal-case" href="/about">
                  About Us
                </a>
              </li>
              <li
                title="Contact Us"
                className="flex hover:pl-1 duration-500 gap-2 opacity-80 hover:opacity-100 transition-all ease-in-out text-sm"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                </svg>
                <a className="undefined block normal-case" href="/contact">
                  Contact Us
                </a>
              </li>
              <li
                title="Screen Reader"
                className="flex hover:pl-1 duration-500 gap-2 opacity-80 hover:opacity-100 transition-all ease-in-out text-sm"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                </svg>
                <a
                  className="undefined block normal-case"
                  href="/screen-reader"
                >
                  Screen Reader
                </a>
              </li>
              <li
                title="Accessibility Statement"
                className="flex hover:pl-1 duration-500 gap-2 opacity-80 hover:opacity-100 transition-all ease-in-out text-sm"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                </svg>
                <a
                  className="undefined block normal-case"
                  href="/accessibility-statement"
                >
                  Accessibility Statement
                </a>
              </li>
              <li
                title="Frequently Asked Questions"
                className="flex hover:pl-1 duration-500 gap-2 opacity-80 hover:opacity-100 transition-all ease-in-out text-sm"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                </svg>
                <a className="undefined block normal-case" href="/faqs">
                  Frequently Asked Questions
                </a>
              </li>
              <li
                title="Disclaimer"
                className="flex hover:pl-1 duration-500 gap-2 opacity-80 hover:opacity-100 transition-all ease-in-out text-sm"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                </svg>
                <a className="undefined block normal-case" href="/disclaimer">
                  Disclaimer
                </a>
              </li>
              <li
                title="Terms & Conditions"
                className="flex hover:pl-1 duration-500 gap-2 opacity-80 hover:opacity-100 transition-all ease-in-out text-sm"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                </svg>
                <a
                  className="undefined block normal-case"
                  href="/terms-conditions"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-white text-2xl font-heading font-semibold mb-6">
              Useful Links
            </h2>
            <ul className="grid grid-cols-1 text-white items-center !grid !grid-cols-3 !gap-1 gap-2">
              <li
                title=""
                className="bg-white p-1 rounded-md duration-500 border-3 border-solid border-darkIndigo-900 hover:border-gray-500 transition-all ease-in-out text-sm cursor-pointer"
              >
                <div className="relative w-full h-10">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <img
                      alt="di"
                      title="Digital India"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="fill"
                      className="border-0"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                    <noscript>
                      &lt;img srcset="
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&amp;amp;w=640&amp;amp;q=75
                      640w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&amp;amp;w=750&amp;amp;q=75
                      750w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&amp;amp;w=828&amp;amp;q=75
                      828w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&amp;amp;w=1080&amp;amp;q=75
                      1080w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&amp;amp;w=1200&amp;amp;q=75
                      1200w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&amp;amp;w=1920&amp;amp;q=75
                      1920w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&amp;amp;w=2048&amp;amp;q=75
                      2048w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&amp;amp;w=3840&amp;amp;q=75
                      3840w " alt="di" title="Digital India" sizes="100vw"
                      src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdi.png&amp;amp;w=3840&amp;amp;q=75"
                      decoding="async" data-nimg="fill" style=" position:
                      absolute; top: 0; left: 0; bottom: 0; right: 0;
                      box-sizing: border-box; padding: 0; border: none; margin:
                      auto; display: block; width: 0; height: 0; min-width:
                      100%; max-width: 100%; min-height: 100%; max-height: 100%;
                      object-fit: contain; " class="border-0" loading="lazy"
                      /&gt;
                    </noscript>
                  </span>
                </div>
              </li>
              <li
                title=""
                className="bg-white p-1 rounded-md duration-500 border-3 border-solid border-darkIndigo-900 hover:border-gray-500 transition-all ease-in-out text-sm cursor-pointer"
              >
                <div className="relative w-full h-10">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <img
                      alt="digilocker"
                      title="Digilocker"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="fill"
                      className="border-0"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                    <noscript>
                      &lt;img srcset="
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdigilocker.png&amp;amp;w=640&amp;amp;q=75
                      640w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdigilocker.png&amp;amp;w=750&amp;amp;q=75
                      750w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdigilocker.png&amp;amp;w=828&amp;amp;q=75
                      828w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdigilocker.png&amp;amp;w=1080&amp;amp;q=75
                      1080w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdigilocker.png&amp;amp;w=1200&amp;amp;q=75
                      1200w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdigilocker.png&amp;amp;w=1920&amp;amp;q=75
                      1920w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdigilocker.png&amp;amp;w=2048&amp;amp;q=75
                      2048w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdigilocker.png&amp;amp;w=3840&amp;amp;q=75
                      3840w " alt="digilocker" title="Digilocker" sizes="100vw"
                      src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fdigilocker.png&amp;amp;w=3840&amp;amp;q=75"
                      decoding="async" data-nimg="fill" style=" position:
                      absolute; top: 0; left: 0; bottom: 0; right: 0;
                      box-sizing: border-box; padding: 0; border: none; margin:
                      auto; display: block; width: 0; height: 0; min-width:
                      100%; max-width: 100%; min-height: 100%; max-height: 100%;
                      object-fit: contain; " class="border-0" loading="lazy"
                      /&gt;
                    </noscript>
                  </span>
                </div>
              </li>
              <li
                title=""
                className="bg-white p-1 rounded-md duration-500 border-3 border-solid border-darkIndigo-900 hover:border-gray-500 transition-all ease-in-out text-sm cursor-pointer"
              >
                <div className="relative w-full h-10">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <img
                      alt="umang"
                      title="Umang"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="fill"
                      className="border-0"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                    <noscript>
                      &lt;img srcset="
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fumang.png&amp;amp;w=640&amp;amp;q=75
                      640w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fumang.png&amp;amp;w=750&amp;amp;q=75
                      750w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fumang.png&amp;amp;w=828&amp;amp;q=75
                      828w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fumang.png&amp;amp;w=1080&amp;amp;q=75
                      1080w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fumang.png&amp;amp;w=1200&amp;amp;q=75
                      1200w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fumang.png&amp;amp;w=1920&amp;amp;q=75
                      1920w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fumang.png&amp;amp;w=2048&amp;amp;q=75
                      2048w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fumang.png&amp;amp;w=3840&amp;amp;q=75
                      3840w " alt="umang" title="Umang" sizes="100vw"
                      src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Fumang.png&amp;amp;w=3840&amp;amp;q=75"
                      decoding="async" data-nimg="fill" style=" position:
                      absolute; top: 0; left: 0; bottom: 0; right: 0;
                      box-sizing: border-box; padding: 0; border: none; margin:
                      auto; display: block; width: 0; height: 0; min-width:
                      100%; max-width: 100%; min-height: 100%; max-height: 100%;
                      object-fit: contain; " class="border-0" loading="lazy"
                      /&gt;
                    </noscript>
                  </span>
                </div>
              </li>
              <li
                title=""
                className="bg-white p-1 rounded-md duration-500 border-3 border-solid border-darkIndigo-900 hover:border-gray-500 transition-all ease-in-out text-sm cursor-pointer"
              >
                <div className="relative w-full h-10">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <img
                      alt="indiaGov"
                      title="National Portal Of India"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="fill"
                      className="border-0"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                    <noscript>
                      &lt;img srcset="
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FindiaGov.png&amp;amp;w=640&amp;amp;q=75
                      640w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FindiaGov.png&amp;amp;w=750&amp;amp;q=75
                      750w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FindiaGov.png&amp;amp;w=828&amp;amp;q=75
                      828w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FindiaGov.png&amp;amp;w=1080&amp;amp;q=75
                      1080w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FindiaGov.png&amp;amp;w=1200&amp;amp;q=75
                      1200w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FindiaGov.png&amp;amp;w=1920&amp;amp;q=75
                      1920w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FindiaGov.png&amp;amp;w=2048&amp;amp;q=75
                      2048w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FindiaGov.png&amp;amp;w=3840&amp;amp;q=75
                      3840w " alt="indiaGov" title="National Portal Of India"
                      sizes="100vw"
                      src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FindiaGov.png&amp;amp;w=3840&amp;amp;q=75"
                      decoding="async" data-nimg="fill" style=" position:
                      absolute; top: 0; left: 0; bottom: 0; right: 0;
                      box-sizing: border-box; padding: 0; border: none; margin:
                      auto; display: block; width: 0; height: 0; min-width:
                      100%; max-width: 100%; min-height: 100%; max-height: 100%;
                      object-fit: contain; " class="border-0" loading="lazy"
                      /&gt;
                    </noscript>
                  </span>
                </div>
              </li>
              <li
                title=""
                className="bg-white p-1 rounded-md duration-500 border-3 border-solid border-darkIndigo-900 hover:border-gray-500 transition-all ease-in-out text-sm cursor-pointer"
              >
                <div className="relative w-full h-10">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <img
                      alt="myGov"
                      title="myGov"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="fill"
                      className="border-0"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                    <noscript>
                      &lt;img srcset="
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FmyGov.png&amp;amp;w=640&amp;amp;q=75
                      640w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FmyGov.png&amp;amp;w=750&amp;amp;q=75
                      750w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FmyGov.png&amp;amp;w=828&amp;amp;q=75
                      828w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FmyGov.png&amp;amp;w=1080&amp;amp;q=75
                      1080w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FmyGov.png&amp;amp;w=1200&amp;amp;q=75
                      1200w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FmyGov.png&amp;amp;w=1920&amp;amp;q=75
                      1920w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FmyGov.png&amp;amp;w=2048&amp;amp;q=75
                      2048w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FmyGov.png&amp;amp;w=3840&amp;amp;q=75
                      3840w " alt="myGov" title="myGov" sizes="100vw"
                      src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FmyGov.png&amp;amp;w=3840&amp;amp;q=75"
                      decoding="async" data-nimg="fill" style=" position:
                      absolute; top: 0; left: 0; bottom: 0; right: 0;
                      box-sizing: border-box; padding: 0; border: none; margin:
                      auto; display: block; width: 0; height: 0; min-width:
                      100%; max-width: 100%; min-height: 100%; max-height: 100%;
                      object-fit: contain; " class="border-0" loading="lazy"
                      /&gt;
                    </noscript>
                  </span>
                </div>
              </li>
              <li
                title=""
                className="bg-white p-1 rounded-md duration-500 border-3 border-solid border-darkIndigo-900 hover:border-gray-500 transition-all ease-in-out text-sm cursor-pointer"
              >
                <div className="relative w-full h-10">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <img
                      alt="dataGov"
                      title="Open Government Data"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="fill"
                      className="border-0"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                    <noscript>
                      &lt;img srcset="
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FdataGov.png&amp;amp;w=640&amp;amp;q=75
                      640w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FdataGov.png&amp;amp;w=750&amp;amp;q=75
                      750w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FdataGov.png&amp;amp;w=828&amp;amp;q=75
                      828w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FdataGov.png&amp;amp;w=1080&amp;amp;q=75
                      1080w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FdataGov.png&amp;amp;w=1200&amp;amp;q=75
                      1200w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FdataGov.png&amp;amp;w=1920&amp;amp;q=75
                      1920w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FdataGov.png&amp;amp;w=2048&amp;amp;q=75
                      2048w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FdataGov.png&amp;amp;w=3840&amp;amp;q=75
                      3840w " alt="dataGov" title="Open Government Data"
                      sizes="100vw"
                      src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2FdataGov.png&amp;amp;w=3840&amp;amp;q=75"
                      decoding="async" data-nimg="fill" style=" position:
                      absolute; top: 0; left: 0; bottom: 0; right: 0;
                      box-sizing: border-box; padding: 0; border: none; margin:
                      auto; display: block; width: 0; height: 0; min-width:
                      100%; max-width: 100%; min-height: 100%; max-height: 100%;
                      object-fit: contain; " class="border-0" loading="lazy"
                      /&gt;
                    </noscript>
                  </span>
                </div>
              </li>
              <li
                title=""
                className="bg-white p-1 rounded-md duration-500 border-3 border-solid border-darkIndigo-900 hover:border-gray-500 transition-all ease-in-out text-sm cursor-pointer"
              >
                <div className="relative w-full h-10">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <img
                      alt="igod"
                      title="Integrated Government Online Directory"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="fill"
                      className="border-0"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                    <noscript>
                      &lt;img srcset="
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Figod.png&amp;amp;w=640&amp;amp;q=75
                      640w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Figod.png&amp;amp;w=750&amp;amp;q=75
                      750w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Figod.png&amp;amp;w=828&amp;amp;q=75
                      828w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Figod.png&amp;amp;w=1080&amp;amp;q=75
                      1080w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Figod.png&amp;amp;w=1200&amp;amp;q=75
                      1200w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Figod.png&amp;amp;w=1920&amp;amp;q=75
                      1920w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Figod.png&amp;amp;w=2048&amp;amp;q=75
                      2048w,
                      /_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Figod.png&amp;amp;w=3840&amp;amp;q=75
                      3840w " alt="igod" title="Integrated Government Online
                      Directory" sizes="100vw"
                      src="/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2FusefulLinks%2Figod.png&amp;amp;w=3840&amp;amp;q=75"
                      decoding="async" data-nimg="fill" style=" position:
                      absolute; top: 0; left: 0; bottom: 0; right: 0;
                      box-sizing: border-box; padding: 0; border: none; margin:
                      auto; display: block; width: 0; height: 0; min-width:
                      100%; max-width: 100%; min-height: 100%; max-height: 100%;
                      object-fit: contain; " class="border-0" loading="lazy"
                      /&gt;
                    </noscript>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-white text-2xl font-heading font-semibold mb-6">
              Get in touch
            </h2>
            <p className="text-white/80 text-sm leading-relaxed flex gap-1 items-start">
              <span>
                4th Floor, NeGD, Electronics Niketan, 6 CGO Complex, Lodhi Road,
                New Delhi - 110003, India
              </span>
            </p>
            <div className="mb-4">
              <p className="text-white/80 hover:text-white underline text-sm font-normal mb-0">
                support-myscheme[at]digitalindia[dot]gov[dot]in
              </p>
              <p className="text-white/80 text-sm font-normal my-4">
                (011) 24303714
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="relative bg-darkIndigo-900 py-2 border border-t border-solid border-darkIndigo-800">
      <div className="container mx-auto px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative">
        <div className="text-sm text-white/50 text-left font-normal py-1 md:flex items-start justify-between gap-2">
          Last Updated On
          {/* */}:{/* */}18/01/2024
          {/* */}| v-
          {/* */}2.0.30
        </div>
      </div>
    </footer>
  </div>
</>

    </div>
  );
};

export default Home;


