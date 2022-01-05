import Link from "next/link";
import { useState } from "react";
function NavNavbarMobol(props) {
    const [showMe, setShowMe] = useState(false);

    function toggle(thz){
        setShowMe(!showMe);

      }
 
 
      

      return (
   
 <div>
          <header className="  block sm:hidden mt-[-4px] overflow-hidden lg:max-w-9xl sticky top-0 z-50   bg-white shadow-sm pt-2">

<div className=" mx-3 gap-4 mx-1 md:mx-15 xl:mx-16 grid md:outline-hidden grid-cols-5    text-center">
<Link href="/"passHref>
<div  className={props.home}>
<div  className=" py-2 ease-out  transition  duration-200 hover:bg-gray-100 rounded-lg  ">
<svg className="h-6 pt-1 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/></svg>
</div>
</div>
</Link>
<Link href="video"passHref>
<div className={props.video}>
<div className=" py-2 transition  duration-200 hover:bg-gray-100 rounded-lg  ">
<svg className="h-6 pt-1 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M20.494,7.968l-9.54-7A5,5,0,0,0,3,5V19a5,5,0,0,0,7.957,4.031l9.54-7a5,5,0,0,0,0-8.064Zm-1.184,6.45-9.54,7A3,3,0,0,1,5,19V5A2.948,2.948,0,0,1,6.641,2.328,3.018,3.018,0,0,1,8.006,2a2.97,2.97,0,0,1,1.764.589l9.54,7a3,3,0,0,1,0,4.836Z"/></svg>
</div>
</div>
</Link>
<Link href="shop"passHref>
<div className={props.shop}>

<div className=" py-2 transition  duration-200 hover:bg-gray-100 rounded-lg  ">
<svg className="h-6 pt-1 w-6 mx-auto"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 13.242V20h1v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242zm-2 .73a4.496 4.496 0 0 1-3.75-1.36A4.496 4.496 0 0 1 12 14.001a4.496 4.496 0 0 1-3.25-1.387A4.496 4.496 0 0 1 5 13.973V20h14v-6.027zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z"/></svg>
</div>


</div></Link>

<Link href="groups" passHref >
<div className={props.group}>
<div  className=" py-2 transition  duration-200 hover:bg-gray-100 rounded-lg  ">
<svg className="h-6 pt-1 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.55 11.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5zm.45 8.248V16.4c0-.488.144-.937.404-1.338a6.473 6.473 0 0 0-5.033 1.417A8.012 8.012 0 0 0 10 19.749zM4.453 14.66A8.462 8.462 0 0 1 9.5 13c1.043 0 2.043.188 2.967.532.878-.343 1.925-.532 3.033-.532 1.66 0 3.185.424 4.206 1.156a8 8 0 1 0-15.253.504zm14.426 1.426C18.486 15.553 17.171 15 15.5 15c-2.006 0-3.5.797-3.5 1.4V20a7.996 7.996 0 0 0 6.88-3.914zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.5-9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg></div></div>
</Link>
<div onClick={toggle} className={props.toggle}>
<div  className=" py-2 ease-out  transition  duration-200 hover:bg-gray-100 rounded-lg  ">
<svg className="h-6 pt-1 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg></div>
</div>

</div>
</header>
<div>

<div  id="myDivToggle"  
      style={{
        display: showMe?"block":"none",
        transition:"ease-in"
      }} 
      className=" mr-3 max-w-[500px]"> 
           
           <div className="flex flex-cols-2 md:mr-16 lg:mr-32 xl:mr-20 2xl:mr-44 text-right justify-end  p-2  rounded-md  hover:bg-gray-100 duration-300">
           <div className=" mr-2 text-lg font-semibold"> هات قهوتك</div>  
            <div className="  right-0 " >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 13V5H6v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2zM5 3h15a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1zm13 2v3h2V5h-2zM2 19h18v2H2v-2z"/></svg>

            </div> 
           </div>


           <div className="flex flex-cols-2  md:mr-16 lg:mr-32 xl:mr-20 2xl:mr-44  p-2 text-right justify-end  rounded-md  hover:bg-gray-100 duration-300">
           <div className="text-left mr-2 text-lg font-semibold">المقالات</div>  
            <div className="   " >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM11 5H4v14h7V5zm2 0v14h7V5h-7zm1 2h5v2h-5V7zm0 3h5v2h-5v-2z"/></svg>
            </div> 
           
           </div>



           <div className="flex flex-cols-2  md:mr-16 lg:mr-32 xl:mr-20 2xl:mr-44  p-2 text-right justify-end  rounded-md  hover:bg-gray-100 duration-300">
           <div className="text-left mr-2 text-lg font-semibold">الكورسات</div>  
            <div className="   " >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 0 1 1.415 1.415l-1.829 1.827L18.5 6A3.5 3.5 0 0 1 22 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-8A3.5 3.5 0 0 1 5.5 6h2.085L5.757 4.171a1 1 0 0 1 1.415-1.415zM18.5 8h-13a1.5 1.5 0 0 0-1.493 1.356L4 9.5v8a1.5 1.5 0 0 0 1.356 1.493L5.5 19h13a1.5 1.5 0 0 0 1.493-1.356L20 17.5v-8A1.5 1.5 0 0 0 18.5 8zM8 11a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"/></svg>
            </div> 
           
           </div>



           <div className="flex flex-cols-2  md:mr-16 lg:mr-32 xl:mr-20 2xl:mr-44  p-2   text-right justify-end rounded-md  hover:bg-gray-100 duration-300">
           <div className="text-left mr-2 text-lg font-semibold">المتجر</div>  
            <div className="   " >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM9 6v2a3 3 0 0 0 6 0V6h2v2A5 5 0 0 1 7 8V6h2z"/></svg>
            </div> 
           
           </div>



           <div className="flex flex-cols-2 md:mr-16 lg:mr-32 xl:mr-20 2xl:mr-44  p-2   text-right justify-end rounded-md  hover:bg-gray-100 duration-300">
           <div className="text-left mr-2 text-lg font-semibold">المحفوظات</div>  
            <div className="   " >
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"/></svg>
            </div> 
           
           </div>
           <div className="flex flex-cols-2 md:mr-16 lg:mr-32 xl:mr-20 2xl:mr-44  p-2   text-right justify-end rounded-md  hover:bg-gray-100 duration-300">
           <div className="text-left mr-2 text-lg font-semibold">ادعمنا</div>  
            <div className="   " >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"/></svg>             </div> 
           
           </div>
       </div>
</div>
 </div>
 )
}

export default NavNavbarMobol
