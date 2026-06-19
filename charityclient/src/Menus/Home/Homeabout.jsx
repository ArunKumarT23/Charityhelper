import React from 'react'
import './Home.css';
import Aboutimg from '../../Asserts/charity image 2.jpg'
import Aboutimg2 from '../../Asserts/charity image 3.jpg'
import Aboutboxdesign from './Aboutboxdesign';


export default function Homeabout() {
  return (
    <section className='homeabout'>
      <div className="aboutleft">
        <img src={Aboutimg} alt="aboutimg" />
        <img src={Aboutimg2} alt="aboutimg" />
        
      </div>
      <div className="aboutright">
        <div className="heading">
          <h1>OurMission</h1>
          <p>Our organization pursues several goals that can be identified as our mission. Learn more about them below.</p>
        </div>

        <Aboutboxdesign aicon={<i class="bi bi-emoji-smile"></i>} atitle={"Saving Childrens"} apara={"Our main mission is to save and rescue permanently displaced children."}/>
        <Aboutboxdesign aicon={<i class="bi bi-sun"></i>} atitle={"Peace On The Planet"} apara={"By working with our partners, we aim to establish peaceful relationships."}/>
        <Aboutboxdesign aicon={<i class="bi bi-umbrella"></i>} atitle={"Peace On The Planet"} apara={"By working with our partners, we aim to establish peaceful relationships."}/>
      </div>
    </section>
  )
}
