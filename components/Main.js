import Sidenav from "./sidenav"
import Sidinfo from "./Sidinfo"

function Main() {
    return (
        <div className=" lg:max-w-9xl text-center grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
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

            <div className=" col-span-2 text-white  bg-black h-screen overflow-hidden">center</div>
            <div className=" mt-4  hidden  md:inline-block bg-gray-200 h-screen overflow-hidden">

                <Sidenav className=" h-screen top-2"/>
            
            </div>
        </div>
    )
}

export default Main
