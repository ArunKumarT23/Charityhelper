import React from 'react'
import './Contact.css';
import Aboutboxdesign from '../Home/Aboutboxdesign';

export default function Contactsection2() {
  return (
    <div className="contactabout">
      <div className='c1'> <Aboutboxdesign aicon={<i class="bi bi-telephone-inbound"></i>} apara={"You can call us anytime"} atitle={"+91 9944817224"}/>
      </div>
      <div className='c1'>
      <Aboutboxdesign aicon={<i class="bi bi-map"></i>} atitle={"51 Francis Street, Darlinghurst NSW 2010, United States"}/>
      </div>
       <div className='c1'>
      <Aboutboxdesign aicon={<i class="bi bi-send-check"></i>} atitle={"info@demolink.org"} apara={"Feel free to email us your questions"}/>
      </div>
    </div>
  )
}
