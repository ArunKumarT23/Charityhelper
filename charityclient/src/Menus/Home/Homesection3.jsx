import React from 'react'
import './Home.css';
import Image4 from '../../Asserts/charity image 4.jpg'
import Image5 from '../../Asserts/charity image 5.jpg'
import Image6 from '../../Asserts/charity image 6.jpg'
import Buttons from '../../Components/Buttons/Buttons';


export default function Homesection3() {
  return (
<section className='herosection3'>
        <div className='herocontent3'>
        <h1>Latest Causes</h1>
        <p>At Helper, there are various charity causes and projects, in which you can always take part. Feel free to learn about them below or browse our website for more information.</p>
       

        <div className="heroimage">

          <div className="post"> 
            <img src={Image4} alt="i4"/>
             <div className="bu">
             <Buttons Btntitle={"Donate"}/>
             </div>
            <h2>Recycling for Charity</h2>
            <p><span>$92,160  </span> of $100,000 raised</p>
           
             </div>


            <div className="post">
            <img src={Image5} alt="i5" />
            <div className="bu">
             <Buttons Btntitle={"Donate"}/>
             </div>
            <h2>Clean Water For People</h2>
            <p><span>$52,380 </span> of $55,000 raised</p>
            
             </div>
            <div className="post">
            <img src={Image6} alt="i6" />
            <div className="bu">
             <Buttons Btntitle={"Donate"}/>
             </div>
            <h2>Children’s Education</h2>
            <p><span>$42,280 </span> of $45,000 raised</p>
            
             </div>
            </div>
             </div>
            
        
</section>
  )
}
