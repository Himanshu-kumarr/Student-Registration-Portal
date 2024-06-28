import React, { useState } from "react";
import "./InstrHome.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Login";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Sidebar from "./InstrSidebar";
import Profile from "./Profile";
import Academic from "./Academic";

const StudHome = ({ userDetail, isLoggedIn, setIsLoggedIn }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [barClicked, setBarClicked] = useState(false);


  const navigate = useNavigate();


  function handleLogout() {
    console.log("handleLogout called");
    setIsLoggedIn(false);
    return navigate("/");
  }

  function handleLogin() {
    return navigate("/");
  }

  return (

    <div id="home-page-root">
      <div className={`home-page-left ${barClicked ? 'open-left' : ''}`}>
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} barClicked={barClicked}/>
      </div>
      <div className={`home-page-right ${barClicked ? 'open-right' : ''}`}>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setBarClicked={setBarClicked}/>
        <Academic />
        <Footer />
      </div>   
            
    </div>
  );
};

export default StudHome;
