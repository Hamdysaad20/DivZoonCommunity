import Image from "next/image"

function VideoPostMain(props) {
    return (
        <div>
                  <div className=" shadow-md bg-gray-300 h-[500px] lg:h-[700px] mt-12 z-10  relative   mx-auto max-w-4xl rounded-md ">
 <div className=" mx-auto  mb-0 rounded-t-md ">
<video  autoPlay="true" src="https://res.cloudinary.com/divzoon2022/video/upload/v1641347285/samples/elephants.mp4"/>
           </div>
        <div className="bg-gray-50   w-full mt-0  rounded-b-md bottom-0  h-[250px] ">
          
            <div className="h-[60px]  px-4 md:px-8  text-red-400 flex flex-cols-2  justify-end">
            <div>
            <div className="font-medium text-gray-600 text-sm mr-1 pt-2">{props.UserName}</div>
            <div className="font-medium text-right mr-1 text-gray-800 opacity-60 text-xs  ">{props.PostDate}س</div>
</div>
<div className="h-10 mt-2 w-10"> 
<Image alt="UserImage" src="/2.jpg" height="80"  width="80"  className="noselect  rounded-lg"/>
</div>
            </div>
            <div className="h-[100px] ">
                
<div className="overflow-hidden text-right mx-3 lg:mr-12 text-clip text-gray-600 font-bold  decoration-gray-500  lg:text-2xl  duration-500 leading-relaxed md:text-2xl tracking-normal oldstyle-nums mr-9  text-xl">
{props.PostTitle}
</div>
<div className="grid grid-cols-5 ">
<div></div>
<div></div>
<div className=" col-span-3">
<div className="grid-cols-3 mt-1   grid">
<div className="flex mx-3 gap-2 justify-center pl-4  hover:bg-gray-200 rounded-md" >
<h1 className="noselect text-md text-gray-500 font-medium">شارك</h1> 
<svg className="h-8 md:p-1 p-2 w-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5V14zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.982 7.982 0 0 0-6.057 2.773A10.988 10.988 0 0 1 11 12z"/></svg>    </div>
<div className="flex mx-3 gap-2  justify-center pl-4  hover:bg-gray-200 rounded-md" >
<h1 className="noselect text-md text-gray-500 font-medium" >تعليق</h1> 
<svg className="h-8 md:p-1 p-2 w-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z"/></svg>    
</div>
<div className="flex mx-3 gap-2  justify-center pl-4  hover:bg-gray-200 rounded-md" >
<h1 className="noselect text-md text-gray-500 font-medium">وااو</h1> 
<svg  className="h-8 md:p-1 p-2 w-8 "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47-1.667 1.647-2.933 2.47-3.8 2.47 3.995-7 1.8-10-4.2-14 .5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23zm.71-17.765c3.241 2.75 3.257 4.887.753 9.274-.761 1.333.202 2.991 1.737 2.991.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71.424-.38.773-.717 1.118-1.086 1.23-1.318 2.114-2.78 2.566-4.462z"/></svg>

</div> </div>
</div>

</div>
<hr className="mx-5 mt-1  font-semibold"/>
<div className="h-full mb-0 text-center bg-gray-100 mt-2 hover:scale-105 rounded-md duration-300">
<h1 className="noselect   z-50 left-0 right-0 absolute  sm:font-bold    rounded-md text-gray-700">إعلانات جوجل</h1>
</div>
            </div>
        </div>
 
 
    </div> 
        </div>
    )
}

export default VideoPostMain
