import React from "react";
import AnnoumceShop from "./adslayout/AnnoumceShop";
import Sidenav from "./nav/Sidenav";
import Image from "next/image";
function MainForShop(props) {
  const productsItems = [
    {
      prodName: "قميص بايثون حجم متوسط",
      prodImg: "/products/productimg1.jpg",
    },
    {
      prodName: "قميص  حجم متوسط css",
      prodImg: "/products/productimg2.jpg",
    },
    {
      prodName: "قميص بايثون حجم متوسط",
      prodImg: "/products/productimg3.jpg",
    },
    {
      prodName: "قميص بايثون حجم متوسط",
      prodImg: "/products/productimg4.jpg",
    },
    {
      prodName: "قميص بايثون حجم متوسط",
      prodImg: "/products/productimg1.jpg",
    },
    {
      prodName: "قميص  حجم متوسط css",
      prodImg: "/products/productimg2.jpg",
    },
    {
      prodName: "قميص بايثون حجم متوسط",
      prodImg: "/products/productimg3.jpg",
    },
    {
      prodName: "قميص بايثون حجم متوسط",
      prodImg: "/products/productimg4.jpg",
    },
    {
      prodName: "قميص بايثون حجم متوسط",
      prodImg: "/products/productimg1.jpg",
    },
    {
      prodName: "قميص  حجم متوسط css",
      prodImg: "/products/productimg2.jpg",
    },
    {
      prodName: "قميص بايثون حجم متوسط",
      prodImg: "/products/productimg3.jpg",
    },
    {
      prodName: "قميص بايثون حجم متوسط",
      prodImg: "/products/productimg4.jpg",
    },
  ];

  return (
    <div className='fullscreen overflow-y-scroll  mx-auto  justify-center text-center '>
      <div className='  lg:max-w-9xl h-screen  text-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
        <div className='  lg:col-span-3  mx-4 sm:mx-0 col-span-2 scroll-m-4 overflow-scroll text-white px-2 h-full '>
          <div className='mt-3  sm:mt-16'>
            <AnnoumceShop />
          </div>
          <div className='h-screen  mt-16'>
            {/* here should be the items */}
            <div className='text-gray-900 pl-4 justify-center gap-3 grid lg:grid-cols-3 grid-cols-2 md:grid-cols-2  xl:grid-cols-4  dark:bg-[#16222e] bg-gray-200 rounded-[1rem] md:rounded-[1.5rem]'>
              {productsItems
                .sort((a, b) => 0.5 - Math.random())
                .map((item, i) => (
                  <div
                    key={i}
                    className='h-80 mb-4 pb-2 relative rounded-[2.5rem] w-48 md:w-60 md:rounded-[2rem] '>
                    <div className=' pt-6'>
                      <Image
                        className='h-80 hover:shadow-md overflow-hidden hover:scale-110   absolute duration-500 rounded-[2.5rem] w-48 md:w-60 md:rounded-[2rem] bg-red-500'
                        src={item.prodImg}
                        alt='product'
                        height='282'
                        width='242'
                      />{" "}
                      <div className='flex gap-4  font-bold justify-center '>
                        <h1 className='dark:text-gray-400 font-serif'>
                          {item.prodName.length > 12
                            ? ".." + item.prodName.substr(0, 15)
                            : item.prodName}
                        </h1>
                        <h1 className='dark:text-gray-200 font-bold'> 12 $</h1>
                      </div>
                    </div>
                  </div>
                ))}
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
