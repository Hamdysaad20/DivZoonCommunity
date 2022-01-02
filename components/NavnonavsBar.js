function NavnonavsBar(props) {

    return (
        <div className="mt-[-52px] pb-1  block sm:hidden">
                   <header className="  text-center overflow-hidden lg:max-w-9xl sticky top-0 z-50 grid grid-cols-2  bg-white shadow-sm pt-2">
           
           <div style={{color: 'red', fontWeight: 800}}  className=" text-left md:text-center ml-3 sm:ml-7 text-2xl md:text-3xl py-auto md:pt-0 pt-1">
               <div className="lg:pb-1">
                   Divzoon
               </div>
           </div>        
           <div className=" pb-1 text-right mr-6 ">
               <button style={{color:"#ed0e3f"}} className=" active:ring-offset-1 active:ring ring-pink-800 py-2 px-3 text-sm md:text-lg duration-200 rounded-md font-medium  hover:bg-gray-100">تسجيل الدخول</button>
               <button style={{color:"white",backgroundColor:"#ed0e3f"}} className="active:ring-offset-4 active:ring ring-pink-800 hidden md:inline-block hover:bg-red-800 duration-200 py-2 px-3 font-medium ml-2 rounded-md">إنشاء حساب</button>
           </div>

       </header>
        </div>
    )
}

export default NavnonavsBar
