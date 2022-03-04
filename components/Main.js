import BlogcompMain from "./bloglayout/BlogcompMain";
import BlogPost from "./bloglayout/BlogPost";
import Sidenav from "./nav/Sidenav";
import VideoPost from "./videoscomponents/VideoPost";

function Main() {
  return (
    <div className='fullscreen mx-auto  justify-center text-center '>
      <div className='  lg:max-w-9xl text-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
        <div className='  hidden lg:block  text-center  overflow-hidden h-screen'>ddd</div>

        <div className='  lg:col-span-2 col-span-2 scroll-m-0 overflow-scroll text-white px-2 h-screen '>
          <div className=''>
            <BlogcompMain
              userImage='/2.jpg'
              UserName='حمدي سعد'
              PostDate='2'
              PostTitle=' متبيلتم منتب  نمات  بعلبعلهخب'
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
        <div className=' mt-16 sm:block hidden   h-screen overflow-hidden'>
          <Sidenav className=' h-screen top-2' />
        </div>
      </div>
    </div>
  );
}

export default Main;
