
import React from 'react';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

export default function DestinationsBtn() {
  return (
    
    <div className="container">
    <div className="row">
        <div className="col-12 mb-2 mt-2 text-center">
            
        <Link className="btn btn_all" to="/destinations">  View All Offer <FaAngleRight/> </Link>
        
        </div>
</div>
</div>

  )
}
