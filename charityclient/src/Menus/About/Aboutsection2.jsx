import React from 'react'
import './About.css';
import abou2 from '../../Asserts/about 2.jpg'

export default function Aboutsection2() {
  return (
    <>
    <div className="abouthelper">
        <div className="aboutleft">
            <img src={abou2} alt="about2" />
        </div>

        <div className="aboutright">
            <div className="aboutheading">
                <h1>About Helper</h1>
                <h3> We are committed to helping wounded  kids find their place.</h3>

                <div className="para">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesqu</p>
                    
                    <br />
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
