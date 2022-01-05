import NavBar from "../components/NavBar"
import NavNavbarMobol from "../components/NavNavbarMobol"
import NavnonavsBar from "../components/NavnonavsBar"
function groups() {
    return (
        <div>
                    <div className="bg-gray-200">
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
