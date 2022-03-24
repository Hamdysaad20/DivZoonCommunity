import Image from "next/image";
import React from "react";

function PostsNews(props) {
  return (
    <div className='p-2 dark:text-gray-300 max-w-[350px]'>
      <div className='w-full relative dark:bg-[#16222e] bg-white overflow-hidden  h-40 rounded-lg  mx-2'>
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
      <div className='relative w-full h-20  overflow-hidden bg-white dark:bg-[#16222e]  my-[1px] mx-2'>
        <div className='absolute overflow-hidden top-[30%] right-4 '>
          <h1
            style={{
              fontFamily: "BalooBhaijaan2",
              fontWeight: "700",
              textShadow:
                "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              //67 char
            }}
            className='text-xl  text-right '>
            عنوان المقالة يوجد هنا والمساحة كافية لسطرين عنوان المقالة يوجد هنا
            والمساحة كافية لسطرين
          </h1>{" "}
        </div>
      </div>
      <div className='w-full overflow-hidden relative h-16 bg-white  dark:bg-[#16222e]  my-[1px] mx-2'>
        <div className='absolute overflow-hidden top-[15%] right-4 '>
          <h1
            style={{
              fontFamily: "BalooBhaijaan2",
              fontWeight: "500",
              textShadow:
                "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              //67 char
            }}
            className='text-lg text-right dark:text-gray-400 '>
            عنوان المقالة يوجد هنا والمساحة كافية لسطرين عنوان المقالة يوجد هنا
            والمساحة كافية لسطرين
          </h1>{" "}
        </div>
      </div>
      <div className='w-full overflow-hidden relative h-16 bg-white dark:bg-[#16222e]  my-[1px] mx-2'>
        <div className='absolute overflow-hidden top-[15%] right-4 '>
          <h1
            style={{
              fontFamily: "BalooBhaijaan2",
              fontWeight: "500",
              textShadow:
                "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              //67 char
            }}
            className='text-lg text-right dark:text-gray-400 '>
            عنوان المقالة يوجد هنا والمساحة كافية لسطرين عنوان المقالة يوجد هنا
            والمساحة كافية لسطرين
          </h1>{" "}
        </div>
      </div>
      <div className='w-full overflow-hidden relative h-16 bg-white dark:bg-[#16222e]  my-[1px] mx-2'>
        <div className='absolute overflow-hidden top-[15%] right-4 '>
          <h1
            style={{
              fontFamily: "BalooBhaijaan2",
              fontWeight: "500",
              textShadow:
                "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              //67 char
            }}
            className='text-lg text-right dark:text-gray-400 '>
            عنوان المقالة يوجد هنا والمساحة كافية لسطرين عنوان المقالة يوجد هنا
            والمساحة كافية لسطرين
          </h1>{" "}
        </div>
      </div>
      <div className='w-full overflow-hidden relative h-16 bg-white  dark:bg-[#16222e]  my-[1px] mx-2'>
        <div className='absolute overflow-hidden top-[15%] right-4 '>
          <h1
            style={{
              fontFamily: "BalooBhaijaan2",
              fontWeight: "500",
              textShadow:
                "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              //67 char
            }}
            className='text-lg text-right dark:text-gray-400 '>
            عنوان المقالة يوجد هنا والمساحة كافية لسطرين عنوان المقالة يوجد هنا
            والمساحة كافية لسطرين
          </h1>{" "}
        </div>
      </div>
      <div className='w-full overflow-hidden relative h-16 bg-white  dark:bg-[#16222e]  my-[1px] mx-2'>
        <div className='absolute overflow-hidden top-[15%] right-4 '>
          <h1
            style={{
              fontFamily: "BalooBhaijaan2",
              fontWeight: "500",
              textShadow:
                "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              //67 char
            }}
            className='text-lg text-right   dark:text-gray-400 '>
            عنوان المقالة يوجد هنا والمساحة كافية لسطرين عنوان المقالة يوجد هنا
            والمساحة كافية لسطرين
          </h1>{" "}
        </div>
      </div>
      <div className='w-full pb-3 rounded-b-lg bg-white dark:bg-[#16222e] my-[1px] mx-2'>
        <button
          style={{
            fontFamily: "BalooBhaijaan2",
            fontWeight: "600",
            textShadow:
              "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
          }}
          className='active:bg-slate-800 hover:bg-[#c7123a] text-gray-200   duration-200   bg-[#ed0e3f] my-2 w-[80%] h-12 rounded-md'>
          اكتب مقالة
        </button>
        <button
          style={{
            fontFamily: "BalooBhaijaan2",
            fontWeight: "600",
            textShadow:
              "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
          }}
          className='dark:bg-slate-700 bg-slate-800 active:bg-slate-500 text-gray-200 hover:bg-gray-800 duration-200 w-[80%] h-12 rounded-md'>
          كل الاخبار
        </button>
      </div>
    </div>
  );
}

export default PostsNews;
