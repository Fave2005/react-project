import React from 'react'
import "./header.css"
import { Link } from "react-router-dom";

function header() {
  return (
   <header>
   {/* navigation section */}
 <div>
   <img className="logo" src="./images/doc3.jpg" alt="" />
 </div>
 <nav className="navbar">
   <ul>
       <li>home</li>
       <li>about</li>
       <li>skills</li>
       <li>experience</li>
       <li>testimonials</li>
       {/* <li>
        <Link
         to="anotherpage">
          this is Anotherpage
         </Link>
       </li> */}
   </ul>
     {/* <button className="bnt">Documents</button> */}
 </nav>
</header>
  )
}

export default header

