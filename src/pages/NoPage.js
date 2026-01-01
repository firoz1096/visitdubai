import React from 'react';

import { Link } from "react-router-dom";

//go to top if any any new page render
import GoToTop from '../components/GoToTop'; 


export default function NoPage() {
  return (

    <>
    <div className="container">
     
     <div className="row">
     <div className="col-12 text-center mt-5">
      <h1>  Sorry, this page doesn't exist.</h1>
      <h2>Please check the URL or go back a page.</h2>
      <h3 className="text-black-50">404 Error. Page Not Found.</h3>    
      </div> 

      <div className="col-12 text-center mt-5">
        
      <Link className="btn btn-primary" to="/">Back to Home Page  </Link>

        </div>
      </div>
      </div>

      <GoToTop /> 

      </>
  )
}
