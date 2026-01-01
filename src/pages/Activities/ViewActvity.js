import React from 'react'
import { BiTimeFive } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Header2 from "../../components/NavbarInner";
import Footer from "../../components/Footer";
import  { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { database } from '../../dashboard/config'
import {doc, onSnapshot } from 'firebase/firestore'

//send email
import emailjs from 'emailjs-com';
import  { useRef } from 'react';

//go to top if any any new page render
import GoToTop from '../../components/GoToTop'; 



export default function ViewActvity() {





  const form = useRef();

 //passing id through link
  const {id} = useParams()


  //setting values to show
  const [values, setValues] = useState({
  name1: '',
  name2: '',
  name3: '',
  name4: '',
  name5: '',
  name6: '',
  name7: '',
  name8: '',

  });



  useEffect(() => {
    loadActivityDetails();
    // eslint-disable-next-line
  },[] );



  //load(fetch) data based on id passing useparam
  const loadActivityDetails = async () => {
    const docRef = doc(database, "activitytbl", id);  
    onSnapshot(docRef, (doc) => {        
    //console.log(doc.data(),doc.id)
    setValues(doc.data(),doc.id)

    })

    
  };
  

//set values for validation
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

//set error for validation
const [errorName, setErrorName] = useState("");
const [errorEmail, setErrorEmail] = useState("");
const [errorPhone, setErrorPhone] = useState("");

//set hide loader before sending email
const [isLoading, setIsLoading] = useState(false);

//show success msg after sending email
const [isSucess, setIsSucess] = useState(false);
 

  //send email using emailjs
  const sendEmail = (e) => {  
    e.preventDefault();  //this always put at the top  

 if(!name || !email || !phone) {

  //validate name
  if (name.length === 0){ 
    setErrorName("Name is required.")
  }
  
  else{
    if(name.length < 3){
      setErrorName("Name should be atleast 3 characters.")
    }
   
    else if (name.length > 15){
      setErrorName("Name should not be more than 15 characters.")
    }
    
    else{
      setErrorName(false);

    }
  } 


  //validate email

  if (email.length === 0){ 
    setErrorEmail("Email is required.")
  } 
  
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) { 
      setErrorEmail("Invalid email address.")
  }

  else {
    setErrorEmail(false)

  }


  //validate phone
  if (!phone){ 
    setErrorPhone("Contact number is required.")
  }

 
  else{  
    setErrorPhone(false)
  } 


} 


else {
 
  setErrorName(false);
  setErrorEmail(false);
  setErrorPhone(false);
  
  /* Make API call */

  setIsLoading(true);    
  setIsSucess(false); 


    emailjs.sendForm('service_8ri3uot', 'template_szzge3n', form.current, 'Ycm97QAUQg63XeOZ4')

    .then(
      (result) => {
        //console.log(result.text);
             
        //hide loader after email is sent
        setIsLoading(false);
        
        //show success msg after sending email      
        setIsSucess(true);
        
        //hide success msg after 5 second
        setTimeout(() => {
          setIsSucess(false);
          }, 5000);
        
        //reset form after sending email
        //e.target.reset();
        setName('')
        setEmail('')
        setPhone('')


      },
      (error) => {
        console.log(error.text);
      }
    )
}




    
  }


  return (
    

<>

<Header2 /> 


<div className="product_details_bg" 
style={{ backgroundImage: `url(${values.name2})` }}> 

  <div className='wrap_bg'>
  
  
<div className='container'>
  <div className='row'>
    <div className='col-12 mt-5 mb-2'>   <h1>{values.name1}</h1>    </div>
   
    <div className='col-12 mb-2 text-light'>   
    <BiTimeFive/> {values.name4} Hours 
    </div>

    <div className='col-12 mb-5 text-light'> 
    Starting From <strong>AED {values.name3}</strong> <small> per person </small>
    </div>

    
    </div>
    </div>
  
  
  
  
  </div>

</div>


<div className='container activity_details'>


<div className='row'>

<div className='col-lg-8'>

    <div className='row'>
   
    <div className='col-lg-12 mb-4'> 
    <div className='navigation'> 
    <span><Link to="/">Home</Link></span> 
    <span><BiChevronRight /> </span>
    <span><Link to="/activities">Activities</Link> </span>
    <span><BiChevronRight /> </span>
    <span>{values.name5} </span>

    </div>
    </div>

      <div className='col-12'>
      <h3>Description</h3> 
      <div dangerouslySetInnerHTML={{__html: values.name7}}></div>
      </div>


      <div className='col-12 mt-5'> 
      <h3>Highlights </h3> 
      <div className='inclusion' dangerouslySetInnerHTML={{__html: values.name8}}></div>    
      </div>
    

      <div className='col-12 mt-5'> 
      <h3>Pick up and Drop off </h3> 
      <div dangerouslySetInnerHTML={{__html: values.name6}}></div>   
      </div>
      
      <div className='col-12 mt-5'> 
      <img className='img-fluid' src={values.name2}  alt={values.name1} />
      </div>
    
    </div>


</div>


<div className='col-lg-4'>

<div className="form_details">

<form ref={form} onSubmit={sendEmail}>

<div className="form-group mb-4">
<h3>{values.name1} </h3>

</div>


  <div className="form-group mb-3">
    <div className='form-label'>Name</div>

    <input 
    type="text" 
    className="form-control form-control-lg" 
    autoComplete="on" 
    name="from_name"
    id="txtName" 
    placeholder="Enter name"

    value={name}
    onChange={(e) => setName(e.target.value)}
   
    />


{errorName && <div className="text-danger"> {errorName} </div>}

  </div>


  <div className="form-group mb-3">
  <div className='form-label'>Email</div>

<input 
type="email" 
className="form-control form-control-lg" 
autoComplete="on" 
name="from_email"
id="txtEmail" 
placeholder="Enter email"

value={email}
onChange={(e) => setEmail(e.target.value)}

/>


{errorEmail && <div className="text-danger"> {errorEmail} </div>}
     


</div>


<div className="form-group mb-4">
<div className='form-label'>Contact Number </div>

<input 
type="number" 
className="form-control form-control-lg" 
autoComplete="on" 
name="from_phone" 
id="txtPhone" 
placeholder="Enter phone"

value={phone}
onChange={(e) => setPhone(e.target.value)}
/>


{errorPhone && <div className="text-danger"> {errorPhone} </div>}

</div>

<div> 
{isLoading ? <p className="text-success">Sending...</p> : null}

{isSucess ? <div className='text-success fw-bold mb-4'> Your trip request has been sent.</div> : null}

<input type="hidden" value={values.name1} name="product_title" readOnly />

</div>

<div className="form-group">

<input type="submit" className="btn btn-lg btn-success" value="Send Enquiry" />

</div>

 
</form>

</div>


</div>

</div>





</div>


<Footer />    
<GoToTop /> 

</>
   
  )
}
