import React from "react";
import Image from "next/image";
import styles from "../styles/header.module.css";

function MainDivzoonHeader() {
  function togglerdarkmode() {
    console.log("works");
  }
  return (
    <header className='  z-60 bg-gray-900 sticky top-0 h-15 flex justify-center items-center font-semibold uppercase'>
      <div className=' cursor-pointer select-none duration-300 px-4 rounded-xl py-1'>
        <Image
          className=''
          src='/divlogo.png'
          alt='navigation'
          height='27'
          width='118'
          priority
        />
      </div>
      <div className='right-4  absolute'>
        <label onClick={togglerdarkmode} className={styles.label}>
          <div className={styles.toggle}>
            <input
              className={styles.togglestate}
              type='checkbox'
              name='check'
              defaultValue='check'
            />
            <div className={styles.indicator} />
          </div>
        </label>
      </div>
    </header>
  );
}

export default MainDivzoonHeader;
