import React from 'react'
import './About.css';


export default function Imagebox({iimage,ititle,ipara}) {
  return (
        <>
    <div>
        <div className="imagebox">
          <div className="images">
            <img src={iimage} alt="im" />
            </div>
            {/* <div className="title"> */}
            <h3>{ititle}</h3>
            {/* </div> */}
            {/* <div className="para"> */}
            <p>{ipara}</p>
            {/* </div> */}
          </div>
        
</div>
    </>
  )
}
