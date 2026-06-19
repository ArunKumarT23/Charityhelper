import React from 'react'
import './Contact.css';
import Buttons from '../../Components/Buttons/Buttons';
import { useState } from 'react';
import axios from 'axios';
   

export default function Contactsection3() {
const [userinfo,setinfo] =
 useState ({uname:"",uemail:"",umobile:"",umessage:""});
 const [err,seterr] = useState ({})


 function changedata(udata){
    setinfo({...userinfo,[udata.target.name]:udata.target.value})
    seterr({...err,[udata.target.name]:""})
 };

const myvalidationform=()=>{
        let temperr ={};
        if(!userinfo.uname.trim()) {
            temperr.uname="please fill correct format name data";
        }
        else if (userinfo.uname.length<5){
            temperr.uname="Please fill correct Format name data";
        }

        const emailpattern = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/
        if(!userinfo.uemail.trim()) {
            temperr.uemail="please fill correct form of email"
        }
        else if(!emailpattern.test(userinfo.uemail)){
            temperr.uemail="please fill the correct format of email"
        }

        const mobilepattern = /^[+]91(9|8|7|6)\d{9}$/;
        if(!userinfo.umobile){
            temperr.umobile="please fill the mobile number"
        }
        else if (!mobilepattern.test(userinfo.umobile)){
            temperr.umobile="please fill the correct format of mobile number"
        }

       
        if(!userinfo.umessage.trim()) {
            temperr.umessage="please fill The message box";
        }
        else if (userinfo.umessage.length<2){
            temperr.umessage="Please Fill the message ";
        }
        seterr(temperr);
        return Object.keys(temperr).length ===0;
    }
async function formdatasave(udata){
        udata.preventDefault();

        if(myvalidationform()){
            console.log(userinfo);
            console.log("form data saved");

    setinfo({uname:"",uemail:"",umobile:"",umessage:""})
        }
        try{
            await axios.post("http://localhost:5000/contactdata",userinfo);
            alert("data send in db");
        }
        catch(err){
            console.log("data not go to db",err);
            alert("data not send to db")
        }
    }

  return (
        <div className="herosectionc2">
            <div className="herocontentc2">
                <h1>Get in Touch</h1>

                <form onSubmit={formdatasave}>
                    <div className="inputs">
                        <input type="text" name='uname' placeholder='Your Name' value={userinfo.uname}
                            onChange={changedata} />
                               {
                                err.uname && <p>{err.uname}</p>
                             }
                    </div>

                    <div className="inputs">
                        <input type="email" name='uemail' placeholder='E-Mail' value={userinfo.uemail}
                            onChange={changedata} />
                              {
                                err.uemail && <p>{err.uemail}</p>
                             }
                    </div>

                    <div className="inputs">
                        <input type="tel" name='umobile' placeholder='Phone' value={userinfo.umobile}
                            onChange={changedata}/>
                              {
                                err.umobile && <p>{err.umobile}</p>
                             }
                    </div>

                    <div className="inputs">
                        <input type="textarea" name='umessage' placeholder='Message' value={userinfo.umessage}
                            onChange={changedata}/>
                              {
                                err.umessage && <p>{err.umessage}</p>
                             }
                    </div>

                    <Buttons Btntitle={"SEND"}/>


                </form>
            </div>
        </div>
  )
}
