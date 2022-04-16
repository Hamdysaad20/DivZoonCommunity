import React from "react";
import NavBar from "../components/nav/NavBar";
import NavNavbarMobol from "../components/nav/NavNavbarMobol";
import NavnonavsBar from "../components/nav/NavnonavsBar";
import MainDivzoonHeader from "../components/MainDivzoonHeader";
import MainForShop from "../components/MainForShop";
import MainCoffee from "../components/SideNavMainPages/MainCoffee";
function getCoffe() {
  return (
    <div className='bg-gray-100 fixed w-full h-screen  dark:bg-[#0d151d]'>
      <MainDivzoonHeader />
      <NavBar
        className='sticky top-0 overflow-hidden'
        shop='border-b-4 border-red-500'
        dark='true'
      />
      <NavnonavsBar dark='true' />
      <NavNavbarMobol
        className='sticky top-0 overflow-hidden'
        shop='border-b-4 border-red-500'
        dark='true'
      />
      <MainCoffee />
    </div>
  );
}

export default getCoffe;
