import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import React from "react";
import './App.css';


function Base() {
    return ( 
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
     );
}

export default Base;