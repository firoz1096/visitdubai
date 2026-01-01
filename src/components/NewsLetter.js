import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { database } from '../dashboard/config'
import { addDoc, collection } from 'firebase/firestore'

import { SiMinutemailer } from "react-icons/si"
import { RiEmotionHappyLine } from "react-icons/ri"


export default function NewsLetter() {

       const { handleSubmit, register, formState: { errors } } = useForm();

      const [newsletter,setNewsletter] =useState('')

      //set success msg before form submiting
      const [isSucess, setIsSucess] = useState(false);

      //sending/accesssing database and creating table (activitytbl).
      const value = collection(database,"newslettertbl")




    const CreateNewsletter =async()=>{
      await addDoc(value,{Email:newsletter})
      setNewsletter("")
      //console.log(newsletter)

       //show success msg 
      setIsSucess(true)

       //hide success msg after 9 second
       setTimeout(() => {
        setIsSucess(false)
        }, 9000);
    }



  return (
    
    
    
<>



<div className='join_newsletter'> 
<div className='container'>

<form onSubmit={handleSubmit(CreateNewsletter)}>
  <div className='row'>
   
   <div className='col-lg-6'>

   <h3>Get deals in your inbox!</h3>
   
    <p>To receive best monthly deals & packages.</p>

   </div>

   <div className='col-lg-12'>


    <div className='row'>

      <div className='col-lg-6'>

      <input 
        id="title"
        type="email" 
        autoComplete="on" 
        placeholder="Enter email address" 
        className="form-control mb-1" 
       
        {...register("email", {
          required: "This field is required.",
          pattern: {
           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
           message: "Please enter a valid email."
          }
        })}
       
        value={newsletter} 
        onChange={(e) => setNewsletter(e.target.value)} 

        />


  
      </div>

      <div className='col-lg-6'>
      <button className='btn btn_subscribe mb-1'> <SiMinutemailer /> <span>Subscribe</span> </button>
      </div>

      <div className='col-12'>

      {errors.email && <div className='text-danger fw-bold mt-1'>{errors.email.message}</div>}
      {isSucess ? <div className='text-light fw-bold mt-1'>Thank you for subscribing <RiEmotionHappyLine /> </div> : null}
        
      </div>

    </div>


    </div>

    
    </div>
    </form>

</div>

</div>

</>




  )
}
