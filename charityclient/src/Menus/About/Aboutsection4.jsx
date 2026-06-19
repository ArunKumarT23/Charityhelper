import React from 'react'
import './About.css';
import Imagebox from './Imagebox';

import about3 from '../../Asserts/about 3.jpg'
import about4 from '../../Asserts/about 4.jpg'
import about5 from '../../Asserts/about 5.jpg'
import about6 from '../../Asserts/about 6.jpg'
import about7 from '../../Asserts/about 7.jpg'
import about8 from '../../Asserts/about 8.jpg'

export default function Aboutsection4() {
  return (
    <>
  <section className='Team'>

    <div className="content">
      <h1> Our Team</h1>
    </div>
    <div className="abimages">
    <div className="img1">
      <Imagebox iimage={about3} ititle={'Jane Smith'} ipara={'Executive director'}/>
      <Imagebox iimage={about4} ititle={'Jane Smith'} ipara={'Executive director'}/>
      <Imagebox iimage={about5} ititle={'Jane Smith'} ipara={'Executive director'}/>
    </div>

    <div className="img2">
      <Imagebox iimage={about6} ititle={'Jane Smith'} ipara={'Executive director'}/>
      <Imagebox iimage={about7} ititle={'Jane Smith'} ipara={'Executive director'}/>
      <Imagebox iimage={about8} ititle={'Jane Smith'} ipara={'Executive director'}/>
    </div>
    </div>
    

  </section>
    
    </>
  )
}
