import BlogcompMain from "./BlogcompMain";
import BlogPost from "./BlogPost";
import Sidenav from "./Sidenav";
import VideoPost from "./VideoPost";

function Main() {
  return (
    <div className='fullscreen mx-auto justify-center text-center '>
      <div className=' lg:max-w-9xl text-center grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4'>
        <div className='  text-center hidden lg:inline-block overflow-hidden h-screen'></div>

        <div className=' col-span-2 scroll-m-0 overflow-scroll text-white px-2 h-screen '>
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
        <div className=' mt-4  hidden  sm:inline-block  h-screen overflow-hidden'>
          <Sidenav className=' h-screen top-2' />
        </div>
      </div>
    </div>
  );
}

export default Main;
