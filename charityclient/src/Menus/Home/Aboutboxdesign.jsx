import React from 'react'
import './Home.css';

export default function Aboutboxdesign({aicon,atitle,apara}) {
  return (
<div>
        <div className="aboutbox">
          <div className="icons">
            {aicon}
            
          </div>

          <div className="aboutcontent">
            <h3>{atitle}</h3>
            <p>{apara}</p>
          </div>
        </div>
</div>
  )
}
