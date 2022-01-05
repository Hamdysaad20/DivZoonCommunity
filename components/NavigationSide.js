import Link from "next/link"

function navigationSide() {
    return (
        <div className="grid grid-rows-3 max-w-[500px]"> 
          
           <Link href="/"passHref >
            <div className="cursor-pointer  flex flex-cols-2 md:mr-12 lg:mr-12 xl:mr-12 2xl:mr-20 text-right justify-end  p-2  rounded-md  hover:bg-gray-100 duration-300">
            
            <div className=" mr-2 text-lg font-semibold"> هات قهوتك</div>  
             <div className="  right-0 " >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 13V5H6v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2zM5 3h15a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1zm13 2v3h2V5h-2zM2 19h18v2H2v-2z"/></svg>

             </div> 
               </div>
        </Link> 
           
           
           
            <Link href="/"passHref >
            <div className="cursor-pointer  flex flex-cols-2  md:mr-12 lg:mr-12 xl:mr-12 2xl:mr-20  p-2 text-right justify-end  rounded-md  hover:bg-gray-100 duration-300">
            <div className="text-left mr-2 text-lg font-semibold">المقالات</div>  
             <div className="   " >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM11 5H4v14h7V5zm2 0v14h7V5h-7zm1 2h5v2h-5V7zm0 3h5v2h-5v-2z"/></svg>
             </div> 
            
            </div>
            </Link>

           
           
            <Link href="/"passHref >
            <div className="cursor-pointer  flex flex-cols-2  md:mr-12 lg:mr-12 xl:mr-12 2xl:mr-20  p-2 text-right justify-end  rounded-md  hover:bg-gray-100 duration-300">
            <div className="text-left mr-2 text-lg font-semibold">الكورسات</div>  
             <div className="   " >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 0 1 1.415 1.415l-1.829 1.827L18.5 6A3.5 3.5 0 0 1 22 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-8A3.5 3.5 0 0 1 5.5 6h2.085L5.757 4.171a1 1 0 0 1 1.415-1.415zM18.5 8h-13a1.5 1.5 0 0 0-1.493 1.356L4 9.5v8a1.5 1.5 0 0 0 1.356 1.493L5.5 19h13a1.5 1.5 0 0 0 1.493-1.356L20 17.5v-8A1.5 1.5 0 0 0 18.5 8zM8 11a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"/></svg>
             </div> 
            
            </div>
            </Link>

           
            <Link href="/"passHref >
            <div className="cursor-pointer  flex flex-cols-2 md:mr-12 lg:mr-12 xl:mr-12 2xl:mr-20  p-2   text-right justify-end rounded-md  hover:bg-gray-100 duration-300">
            <div className="text-left mr-2 text-lg font-semibold">المتجر</div>  
             <div className="   " >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM9 6v2a3 3 0 0 0 6 0V6h2v2A5 5 0 0 1 7 8V6h2z"/></svg>
             </div> 
            
            </div>
            </Link>

          
            <Link href="/"passHref >
            <div className="cursor-pointer  flex flex-cols-2 md:mr-12 lg:mr-12 xl:mr-12 2xl:mr-20  p-2   text-right justify-end rounded-md  hover:bg-gray-100 duration-300">
            <div className="text-left mr-2 text-lg font-semibold">المحفوظات</div>  
             <div className="   " >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"/></svg>
             </div> 
            </div>
            </Link>
          
          
            <Link href="/"passHref >
            <div className="cursor-pointer flex flex-cols-2 md:mr-12 lg:mr-12 xl:mr-12 2xl:mr-20  p-2   text-right justify-end rounded-md  hover:bg-gray-100 duration-300">
            <div className="text-left mr-2 text-lg font-semibold">ادعمنا</div>  
             <div className="   " >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"/></svg>             </div> 
            
            </div>
            </Link>

            
        </div>
    )
}

export default navigationSide
