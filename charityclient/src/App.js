import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Menus/Home/Home";
import About from "./Menus/About/About";
import Charity from "./Menus/Charity/Charity";
import Contact from "./Menus/Contact/Contact";
import Footer from "./Components/Footer/Footer";

// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";

import { Routes,Route } from "react-router-dom";

function App() {
  return(
    <>
      <Header/>

        <Routes >
          <Route  path="/" element={<Home/>} />
          <Route path="/about" element={  <About/>} />
          <Route path="/Charity" element={  <Charity/>} />
          <Route path="/Contact" element={  <Contact/>} />
        </Routes>
        
      
        
        <Footer/>
      </>

  ); 
}

export default App;