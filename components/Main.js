import AnnoumceHome from "./adslayout/AnnoumceHome";
import BlogPost from "./bloglayout/BlogPost";
import PostsNews from "./nav/PostsNews";
import Sidenav from "./nav/Sidenav";
import Loading from "./assets/loading";

function Main() {
  var datafeatching = true;
  return (
    <div className='fullscreen overflow-y-scroll scroll-mb-16  mx-auto  justify-center text-center '>
      <div className='  lg:max-w-9xl h-screen  text-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
        <div className=' mt-16 hidden lg:block h-screen   text-center  overflow-hidden '>
          <PostsNews />
        </div>

        <div className='  lg:col-span-2  mx-4 sm:mx-0 col-span-2 scroll-m-4 overflow-scroll text-white px-2 h-full '>
          <div className='mt-3  sm:mt-16'>
            <AnnoumceHome />
          </div>
          <div className='h-screen   mt-16'>
            <BlogPost
              userImage='/ad300x250.png'
              UserName='حمدي سعد'
              PostDate='2'
              PostTitle='بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب'
            />
            <div className='py-6 sm:py-6'></div>
            <BlogPost
              userImage='/ad300x250.png'
              UserName='حمدي سعد'
              PostDate='2'
              PostTitle='بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب'
            />
            <div className='py-6 sm:py-6'></div>
            <BlogPost
              userImage='/ad300x250.png'
              UserName='حمدي سعد'
              PostDate='2'
              PostTitle='بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب'
            />{" "}
            <div className='py-6 sm:py-6'></div>
            <BlogPost
              userImage='/ad300x250.png'
              UserName='حمدي سعد'
              PostDate='2'
              PostTitle='بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب'
            />{" "}
            <div className='py-6 sm:py-6'></div>
            <BlogPost
              userImage='/ad300x250.png'
              UserName='حمدي سعد'
              PostDate='2'
              PostTitle='بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب'
            />{" "}
            <div className='py-6 sm:py-6'></div>
            <BlogPost
              userImage='/ad300x250.png'
              UserName='حمدي سعد'
              PostDate='2'
              PostTitle='بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب'
            />{" "}
            <div className='py-6 sm:py-6'></div>
            {datafeatching == false ? "" : <Loading />}
            <div className='py-6 sm:py-6'></div>
          </div>
        </div>
        <div className='sidehidmm mt-16 sm:block hidden   h-screen overflow-hidden'>
          <Sidenav className=' h-screen top-2' />
        </div>
      </div>
    </div>
  );
}

export default Main;
