import Sidenav from "./Sidenav"
import VideoPostMain from "./VideoPostMain";

function MainOtherPages() {
    return (
        <div className="fullscreen mx-auto justify-center text-center ">
        <div className="   lg:max-w-9xl  grid grid-cols-2  sm:grid-cols-3 xl:grid-cols-3">


         <div  className=" col-span-2 scroll-m-0   overflow-scroll text-white px-2 h-screen ">

            <div className="">
<VideoPostMain
                        UserName="حمدي سعد"
                        PostDate="2"
                        PostTitle="بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب"
/>
            </div>
         </div>
         <div className=" mt-4  hidden lg:mr-2 md:mr-[-2px]  sm:inline-block max-w-sm bg-gray-200 h-screen overflow-hidden">

             <Sidenav className=" h-screen top-2"/>
         
         </div>
     </div></div>
    )
}

export default MainOtherPages
