import React from 'react';
import { FiFacebook } from "react-icons/fi";
// import { FiYoutube } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
// import { FiTwitter } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

//import { FiMapPin } from "react-icons/fi";

import { Link } from "react-router-dom";



export default function footer() {
  return (
    



<footer className="footer_lg"> 
<div className="container">

  <div className="row">

  <div className="col-md-6 col-lg-2">
      <h5>Quick Links </h5>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/destinations">Destinations</Link></li>
      <li><Link to="/visa">Visa</Link></li>
      <li><Link to="/activities">Activities</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      </ul>
      </div>
  
      <div className="col-md-6 col-lg-2">
      <h5>Destinations </h5>
      <ul>
        <li><Link to="/africa">Africa</Link></li>
        <li><Link to="/americas">Americas</Link></li>
        <li><Link to="/asia">Asia</Link></li>
        <li><Link to="/europe">Europe</Link></li>      
      </ul>
      </div>

      <div className="col-md-6 col-lg-2">
      <h5> Tour Type </h5>
      <ul>
  
      <li><Link to="/family">Family</Link></li>
      <li><Link to="/group-tour">Group Tour</Link></li>
      <li><Link to="/honeymoon">Honeymoon</Link></li>
      <li><Link to="/sea-beach">Sea Beach</Link></li>
      <li><Link to="/safaris">Safaris</Link></li>

      </ul>
      </div>

      <div className="col-md-6 col-lg-3">
      <h5> Activities </h5>
      <ul>
        <li><Link to="/desert-safaris">Desert Safaris</Link></li>
        <li><Link to="/city-breaks">City Breaks</Link></li>
        <li><Link to="/cruise-dinner">Cruise Dinner</Link></li>
      </ul>
      </div>

      <div className="col-md-6 col-lg-3">
      <h5>Get in Touch </h5>
      <ul>
      <li className='mt-3 mb-3'><FiPhone/> +971 507687303 </li>
      <li className='mb-3'><FiMail/> sales@visitdubai.co.in </li>
      <li className="connect_with_us">
      <Link target="_blank" to="https://www.facebook.com/" ><FiFacebook/></Link>
      {/* <Link target="_blank" to="https://www.x.com/" ><FiTwitter/></Link> */}
      <Link target="_blank" to="https://www.instagram.com/" ><FiInstagram/></Link>
      {/* <Link target="_blank" to="https://www.youtube.com/" ><FiYoutube/></Link> */}
        </li>



      </ul>

      </div>

  </div>


  <div className="row">  

        <div className="col-md-6 col-lg-9">
          <div className="copyright">
          Copyright © 2026 Visit Dubai <span className='opacity-50'> | </span> Designed & Developed by <Link to="https://www.firozdev.com" target='_blank'>FIROZ DEV.</Link>
            </div>
        </div>

          <div className="col-md-6 col-lg-3">
              <div className="info_links">
              <Link to="/terms-conditions" >Terms & Conditions</Link>
              </div>
          </div>

  </div>



</div>

</footer>

  )
}
