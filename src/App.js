import React from "react"; 
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Slider from '../src/components/Slider';

//import VisaProducts from './products/VisaProducts';
import VisaPage from "../src/products/VisaPage";
import VisaBtn from '../src/components/buttons/VisaBtn.js';

//import TourProducts from './products/TourProducts';
import ActivityPage from "./products/ActivityPage";
import TourBtn from '../src/components/buttons/TourBtn';



//import DestinationProducts from './products/DestinationProducts';
import DestinationPage from "./products/DestinationPage";
import DestinationsBtn from '../src/components/buttons/DestinationsBtn';


import WhatsApp from '../src/components/WhatappPlugin'
import NewsLetter from "./components/NewsLetter";

import '../src/custom.scss';

//go to top if any any new page render
import GoToTop from './components/GoToTop'; 


function App() {
  return (
    <div className="App">

<>

<Header /> 
<Slider /> 

<DestinationPage />
<DestinationsBtn /> 

<VisaPage /> 
<VisaBtn /> 

<ActivityPage />
<TourBtn />
<WhatsApp />    

<NewsLetter />  


<Footer />  

    <GoToTop />   
</>

  </div>
  );
}

export default App;
