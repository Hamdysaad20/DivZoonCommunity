import React from 'react'
import Image from "next/image";

function MainDivzoonHeader() {
  return (
    <header className='  z-60 bg-gray-900 sticky top-0 h-15 flex justify-center items-center font-semibold uppercase'>

    <div className=' cursor-pointer select-none duration-300 px-4 rounded-xl py-1'>
      <Image
        src='/divlogo.png'
        alt='navigation'
        height='27'
        width='118'
      />
    </div>
  </header>  )
}

export default MainDivzoonHeader