import MainOtherPages from "../components/MainOtherPages";
import NavBar from "../components/nav/NavBar";
import NavNavbarMobol from "../components/nav/NavNavbarMobol";
import NavnonavsBar from "../components/nav/NavnonavsBar";
import MainDivzoonHeader from "../components/MainDivzoonHeader";

function video() {
  return (
    <div className='bg-gray-100'>
    <MainDivzoonHeader/>

      <NavBar
        className='sticky top-0 overflow-hidden'
        video='border-b-4 border-red-500'
      />
      <NavnonavsBar />
      <NavNavbarMobol
        className='sticky top-0 overflow-hidden'
        video='border-b-4 border-red-500'
      />
      <MainOtherPages />
    </div>
  );
}

export default video;
