import React from 'react'
import {  useState } from "react";
import { useForm } from "react-hook-form";
import { database } from '../dashboard/config'
import { addDoc, collection  } from 'firebase/firestore'


export default function ContactForm() {

//validate form using react hook form.
const { handleSubmit, register, formState: { errors } } = useForm();


const [visitor,setVisitor] =useState('')
const [email,setEmail] =useState('')
//const [contact,setContact] =useState('')
const [message,setMessage] =useState('')


  //saving/creating data in farebase table (activitytbl).
  const value = collection(database,"visitortbl")



  //set hide loader before form submiting
const [isLoading, setIsLoading] = useState(false);

//set success msg before form submiting
const [isSucess, setIsSucess] = useState(false);



    //save data in firebase table - using addDoc.
    const onSubmit =async()=>{
      setIsLoading(true);    
        //await addDoc(value,{Name:visitor,Email:email,Phone:contact,Message:message})
        await addDoc(value,{Name:visitor,Email:email,Message:message})
        setVisitor("")
        setEmail("")
        //setContact("")
        setMessage("")
            
        //hide loader after form submiting
        setIsLoading(false);

      //show success msg after form submiting
      setIsSucess(true);

      //hide success msg after 9 second
      setTimeout(() => {
        setIsSucess(false);
        }, 9000);
    
    }




    
  return (
    
    
<div className='col-lg-12'>

<form onSubmit={handleSubmit(onSubmit)}>


<div className="form-group mb-3">
    <div className='form-label'>Your Name</div>
         <input
           type="text"
           className="form-control form-control-lg" 
           autoComplete="on" 


           {...register("name", {
            required: "This field is required.",
            pattern: {
             value: /^[a-zA-Z ]*$/i,
             message: "Please enter a valid name"
            }
          })}

           value={visitor} onChange={(e) => setVisitor(e.target.value)}
         />

      {errors.name && <div className='text-danger'>{errors.name.message}</div>}




</div>

<div className="form-group mb-3">
    <div className='form-label'>Email</div>
         <input
           type="email"
           className="form-control form-control-lg" 
           autoComplete="on" 

           {...register("email", {
             required: "This field is required.",
             pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email"
             }
           })}

           value={email} onChange={(e) => setEmail(e.target.value)}
           />

         {errors.email && <div className='text-danger'>{errors.email.message}</div>}



</div>


{/* <div className="form-group mb-3">
    <div className='form-label'>Contact Number</div>
         <input
           type="text"
           className="form-control form-control-lg" 
           autoComplete="on" 

           {...register("phone", {
             required: "This field is required.",
             pattern: {
               value: /^[ ()+]*([0-9][ ()+]*){10}$/i,
               message: "Please enter a valid phone. required 10 digits"
             }
           })}

           value={contact} onChange={(e) => setContact(e.target.value)}

         />

    <div className='text-danger'> {errors.phone &&  errors.phone.message}</div>

</div> */}


<div className="form-group mb-3">
    <div className='form-label'>Message</div>
         <textarea
          rows="3"
          id='txtMessage'
           className="form-control form-control-lg" 

           {...register("message", { required: true, maxLength: 500 })}

           value={message} onChange={(e) => setMessage(e.target.value)}
         /> 


      {errors.message && errors.message.type === "required" && (
        <div className='text-danger'>This is required.</div>
      )}
      
      {errors.message && errors.message.type === "maxLength" && (
        <div className='text-danger'>Max length exceeded.</div>
      )}  



</div>


{/* <div className="form-group mb-3">
    <div className='form-label'>Password</div>
        
         <input
           type="password"
           className="form-control form-control-lg" 
           name="password" autoComplete="off" 
           {...register("password", {
             required: "Password is required.",
             pattern: {
               value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
               message: "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol."
             }
           })}
         />
        
        <div className='text-danger'>{errors.password && errors.password.message}</div>


</div> */}



<div className="form-group">

{isLoading ? <p className="text-success">Submitting...</p> : null}
{isSucess ? <div className='text-success fw-bold mb-4'>Thanks for reaching out. Someone from our Team will be in touch soon.</div> : null}

<button 
type="submit" 
className="btn btn-lg btn-success pe-5 ps-5">Submit</button>

</div>


</form>



</div>




  )
}
