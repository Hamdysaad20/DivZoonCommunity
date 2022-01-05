
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import NavNavbarMobol from "../components/NavNavbarMobol";
import NavnonavsBar from "../components/NavnonavsBar";
export default function Home() {
 
  return (
    <div className="bg-gray-200">
    
      <NavBar 
      className="sticky top-0 overflow-hidden" 
      home="border-b-4 border-red-500"
      />
     <NavnonavsBar />
     <NavNavbarMobol
           className="sticky top-0 overflow-hidden" 
           home="border-b-4 border-red-500"  
     />
      <Main className=""/>
    </div>
  )
}
