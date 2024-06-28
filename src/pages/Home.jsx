import React, { useEffect } from 'react';
import StudHome from '../user/student/StudHome';
import { useNavigate } from "react-router-dom";
import InstrHome from '../user/instr/InstrHome';

const Home = ({ userDetail, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  console.log("inside Home");
  console.log("userDetail in InstrHome", userDetail);

  return (
    // (userDetail.userType==='student') ?
      <StudHome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userDetail={userDetail} />  
      // <InstrHome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userDetail={userDetail} />
  );
}

export default Home;
