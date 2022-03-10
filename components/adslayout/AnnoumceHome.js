import React from 'react'
import Image from 'next/image'

function AnnoumceHome() {
    
 
    function AnnoumceHomevisability() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
 return (
<div     id="myDIV" className="h-48 -mb-8 rounded-lg w-full dark:bg-slate-900 bg-gray-600/20 relative ">
<div className="absolute right-3 top-2">
<Image onClick={AnnoumceHomevisability} className="hover:bg-gray-100 dark:hover:bg-slate-700 duration-300  rounded-full" src="/ico/xico.png" alt="x" width="20" height="20"/>
 </div> 


</div>
    )
}

export default AnnoumceHome