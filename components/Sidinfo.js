import  Image  from 'next/image';
import AdArea from './AdArea';
function sidinfo(props) {

    return (
        <div className=" mt-4 bg-gray-200 ">
           
            <div className=" 3xl:ml-96  2xl:ml-44 2.5xl:ml-44 justify-center text-center  xl:ml-32 lg:ml-32 lg:mr-4 md:ml-32 md:mt-4 h-[350px] max-w-[200px] xl:mr-3 bg-gray-100    rounded-md  overflow-hidden  shadow-sm pb-2">
       
       <div className=" w-full  h-16">
       <Image className=""  height="70" width="200" src={props.imgUrlCover}/>

       </div>
      
       <div className="    z-50 mt-[-26px]"> 
       <Image className=" rounded-full " height="70" width="70" src={props.imgUrl}/>
       </div>
       <div className="text-center bg-gray-100 w-full h-full mt-[-30px]">
       <h1 className="mt-9 duration-500 hover:underline hover:underline-offset-4 font-medium text-sm  z-50">{props.UserName}</h1>
       <h1 className="mt-1 text-gray-500 font-mono text-xs  z-50">{props.UserBio}</h1>
       <div className="mt-2 h-20 grid grid-cols-2  border-t-2 border-b-2 z-50">
       <div className="font-thin text-sm"><span>{props.arcRead}</span> مقالة </div><div className="font-thin text-sm ">مقالات قرأتها</div>
           <div className="font-thin text-sm"><span>{props.arcWrote}</span> مقالة  </div><div className="font-thin text-sm ">مقالات كتبتها </div>
           <div className="font-thin text-sm"><span className="overflow-hidden">{props.arcViews}</span> مشاهدة  </div> <div className="font-thin text-sm ">المشاهدات</div>
       </div>
       <div>
           <button 
           className="bg-red-500 active:ring-offset-4 active:ring ring-pink-800 text-white px-14 py-2 mt-7 text-sm md:text-lg duration-200 rounded-md font-medium  hover:bg-gray-800"
           
           >
               انشر
           </button>
       </div>
       </div>
      
         </div>  
     
        </div>
    )
}

export default sidinfo
