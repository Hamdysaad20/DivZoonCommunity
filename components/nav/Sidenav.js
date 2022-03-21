import NavigationSide from "./NavigationSide";
import AdArea from "../adslayout/AdArea";
import Footer from "../Footer";

function sidenav() {
  return (
    <div className='h-screen sm:w-56  md:w-60 w-auto  lg:w-64  xl:w-80 fixed top-22 overflow-hidden scroll-pb-9 overflow-y-auto  text-right'>
      <div className='mb-3'>
        <NavigationSide dark='true' />

        <AdArea dark='true' />
        <Footer dark='true' />
      </div>
    </div>
  );
}

export default sidenav;
