import Image from "next/image"

function VideoPostMain(props) {
    return (
        <div>
                  <div className=" shadow-md bg-gray-300 h-[500px] lg:h-[700px] mt-12 z-10  relative   mx-auto max-w-4xl rounded-md ">
 <div className=" mx-auto  mb-0 rounded-t-md ">
<video  autoPlay="true" src="https://res.cloudinary.com/divzoon2022/video/upload/v1641347285/samples/elephants.mp4"/>
           </div>
        <div className="bg-gray-50   w-full mt-0  rounded-b-md bottom-0  h-[250px] ">
          
            <div className="h-[60px]  px-4 md:px-8   flex flex-cols-2  justify-end">
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


</div>
<hr className="mx-5 mt-1  font-semibold"/>
<div className="h-full mb-0 text-center bg-gray-100 mt-2 active:scale-105 rounded-md duration-300">
<h1 className="noselect   z-50 left-0 right-0 absolute  sm:font-bold    rounded-md text-gray-700">إعلانات جوجل</h1>
</div>
            </div>
        </div>
 
 
    </div> 
        </div>
    )
}

export default VideoPostMain
