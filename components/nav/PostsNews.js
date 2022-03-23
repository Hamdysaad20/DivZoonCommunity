import Image from "next/image";
import React from "react";

function PostsNews(props) {
  return (
    <div className='p-2 dark:text-gray-300'>
      <div className='w-full relative   overflow-hidden  h-60 rounded-t-lg  mx-2'>
        {" "}
        <Image
          className='hover:scale-110  duration-500 w-full bg-gary-300'
          src='/w.png'
          alt='product'
          height='282'
          width='282'
          layout='responsive'
          placeholder='blur'
          blurDataURL='data:...'
        />
      </div>
      <div className='w-full h-20  bg-[#16222e]  my-[1px] mx-2'>reg-posts</div>
      <div className='w-full h-16  bg-[#16222e]  my-[1px] mx-2'>reg-posts</div>
      <div className='w-full h-16  bg-[#16222e] my-[1px] mx-2'>reg-posts</div>
      <div className='w-full h-16  bg-[#16222e]  my-[1px] mx-2'>reg-posts</div>
      <div className='w-full h-16  bg-[#16222e] my-[1px] mx-2'>reg-posts</div>

      <div className='w-full h-16  bg-[#16222e] my-[1px] mx-2'>reg-posts</div>
      <div className='w-full pb-3 rounded-b-lg bg-[#16222e] my-[1px] mx-2'>
        <button
          style={{
            fontFamily: "BalooBhaijaan2",
            fontWeight: "600",
            textShadow:
              "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
          }}
          className='active:bg-slate-800 hover:bg-[#c7123a]  duration-200   bg-[#ed0e3f] my-2 w-[80%] h-12 rounded-md'>
          اكتب مقالة
        </button>
        <button
          style={{
            fontFamily: "BalooBhaijaan2",
            fontWeight: "600",
            textShadow:
              "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
          }}
          className='bg-slate-700 active:bg-slate-800 hover:bg-gray-800 duration-200 w-[80%] h-12 rounded-md'>
          كل الاخبار
        </button>
      </div>
    </div>
  );
}

export default PostsNews;
