import BlogcompMain from "./BlogcompMain"
import BlogPost from "./BlogPost"
import Sidenav from "./Sidenav"
import Sidinfo from "./Sidinfo"
import VideoPost from "./VideoPost"

function Main() {
    return (
     <div className="fullscreen mx-auto justify-center text-center ">
            <div className=" lg:max-w-9xl text-center grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
          
          <div className=" bg-gray-200 text-center hidden lg:inline-block overflow-hidden h-screen">
                <Sidinfo 
                imgUrl="/2.jpg"
                imgUrlCover="/ad300x250.png" 
                UserName="Hamdy Saad"
                UserBio="Frontend Web Developer"
                arcRead="0"
                arcWrote="0"
                arcViews="0"
                className=" h-screen top-2"
                />
           </div>

           <div  className=" col-span-2 scroll-m-0 overflow-scroll text-white px-2 h-screen ">

              <div className="">
              <BlogcompMain 
               userImage="/2.jpg"
               UserName="حمدي سعد"
               PostDate="2"
               PostTitle=" متبيلتم منتب  نمات  بعلبعلهخب"
               />
               <BlogPost
                               userImage="/ad300x250.png"
                               UserName="حمدي سعد"
                               PostDate="2"
                               PostTitle="بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب"
               />
               <VideoPost
                           UserName="حمدي سعد"
                           PostDate="2"
                           PostTitle="بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب"
               />
              </div>
           </div>
           <div className=" mt-4  hidden  sm:inline-block bg-gray-200 h-screen overflow-hidden">

               <Sidenav 
              
              className=" h-screen top-2"
               
               />
           
           </div>
       </div>
     </div>
    )
}

export default Main
