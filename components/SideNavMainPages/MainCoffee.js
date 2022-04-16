import React from "react";
import Image from "next/image";
import Sidenav from "../nav/Sidenav";
import AnnoumceShop from "../adslayout/AnnoumceShop";

function MainCoffee() {
  const productsItems = [
    {
      prodName: "قميص بايثون حجم متوسط",
      prodImg: "/Coffe/1.jpg",
      price: "۱۹۹,۹۹",
      offerPricePercentage: "-10%",
    },
    {
      prodName: "قميص  حجم متوسط css",
      prodImg: "/Coffe/2.jpg.png",
      price: "۱۸۹,۹۹",
      offerPricePercentage: "-50%",
    },
    {
      prodName: "قميص Ai حجم متوسط",
      prodImg: "/Coffe/3.jpg.png",
      price: "۳۳۹,۹۹",
      offerPricePercentage: "-10%",
    },
    {
      prodName: "هودي github  حجم متوسط",
      prodImg: "/Coffe/4.jpg.png",
      price: "۳۳۹,۹۹",
      offerPricePercentage: "-40%",
    },
    {
      prodName: "تيشيرت stackoverflow حجم متوسط",
      prodImg: "/Coffe/5.jpg.png",
      price: "۳۳۹,۹۹",
      offerPricePercentage: "-10%",
    },
    {
      prodName: "تيشيرت breaking builds حجم متوسط",
      prodImg: "/Coffe/6.jpg.png",
      price: "۳۳۹,۹۹",
    },
    {
      prodName: "I Hate CSSتيشيرت  حجم متوسط",
      prodImg: "/Coffe/7.jpg.png",
      price: "۳۳۹,۹۹",
    },
    {
      prodName: "HTML تيشيرت  حجم متوسط",
      prodImg: "/Coffe/8.jpg.png",
      price: "۳۳۹,۹۹",
    },
    {
      prodName: "dice قميص  حجم متوسط",
      prodImg: "/Coffe/9.jpg.png",
      price: "۱۳۹,۹۹",
    },
    {
      prodName: "debug قميص  حجم متوسط debug",
      prodImg: "/Coffe/10.jpg.png",
      price: "۳۱۹,۹۹",
    },
    {
      prodName: "Flutter  قميص  حجم متوسط",
      prodImg: "/Coffe/11.jpg.png",
      price: "۳۱۹,۹۹",
    },
    {
      prodName: "LeetCode قميص  حجم متوسط",
      prodImg: "/Coffe/12.jpg.png",
      price: "۱۳۹,۹۹",
    },
  ];

  return (
    <div className='fullscreen h-full  scroll-m-4  mx-auto  justify-center text-center '>
      <div className='  lg:max-w-9xl h-screen  text-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
        <div className='  lg:col-span-3  mx-4 sm:mx-0 col-span-2 scroll-m-4 overflow-scroll text-white px-2 h-full '>
          <div className='mt-3  sm:mt-16'>
            <AnnoumceShop />
          </div>
          <div className='h-screen   mt-16'>
            {/* here should be the items */}
            <div className='text-gray-900  relative  grid grid-cols-1     rounded-[1rem] md:rounded-[1.5rem]'>
              <h1
                style={{
                  fontFamily: "BalooBhaijaan2",
                  fontWeight: "600",
                  textShadow:
                    "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
                }}
                className='text-gray-900 dark:text-gray-300  text-xl'>
                ☕😉 var coffee = new coffee();
              </h1>
              <div className='pb-60 mx-auto justify-center  select-none  md:gap-2 lg:gap-2 xl:gap-4 grid lg:grid-cols-3  grid-cols-2 gap-3 md:grid-cols-2  2xl:grid-cols-4 '>
                {productsItems
                  .sort(() => 0.5 - Math.random())
                  .map((item, i) => (
                    <div
                      key={i}
                      className='sm:h-80   md:mb-1 pb-2   text-center sm:w-48 md:w-60  '>
                      <div className='hover:shadow-lg relative  select-none cursor-pointer overflow-hidden   hover:opacity-90 duration-300 dark:bg-gray-700  bg-gray-300 pb-3 text-center justify-center  rounded-[0.5rem] mt-6'>
                        {item.offerPricePercentage == null ? (
                          ""
                        ) : (
                          <div className='absolute top-0 z-60 right-0 w-12 h-6 text-white bg-red-600'>
                            {item.offerPricePercentage}
                          </div>
                        )}
                        <Image
                          className=' h-80   overflow-hidden scale-90  hover:scale-110 hover:rounded-[0.5rem] active:rounded-[0.5rem]   absolute duration-500 rounded-[0.5rem] w-48 md:w-60  bg-gary-300'
                          src={item.prodImg}
                          alt='product'
                          height='282'
                          width='282'
                          placeholder='blur'
                          blurDataURL='data:...'
                        />{" "}
                        <div className='flex gap-4  font-bold text-right justify-center '>
                          <h1 className='dark:text-gray-400 text-right right-5 bottom-12 justify-right font-serif'>
                            {item.prodName.length > 15
                              ? "..." + item.prodName.substr(0, 13)
                              : item.prodName}
                          </h1>
                          <h1 className=' flex dark:text-gray-200 font-bold'></h1>
                        </div>
                        <div className=' flex justify-center'>
                          <div className='relative bg-gray-900/30 rounded-md h-8 w-[80%] sm:w-[70%] justify-center z-10 '>
                            <div className='mt-1 flex mr-2 pr-2 text-gray-300 text-center mx-auto justify-center'>
                              <h1
                                style={{
                                  fontFamily: "BalooBhaijaan2",
                                  fontWeight: "600",
                                  textShadow:
                                    "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
                                }}
                                className='dark:text-gray-400 text-gray-900 '>
                                {item.price}
                              </h1>
                              <h1 className='dark:text-gray-400 text-gray-900  text-xs'>
                                ج.م
                              </h1>
                            </div>
                            <button className=' flex h-8 w-8 text-center  z-20 absolute right-0 top-0  justify-center font-bold active:scale-90 duration-300 text-gray-200 rounded-md  bg-red-500'>
                              <h1
                                style={{
                                  fontFamily: "BalooBhaijaan2",
                                  fontWeight: "800",
                                  textShadow:
                                    "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
                                }}
                                className='px-2  font-extrabold'>
                                <svg
                                  className='px-1 mt-1 opacity-80 hover:opacity-100 duration'
                                  version='1.1'
                                  id='Capa_1'
                                  xmlns='http://www.w3.org/2000/svg'
                                  xmlnsXlink='http://www.w3.org/1999/xlink'
                                  x='0px'
                                  y='0px'
                                  width='24px'
                                  height='24px'
                                  viewBox='0 0 459.325 459.325'
                                  xmlSpace='preserve'>
                                  <g>
                                    <path
                                      d='M459.319,229.668c0,22.201-17.992,40.193-40.205,40.193H269.85v149.271c0,22.207-17.998,40.199-40.196,40.193
		c-11.101,0-21.149-4.492-28.416-11.763c-7.276-7.281-11.774-17.324-11.769-28.419l-0.006-149.288H40.181
		c-11.094,0-21.134-4.492-28.416-11.774c-7.264-7.264-11.759-17.312-11.759-28.413C0,207.471,17.992,189.475,40.202,189.475h149.267
		V40.202C189.469,17.998,207.471,0,229.671,0c22.192,0.006,40.178,17.986,40.19,40.187v149.288h149.282
		C441.339,189.487,459.308,207.471,459.319,229.668z'
                                    />
                                  </g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                </svg>
                              </h1>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                <div className='absolute bottom-36 sm:bottom-28 right-[20%] left-[20%]'>
                  <div className='dark:bg-slate-700 bg-gray-200 hover:bg-gray-300 duration-700 relative mx-auto  justify-center  my-6 py-1 rounded-full text-center  px-2'>
                    <h1 className='dark:text-gray-200 text-gray-600  font-bold'>
                      منتجات اخري في الطريق قريبا 😊
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sidehidmm mt-16 sm:block hidden   h-screen overflow-hidden'>
          <Sidenav className=' h-screen top-2' />
        </div>
      </div>
    </div>
  );
}

export default MainCoffee;
