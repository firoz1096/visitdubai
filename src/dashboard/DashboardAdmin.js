import React from 'react'

import DashboardPage from '../dashboard/DashboardPage';

//import { useState } from "react";
//import {auth} from '../dashboard/config';
//import {onAuthStateChanged } from "firebase/auth";
//import {useNavigate } from 'react-router-dom';


export default function DashboardAdmin() {

  //protect page if user is not logged in starts
  //const [isProtectPage, setIsProtectPage] = useState(false);
  //const navigate = useNavigate();

  // onAuthStateChanged(auth, (user) => {
    
  //   if (user) {
  //     // User is signed in.
  //     setIsProtectPage(true)

  //   } 
    
  //   else {
  //     // No user is signed in.
  //     setIsProtectPage(false)


  //     setTimeout(() => {
  //       navigate("/login")
  //       }, 3000);

      

  //   }


  // });

//protect page if user is not logged in ends

  return (
    
<DashboardPage />





  )
}
