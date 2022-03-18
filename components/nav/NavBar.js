import Link from "next/link";
import React from "react";

function NavBar(props) {
  var [showH, setShowH] = React.useState();
  var [showV, setShowV] = React.useState();
  var [showS, setShowS] = React.useState();
  var [showG, setShowG] = React.useState();

  return (
    <div className='invisible sm:visible fixed w-full z-60'>
      <header className=' text-center overflow-hidden lg:max-w-9xl sticky top-0 z-50 grid grid-cols-3 dark:bg-gray-900/90 backdrop-blur-md bg-white shadow-sm pt-2'>
        <div
          style={{ color: "red", fontWeight: 800 }}
          className=' text-left md:text-center ml-3 sm:ml-7 text-2xl md:text-3xl py-auto md:pt-0 pt-1'></div>

        <div className=' gap-3 mx-1 md:mx-15 xl:mx-16 grid md:outline-hidden grid-cols-4    text-center'>
          <Link href='/' passHref>
            <div
              onClick={() => setShowH(!showH)}
              className={`${props.home} ${
                showH ? "border-b-4 border-red-500 duration-300 " : ""
              }`}>
              <div className=' py-2 ease-out  transition  duration-200 dark:hover:bg-gray-700/60 hover:bg-gray-100 rounded-lg  '>
                <svg
                  className='h-6 pt-1 w-6 mx-auto'
                  xmlns='http://www.w3.org/2000/svg'
                  id='Outline'
                  viewBox='0 0 24 24'
                  width='512'
                  fill={props.dark ? "gray" : "black"}
                  height='512'>
                  <path d='M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z' />
                </svg>
              </div>
            </div>
          </Link>
          <Link href='video' passHref>
            <div
              onClick={() => setShowV(!showV)}
              className={`${props.video} ${
                showV ? "border-b-4 border-red-500 duration-300" : ""
              }`}>
              <div className=' py-2 transition  duration-200 dark:hover:bg-gray-700/60 hover:bg-gray-100 rounded-lg  '>
                <svg
                  className='h-6 pt-1 w-6 mx-auto'
                  xmlns='http://www.w3.org/2000/svg'
                  id='Outline'
                  viewBox='0 0 24 24'
                  width='512'
                  height='512'
                  fill={props.dark ? "gray" : "black"}>
                  <path d='M20.494,7.968l-9.54-7A5,5,0,0,0,3,5V19a5,5,0,0,0,7.957,4.031l9.54-7a5,5,0,0,0,0-8.064Zm-1.184,6.45-9.54,7A3,3,0,0,1,5,19V5A2.948,2.948,0,0,1,6.641,2.328,3.018,3.018,0,0,1,8.006,2a2.97,2.97,0,0,1,1.764.589l9.54,7a3,3,0,0,1,0,4.836Z' />
                </svg>
              </div>
            </div>
          </Link>
          <Link href='shop' passHref>
            <div
              onClick={() => setShowS(!showS)}
              className={` ${props.shop}${
                showS ? "border-b-4 border-red-500 duration-300" : ""
              }`}>
              <div className=' py-2 transition  duration-200 dark:hover:bg-gray-700/60 hover:bg-gray-100 rounded-lg  '>
                <svg
                  className='h-6 pt-1 w-6 mx-auto'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  fill={props.dark ? "gray" : "black"}>
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M21 13.242V20h1v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242zm-2 .73a4.496 4.496 0 0 1-3.75-1.36A4.496 4.496 0 0 1 12 14.001a4.496 4.496 0 0 1-3.25-1.387A4.496 4.496 0 0 1 5 13.973V20h14v-6.027zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z' />
                </svg>
              </div>
            </div>
          </Link>
          <Link href='groups' passHref>
            <div
              onClick={() => setShowG(!showG)}
              className={` ${props.group}${
                showG ? "border-b-4 border-red-500 duration-300" : ""
              }`}>
              <div className=' py-2 transition  duration-200 dark:hover:bg-gray-700/60 hover:bg-gray-100 rounded-lg  '>
                <svg
                  className='h-6 pt-1 w-6 mx-auto'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  fill={props.dark ? "gray" : "black"}>
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M9.55 11.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5zm.45 8.248V16.4c0-.488.144-.937.404-1.338a6.473 6.473 0 0 0-5.033 1.417A8.012 8.012 0 0 0 10 19.749zM4.453 14.66A8.462 8.462 0 0 1 9.5 13c1.043 0 2.043.188 2.967.532.878-.343 1.925-.532 3.033-.532 1.66 0 3.185.424 4.206 1.156a8 8 0 1 0-15.253.504zm14.426 1.426C18.486 15.553 17.171 15 15.5 15c-2.006 0-3.5.797-3.5 1.4V20a7.996 7.996 0 0 0 6.88-3.914zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.5-9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        <div className=' pb-1 '>
          <button
            style={{ color: "#ed0e3f" }}
            className=' active:ring-offset-1 active:ring  dark:ring-red-600  ring-pink-800 py-2 px-3 text-sm md:text-lg duration-200 rounded-md font-medium dark:hover:bg-gray-200/60  hover:bg-gray-100'>
            تسجيل الدخول
          </button>
          <button
            style={{ color: "white", backgroundColor: "#ed0e3f" }}
            className='active:ring-offset-1 active:ring dark:ring-red-600  ring-pink-800 hidden md:inline-block hover:bg-red-800 duration-200 py-2 px-3 font-medium ml-2 rounded-md'>
            إنشاء حساب
          </button>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
