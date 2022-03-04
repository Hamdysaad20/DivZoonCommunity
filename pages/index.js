import Main from "../components/Main";
import NavBar from "../components/nav/NavBar";
import NavNavbarMobol from "../components/nav/NavNavbarMobol";
import NavnonavsBar from "../components/nav/NavnonavsBar";
export default function Home() {
  return (
    <div className='bg-gray-100 '>
      <NavBar
        className='sticky top-0 overflow-hidden'
        home='border-b-4 border-red-500'
      />
      <NavnonavsBar />
      <NavNavbarMobol
        className='sticky top-0 overflow-hidden'
        home='border-b-4 border-red-500'
      />
      <Main className='blur-xl ' />
    </div>
  );
}
