import React from 'react'
import './Home.css';
import Buttons from '../../Components/Buttons/Buttons';
import { useState } from 'react';

export default function Homesection4() {
    const [udata,setudata] = useState({uname:"",uemail:"",upassword:""});
    const[err,setErr] = useState();
    function  handleChange(ud){
        setudata({...udata,[ud.target.name]:ud.target.value});
    }

const handleSubmit=(ud)=>{
    ud.preventDefault();
    if(!udata.uemail ) {
        setErr ("login data not filled");
    }
    else{
        console.log(udata);
        console.log("form submitted");
        setudata({uemail:""});
    }
}

  return (
  <div className="herosection4">
    <div className="herocontent4">
        <h1>Subscribe to Stay Informed</h1>
        <form onSubmit={handleSubmit}>
            <div className="inputs">
        <input type="email" name='uemail' placeholder='Your E-Mail' onChange={handleChange} value={udata.uemail} />                            {
            err && <p>{err} </p>
           }  
        <Buttons Btntitle={"Subscribe"}/>
        </div>
        </form>
    </div>
  </div>
  )
}
