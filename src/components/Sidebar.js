import React from 'react';
import { useState } from "react";
import  { useEffect } from "react";
import { BiCategory } from "react-icons/bi";
//import adventure from '../assets/icons/adventure.png';
import honeymoon from '../assets/icons/honeymoon.png';
import group from '../assets/icons/group.png';
import safari from '../assets/icons/safari.png';
import family from '../assets/icons/family.png';
import beach from '../assets/icons/beach.png';
import activities from '../assets/icons/activities.png';
import { Link} from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";



export default function Sidebar() {
  
  const [showSidebar, setshowSidebar] = useState(false);



  useEffect(() => {

     //adding class to body tag show overlay for sdebar. min width 992
      document.body.classList.toggle('side_Open', showSidebar);
    //ends

  }, [showSidebar]);



  return (
  <>







<button className="btn_icon" onClick={() => setshowSidebar(true)}><BiCategory /> </button>


<div className="s_wrap">
<div className={`sidebar p-3 ${showSidebar ? "opened" : ""}`}> 

<div className="container">

  <div className="row">

  <div className="col-12 mt-3 mb-5">
      <div className="d-flex justify-content-between align-items-center">
          
          <div> <h4>Tour Type</h4> </div>
          <div><button className='btn_close' onClick={() => setshowSidebar(false)}> <IoCloseOutline /></button></div>  

</div>

      </div>
         

  {/* <div className="col-lg-4 col-md-4 col-6"> 
    <a className="cat_box" href="/adventure">
      <div className="cat_icon">
      <img src={adventure} alt='adventure'></img>    
      </div>
      <h5>Adventure</h5>  
    </a> 
    </div> */}

    <div className="col-lg-6 col-md-4 col-6"> 
    <Link className="cat_box"  to="/family">
      <div className="cat_icon">
      <img src={family} alt='family'></img>    
      </div>
      <h5>Family</h5>  
    </Link> 
    </div>





    <div className="col-lg-6 col-md-4 col-6"> 
    <Link className="cat_box"  to="/group-tour">
      <div className="cat_icon">
      <img src={group} alt='group'></img>    
      </div>
      <h5>Group Tour</h5>  
      </Link> 
    </div>

    
    <div className="col-lg-6 col-md-4 col-6"> 
    <Link className="cat_box"  to="/honeymoon">
      <div className="cat_icon">
      <img src={honeymoon} alt='honeymoon'></img>    
      </div>
      <h5>Honeymoon</h5>  
      </Link> 
    </div>


    <div className="col-lg-6 col-md-4 col-6"> 
    <Link className="cat_box"  to="/safaris">
      <div className="cat_icon">
      <img src={safari} alt='safari'></img>    
      </div>
      <h5>Safaris</h5>  
      </Link> 
    </div>
    



    <div className="col-lg-6 col-md-4 col-6"> 
    <Link className="cat_box"  to="/sea-beach">
      <div className="cat_icon">
      <img src={beach} alt='Sea Beach'></img>    
      </div>
      <h5>Sea Beach</h5>  
      </Link> 
    </div>

    <div className="col-lg-6 col-md-4 col-6"> 
    <Link className="cat_box"  to="/activities">
      <div className="cat_icon">
      <img src={activities} alt='Activities'></img>    
      </div>
      <h5>Activities</h5>  
      </Link> 
    </div>
  

  </div>


</div>

</div>
</div>
</>   
  )
}
