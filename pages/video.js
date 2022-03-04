import MainOtherPages from "../components/MainOtherPages";
import NavBar from "../components/NavBar";
import NavNavbarMobol from "../components/NavNavbarMobol";
import NavnonavsBar from "../components/NavnonavsBar";

function video() {
  return (
    <div className='bg-gray-200'>
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
