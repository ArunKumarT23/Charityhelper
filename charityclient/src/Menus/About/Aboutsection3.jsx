import React from 'react'
import './About.css';
import Aboutboxdesign from '../Home/Aboutboxdesign';

export default function Aboutsection3() {
  return (
    <>
    <div className="ourmissions">

        <h1>Our Mission</h1>
        <div className="aboutbox1">
        <Aboutboxdesign aicon={<i class="bi bi-globe-americas"></i>} atitle={"Achieving Change"} apara={"Grandis, albus decors etiam desiderium de noster, clemens vita."} />
        <Aboutboxdesign aicon={<i class="bi bi-umbrella"></i>} atitle={"Care & Protection"} apara={"Cum advena peregrinationes, omnes brabeutaes manifestum germanus."} />
        <Aboutboxdesign aicon={<i class="bi bi-emoji-sunglasses"></i>} atitle={"Cum zirbus favere, omnes habenaes talem barbatus, brevis fraticinidaes."} />
         </div>
        <div className="aboutbox2"> 
        <Aboutboxdesign aicon={ <i class="bi bi-sun"></i>} atitle={"Peace On The Planet"} apara={"Cum solitudo favere, omnes exsules consumere superbus, pius fermiumes."} />
        <Aboutboxdesign aicon={<i class="bi bi-leaf"></i>} atitle={"Increasing Awareness"} apara={"Cum lixa accelerare, omnes xiphiases tractare festus, regius demolitionees."} />
        <Aboutboxdesign aicon={<i class="bi bi-share"></i>} atitle={"Sharing Happiness"} apara={"Cum aonides peregrinationes, omnes nutrixes experientia lotus, alter lixaes."} />


        </div>
    </div>
 
    </>
  )
} 




// 
//     
//     
//    
//     
//     
