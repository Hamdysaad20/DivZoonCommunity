import AnnoumceHome from "./adslayout/annoumceHome";
import BlogPost from "./bloglayout/BlogPost";
import Sidenav from "./nav/Sidenav";
import VideoPost from "./videoscomponents/VideoPost";





function Main() {
  return (
    <div className='fullscreen overflow-y-scroll  mx-auto  justify-center text-center '>

      <div className='  lg:max-w-9xl h-screen  text-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
        <div className='  hidden lg:block h-screen   text-center  overflow-hidden '>ddd</div>

        <div className='  lg:col-span-2  mx-4 sm:mx-0 col-span-2 scroll-m-4 overflow-scroll text-white px-2 h-full '>
        
        <div className='mt-16'>
        <AnnoumceHome/>
   </div>
          <div className='h-screen  mt-20'>
          <BlogPost
              userImage='/ad300x250.png'
              UserName='حمدي سعد'
              PostDate='2'
              PostTitle='بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب'
            />
            <VideoPost
              UserName='حمدي سعد'
              PostDate='2'
              PostTitle='بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب'
            />
                        <BlogPost
              userImage='/ad300x250.png'
              UserName='حمدي سعد'
              PostDate='2'
              PostTitle='بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب'
            />
            <VideoPost
              UserName='حمدي سعد'
              PostDate='2'
              PostTitle='بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب'
            />
            <BlogPost
              userImage='/ad300x250.png'
              UserName='حمدي سعد'
              PostDate='2'
              PostTitle='بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب'
            />
            <VideoPost
              UserName='حمدي سعد'
              PostDate='2'
              PostTitle='بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب'
            />
          </div>
        </div>
        <div  className='sidehidmm mt-16 sm:block hidden   h-screen overflow-hidden'>
          <Sidenav className=' h-screen top-2' />
        </div>
      </div>
    </div>
  );
}

export default Main;
