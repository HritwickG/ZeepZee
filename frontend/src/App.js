import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import { Spinner } from "./components/loader/Loader";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./redux/features/auth/authSlice";

import RegisterC from "./pages/auth/RegisterC";



const App = () => {
  

  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getLoginStatus())
  },[dispatch] )


  return (
    
    <>
     
      <BrowserRouter>
      <ToastContainer/>
     
        <Header />
        
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/registerc" element={<RegisterC/>}/>
       
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
