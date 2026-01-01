import React from 'react';

import Header2 from "../../components/NavbarInner";
import Footer from "../../components/Footer";

//import DestinationProducts from "../../products/DestinationProducts"
import DestinationPage from '../../products/DestinationPage';
//go to top if any any new page render
import GoToTop from '../../components/GoToTop'; 

export default function Destinations() {
  return (

<>


<Header2 /> 
<DestinationPage /> 
<Footer />    

<GoToTop /> 
</>


  )
}
