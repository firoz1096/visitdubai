
import React from 'react';
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
// import logo from '../assets/img/logo-white.png';
import { RiArrowDownSLine } from "react-icons/ri";
//import { RiArrowUpSLine } from "react-icons/ri";

import { BsList } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useState } from "react";
import  { useEffect } from "react";
import  { useRef } from "react";

import { FiHome } from "react-icons/fi";
import { FaUmbrellaBeach } from "react-icons/fa";

import { TfiStamp } from "react-icons/tfi";

//import { GoMail } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";


import { TfiDashboard } from "react-icons/tfi";

import { GiMountainClimbing } from "react-icons/gi";

import { LuLogIn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";






//
import {auth} from '../dashboard/config';
import {onAuthStateChanged,  signOut,} from "firebase/auth";
import { useNavigate } from "react-router-dom";

//

export default function Header() {

  let navigate = useNavigate();
 
 
  //show/hide navbar mobile
  const [isOpen, setIsOpen] = useState(false);


  // useRef API to handle outside click
  const wrapperRef = useRef(null);


    //sticky navbar
    const [isScrolled, setScrolled] = useState(false);


  //menu items
  //const [isMenuDestination, setMenuDestination] = useState(true);
  //const [isMenuActivity, setMenuActivity] = useState(true);
  //const destinationRef = useRef(null);
  //const activityRef = useRef(null);
 

  useEffect(() => {

    //adding class to body tag 'nav_Open' to show overlay in mobile (<992px).
    document.body.classList.toggle('nav_Open', isOpen);
    //ends


    //handle outside click using addEventListener
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  //ends


  }, [isOpen]);


  //if click outside of ref={wrapperRef} then set to false (hide navbar).
  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }

    // if (destinationRef.current && !destinationRef.current.contains(event.target)) {
    //   setMenuDestination(true);    
    // }

    // if (activityRef.current && !activityRef.current.contains(event.target)) {
    //   setMenuActivity(true);    
    // }


  };

//ends
 




  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


const handleScroll = () => {
  if(window.pageYOffset > 50) {
    setScrolled(true)
    // setMenuActivity(true);
    // setMenuDestination(true);    
    
  }
   else {
    setScrolled(false)
    
  }
}
  
//sticky navbar ends



    //if user is logged in show logout and dashboard link

    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
    

      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    
        if (user) {
          // User is signed in.
          setIsLogin(false)
        } 
        
        else {
          // No user is signed in.
          setIsLogin(true)
        }
    
      })
  
    }, [user]);



    const logout = async () => {
      await signOut(auth);
  
      navigate("/")  
      //console.log("You have logged out.")
  
    }




  return (
<>



<div className="n_wrap">
  <nav className={`navbar_lg ${isScrolled && 'nav_scrolled'}`}>
    <div className="container">

        <div className="row">

        <div className="col-12 d-flex align-items-center">
          
            <button className="mobile_btn" onClick={() => setIsOpen(!isOpen)}>      
            {isOpen ? ( <IoCloseOutline /> ) : ( <BsList /> )}
            </button>

            <Link className="logo" to="/">
             <span className='L_1'>VISIT</span>  
             <span className='L_2'> DU</span>
             <span className='L_3'>B</span>
             <span className='L_2'>AI</span>
             
             
             </Link>

            <div ref={wrapperRef} className={`navbar_collapse ${isOpen ? "opened" : ""}`}> 


            <ul className="nav_ul">

              <li className="nav_item slice_li">
              <Link className="nav_link" to="/"><span><FiHome /></span>Home</Link>
              </li>


         
              <li className="nav_item hide_mobile">
            
                <div className="hoverMenu">
                <Link className="nav_link hoverItem" to="/destinations">Destinations<RiArrowDownSLine /></Link>

                <div className="hoverContent">
                <ul className="animate slideIn">

                      <li><Link className="mItem" to="/africa">Africa</Link></li>
                      <li><Link className="mItem" to="/americas">Americas</Link></li>
                      <li><Link className="mItem" to="/asia">Asia</Link></li>
                      <li><Link className="mItem" to="/europe">Europe</Link></li>       
                    </ul>
</div>
                </div>
              </li>


              <li className="nav_item hide_mobile">
            
                <div className="hoverMenu">
                <Link className="nav_link hoverItem" to="/activities">Activities<RiArrowDownSLine /></Link>

                <div className="hoverContent">
                  <ul className="animate slideIn">
                    <li><Link to="/desert-safaris">Desert Safaris</Link></li>
                    <li><Link to="/city-breaks">City Breaks</Link></li>
                    <li><Link to="/cruise-dinner">Cruise Dinner</Link></li>   
                  </ul>
</div>
                </div>
              </li>


              <li className="nav_item hide_desktop">
                <Link className="nav_link hoverItem" to="/destinations"><span><FaUmbrellaBeach /></span>Destinations</Link>
              </li>    

              <li className="nav_item hide_desktop">
                <Link className="nav_link hoverItem" to="/activities"><span><GiMountainClimbing /></span>Activities</Link>
              </li>    

              {/* <li ref={destinationRef} className="nav_item d-none">             
                  <Link className="nav_link" onClick={() => setMenuDestination(!isMenuDestination)}
                  >Destinations{isMenuDestination ? ( <RiArrowDownSLine /> ) : ( <RiArrowUpSLine /> )}</Link>
          
                    <div className={`menuItems ${isMenuDestination ? "d-none" : ""}`}> 
                    <ul>
                      <li><Link className="mItem" to="/africa">Africa</Link></li>
                      <li><Link className="mItem" to="/americas">Americas</Link></li>
                      <li><Link className="mItem" to="/asia">Asia</Link></li>
                      <li><Link className="mItem" to="/europe">Europe</Link></li>       
                   </ul>
                    </div>

              </li> */}


              {/* <li ref={activityRef} className="nav_item d-none">             
                  <Link className="nav_link" onClick={() => setMenuActivity(!isMenuActivity)}
                  >Activities{isMenuActivity ? ( <RiArrowDownSLine /> ) : ( <RiArrowUpSLine /> )}</Link>
          
                    <div className={`menuItems ${isMenuActivity ? "d-none" : ""}`}> 
                    <ul>
                    <li><Link to="/desert-safaris">Desert Safaris</Link></li>
                    <li><Link to="/city-breaks">City Breaks</Link></li>
                    <li><Link to="/cruise-dinner">Cruise Dinner</Link></li>

                   </ul>
                    </div>

              </li> */}


              <li className="nav_item">
                <Link className="nav_link" to="/visa"><span><TfiStamp /></span>Visa Assistance</Link>
              </li>

              <li className="nav_item">
              <Link className="nav_link" to="/contact"><span><MdOutlineMailOutline /></span>Contact</Link>
              </li>    
 

              {isLogin ? 
                
                <li className="nav_item">
                <Link className="nav_link" to="/login"><span><LuLogIn /></span>Login</Link>
                </li>  
              : 
              <>
              <li className="nav_item">
              <Link className="nav_link" to="/dashboard"><span><TfiDashboard /></span>Dasboard</Link>
              </li>  

              <li className="nav_item">
              <Link className="nav_link" onClick={logout}><span><LuLogOut /></span>Log out</Link>
              </li>  
              </>
       
              }



            </ul>
            </div>  


            <div className="more_Items">

            <SearchBar />
            <Sidebar />           
            </div>

        </div>

        </div>


    </div>
  </nav>

</div>



</>
  )
}


