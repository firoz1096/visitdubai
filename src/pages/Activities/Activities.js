import React from "react"; 

import Header2 from "../../components/NavbarInner";
import Footer from "../../components/Footer";

//import TourProducts from "../../products/TourProducts";
import ActivityPage from "../../products/ActivityPage";

//go to top if any any new page render
import GoToTop from '../../components/GoToTop'; 

//import  { useEffect } from "react";

export default function Activities() {


//   useEffect(() => {
//     document.title = "new title"
//  }, []);



  return (
<>


<Header2 /> 

 <ActivityPage /> 
 
 <Footer />    
 <GoToTop /> 
</>
  )
}
