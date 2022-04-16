import React from "react";
import AnnoumceShop from "./adslayout/AnnoumceShop";
import Sidenav from "./nav/Sidenav";
import Image from "next/image";
function MainForShop() {
  const productsItems = [
    {
      prodName: "قميص بايثون حجم متوسط",
      prodImg: "/products/productimg1.jpg",
      price: "۱۹۹,۹۹",
      offerPricePercentage: "-10%",
    },
    {
      prodName: "قميص  حجم متوسط css",
      prodImg: "/products/productimg2.jpg",
      price: "۱۸۹,۹۹",
      offerPricePercentage: "-50%",
    },
    {
      prodName: "قميص Ai حجم متوسط",
      prodImg: "/products/productimg3.jpg",
      price: "۳۳۹,۹۹",
      offerPricePercentage: "-10%",
    },
    {
      prodName: "هودي github  حجم متوسط",
      prodImg: "/products/productimg4.jpg",
      price: "۳۳۹,۹۹",
      offerPricePercentage: "-40%",
    },
    {
      prodName: "تيشيرت stackoverflow حجم متوسط",
      prodImg: "/products/productimg5.jpg",
      price: "۳۳۹,۹۹",
      offerPricePercentage: "-10%",
    },
    {
      prodName: "تيشيرت breaking builds حجم متوسط",
      prodImg: "/products/productimg6.jpg",
      price: "۳۳۹,۹۹",
    },
    {
      prodName: "I Hate CSSتيشيرت  حجم متوسط",
      prodImg: "/products/productimg7.jpg",
      price: "۳۳۹,۹۹",
    },
    {
      prodName: "HTML تيشيرت  حجم متوسط",
      prodImg: "/products/productimg8.jpg",
      price: "۳۳۹,۹۹",
    },
    {
      prodName: "dice قميص  حجم متوسط",
      prodImg: "/products/productimg9.jpg",
      price: "۱۳۹,۹۹",
    },
    {
      prodName: "debug قميص  حجم متوسط debug",
      prodImg: "/products/productimg10.jpg",
      price: "۳۱۹,۹۹",
    },
    {
      prodName: "Flutter  قميص  حجم متوسط",
      prodImg: "/products/productimg11.jpg",
      price: "۳۱۹,۹۹",
    },
    {
      prodName: "LeetCode قميص  حجم متوسط",
      prodImg: "/products/productimg12.jpg",
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
                className='text-gray-900 dark:text-gray-300  text-2xl'>
                انضم لمجتمع المبرمجين العرب الان
              </h1>
              <div className='pb-60 mx-auto justify-center  select-none  md:gap-2 lg:gap-2 xl:gap-4 grid lg:grid-cols-3  grid-cols-2 gap-3 md:grid-cols-2  2xl:grid-cols-4 '>
                {productsItems
                  .sort(() => 0.5 - Math.random())
                  .map((item, i) => (
                    <div
                      key={i}
                      className='max-h-80  md:mb-1 pb-2   text-center sm:w-48 md:w-60  '>
                      <div className='hover:shadow-lg relative  select-none cursor-pointer overflow-hidden hover:opacity-90 duration-300 dark:bg-gray-700  bg-gray-300 pb-3 text-center justify-center  rounded-[0.5rem] mt-6'>
                        {item.offerPricePercentage == null ? (
                          ""
                        ) : (
                          <div className='absolute top-0 z-60 right-0 w-12 h-6 text-white bg-red-600'>
                            {item.offerPricePercentage}
                          </div>
                        )}
                        <Image
                          className='h-80   overflow-hidden hover:scale-110 hover:rounded-[0.5rem] active:rounded-[0.5rem]   absolute duration-500 rounded-t-[0.5rem] w-48 md:w-60  bg-gary-300'
                          src={item.prodImg}
                          alt='product'
                          height='282'
                          width='282'
                          placeholder='blur'
                          blurDataURL='data:...'
                        />{" "}
                        <div className='flex gap-4  font-bold justify-center '>
                          <h1 className='dark:text-gray-400 font-serif'>
                            {item.prodName.length > 12
                              ? "..." + item.prodName.substr(0, 13)
                              : item.prodName}
                          </h1>
                          <h1 className=' flex dark:text-gray-200 font-bold'>
                            {item.price}
                            <h1 className='opacity-80 text-xs pt-1 px-1'>
                              ج.م
                            </h1>
                          </h1>
                        </div>
                        <button className='w-28 flex mx-auto justify-center font-bold active:scale-105 duration-300 text-gray-200 rounded-sm mt-1 bg-red-500'>
                          <h1 className='px-1 pb-1 font-extrabold'> + </h1>
                          <h1>اضافة للسلة</h1>
                        </button>
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

export default MainForShop;
