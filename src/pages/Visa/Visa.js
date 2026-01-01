import React from "react"; 

import Header2 from "../../components/NavbarInner";
import Footer from "../../components/Footer";
//import VisaProducts from "../../products/VisaProducts";
import VisaPage from "../../products/VisaPage";

//go to top if any any new page render
import GoToTop from '../../components/GoToTop'; 



export default function Visa() {
  return (
<>


 <Header2 /> 

  <VisaPage /> 
  
  <Footer /> 
  <GoToTop />    

</>
  )
}




