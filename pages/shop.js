import NavBar from "../components/NavBar"
import NavNavbarMobol from "../components/NavNavbarMobol"
import NavnonavsBar from "../components/NavnonavsBar"

function videos() {
    return (
        <div className="bg-gray-200">
        <NavBar
        className="sticky top-0 overflow-hidden" 
        shop="border-b-4 border-red-500"
        />
       <NavnonavsBar />
       <NavNavbarMobol
             className="sticky top-0 overflow-hidden" 
             shop="border-b-4 border-red-500"  
       />

      </div>
    )
}

export default videos
