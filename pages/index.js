import Main from "../components/Main";
import NavBar from "../components/nav/NavBar";
import NavNavbarMobol from "../components/nav/NavNavbarMobol";
import NavnonavsBar from "../components/nav/NavnonavsBar";
import MainDivzoonHeader from "../components/MainDivzoonHeader";
export default function Home() {
  
 
  
  return (
    <div className='bg-gray-100  fixed w-full dark:bg-[#0d151d] h-full  '>
      <MainDivzoonHeader />
      <NavBar
        className='sticky    overflow-hidden'
        home='border-b-4 border-red-500'
        dark='true'
      />
      <NavnonavsBar dark='true' />
      <NavNavbarMobol
        className='sticky top-0 overflow-hidden'
        home='border-b-4 border-red-500'
        dark='true'
      />
      <Main className='blur-xl h-screen   ' />
    </div>
  );
 
}
