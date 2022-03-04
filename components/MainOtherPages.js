import Sidenav from "./nav/Sidenav"
import VideoPostMain from "./videoscomponents/VideoPostMain";

function MainOtherPages() {
    return (
        <div className='fullscreen mx-auto justify-center text-center '>
        <div className=' lg:max-w-9xl text-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
          <div className=' hidden lg:block  text-center  overflow-hidden h-screen'>ddd</div>
  
          <div className=' lg:col-span-2 col-span-2 scroll-m-0 overflow-scroll text-white px-2 h-screen '>
            <div className=''>

              <VideoPostMain
                UserName='حمدي سعد'
                PostDate='2'
                PostTitle='بلتبمنلتبيملتمينتيبمكت متبيلتم منتب لتيبنملابكمل نمات نا بعلبعلهخب'
              />
            </div>
          </div>
          <div className=' mt-16 sm:block hidden top-0   h-screen overflow-hidden'>
            <Sidenav className=' h-screen top-2' />
          </div>
        </div>
      </div>
    )
}

export default MainOtherPages
