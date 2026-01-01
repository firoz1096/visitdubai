import React from 'react';
import Header2 from "../components/NavbarInner";
import contactPic from '../assets/img/contact-center-vs-call-center.png';
import ContactForm from '../components/ContactForm';
import Footer from "../components/Footer";

//import CVisaItem from '../dashboard/CrudeVisaItems'
//import CrudeProduct from '../dashboard/CrudeProduct';
//import VisaDb from '../dashboard/VisaDb';
//import PostVisa from '../dashboard/PostVisa';

//import UploadVisaPhoto from '../components/UploadVisaPhoto';
//import UploadImgFire from '../components/UploadImgFire';

//import UploadVisaPhotos from '../dashboard/UploadVisaPhotos';

//import UploadActivtyPhotos from '../dashboard/UploadActivtyPhotos';

//go to top if any any new page render
import GoToTop from '../components/GoToTop'; 



export default function contact() {



  return (



<>

<Header2 /> 
<div className='subPage'> 
<div className='container'>

<div className='row'>

  <div className='col-12 mb-3'>
  <h2> Get in touch with us</h2>
<p>Have a question or enquiry? We'd love to hear from you.</p>

</div>

<div className='col-lg-5'>

<div className='row'>

<ContactForm /> 
</div>

</div>

<div className='col-lg-7 text-end d-lg-block d-xl-block d-none'>

<img className='img-fluid'  src={contactPic} alt='contact'></img>
</div>

</div>









</div>
</div>
<Footer />  

<GoToTop /> 
</>



  )
}
