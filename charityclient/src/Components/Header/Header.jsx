import React from 'react'
 import './Header.css';
import Logoimg from '../../Asserts/header logo.png'
 import Buttons from '../Buttons/Buttons';
 import { Link } from 'react-router-dom';
 import { useState } from 'react';

export default function Header() {

   const [toggle,setToggle]= useState (false)
    function closemenu(){
       setToggle(false)
      }
  return (
     <header>
         <div className="logo">
           <Link to={"i"}> <img src={Logoimg} alt="logo" /> </Link>
           <div className="toggle" onClick={()=>{setToggle(!toggle)}}><i class="bi bi-list"></i>
           </div>
         </div>
         <div className="menus">
           <ul>
           <li><Link to="/" onClick={closemenu}>Home</Link></li>
           <li><Link to={"/about"}>About</Link></li>
           <li><Link  to={"/charity"}>Charity</Link></li>
           <li><Link to={"/contact"}>Contact</Link></li>
           </ul>

         </div>
         <div className="donatebtn">
         <Buttons Btntitle={"Donate Now "}/>
         </div>
       </header>
  )
}
























// import React, { Component } from 'react';
// import './Header.css';
// import Logoimg from '../../Asserts/header logo.png'
// import Buttons from '../Buttons/Buttons';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// export default class Header extends Component {
//   render() {
//     const [toggle,setToggle]= useState (false)
//     function closemenu(){
//       setToggle(false)
//     }
//     return (
//      
//     )
//   }
// };
