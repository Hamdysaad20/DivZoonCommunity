import NavBar from "../components/nav/NavBar"
import NavNavbarMobol from "../components/nav/NavNavbarMobol"
import NavnonavsBar from "../components/nav/NavnonavsBar"
import MainDivzoonHeader from "../components/MainDivzoonHeader";

function groups() {
    return (
        <div>
           <div className="bg-gray-100">
       <MainDivzoonHeader/>
        <NavBar
        className="sticky top-0 overflow-hidden" 
        group="border-b-4 border-red-500"
        />
       <NavnonavsBar />
       <NavNavbarMobol
             className="sticky top-0 overflow-hidden" 
             group="border-b-4 border-red-500"  
       />

      </div>
        </div>
    )
}

export default groups
