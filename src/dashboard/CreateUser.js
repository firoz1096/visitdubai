

import React from 'react'
import Header2 from "../components/NavbarInner";
import Footer from "../components/Footer";

import {  useState } from "react";
import { useForm } from "react-hook-form";
import { database } from '../dashboard/config'
import { addDoc, collection  } from 'firebase/firestore'


export default function CreateUser() {


        //validate form using react hook form.
        const { handleSubmit, register, formState: { errors } } = useForm();

        const [username, setUserName] = useState();
        const [password, setPassword] = useState();


        //saving/creating data in farebase table (activitytbl).
        const value = collection(database,"usertbl")

        //set hide loader before form submiting
        const [isLoading, setIsLoading] = useState(false);

        //set success msg before form submiting
        const [isSucess, setIsSucess] = useState(false);


        //save data in firebase table - using addDoc.
        const onSubmit =async()=>{
            setIsLoading(true);    
              //await addDoc(value,{Name:visitor,Email:email,Phone:contact,Message:message})
              await addDoc(value,{Username:username,Password:password})
              setUserName("")
              setPassword("")
                  
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
    


<>

<Header2 /> 

<div className='container mt-5'>


<form onSubmit={handleSubmit(onSubmit)}>
<div className='row'>

<div className='col-12 mb-3'> <h3>Create User</h3> </div>

    <div className='col-lg-5'>
    
        <div className="form-group mb-3">
       <div>Username</div>
        
        <input 
        type="text" 
        className="form-control" 
        autoComplete="on" 


        {...register("username", {
         required: "This field is required.",
         pattern: {
          value: /^[a-zA-Z]{6,20}$/i,

          message: "Username requirements: 6-20 characters, can not contain any numbers or symbol."
         }
       })}
        
       value={username} 
        onChange={e => setUserName(e.target.value)}
        />


        {errors.username && <div className='text-danger'>{errors.username.message}</div>}

        </div>

        <div className="form-group mb-3">

       <div>Password</div>

<input type="password" 
className="form-control" 
name="password" autoComplete="off" 

{...register("password", {
required: "Password is required.",
pattern: {
    value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i,
    message: "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol."
}
})}

value={password} 
onChange={e => setPassword(e.target.value)}
/>

<div className='text-danger'>{errors.password && errors.password.message}</div>

        </div>

        <div className="form-group mb-3">

        {isLoading ? <p className="text-success">please wait...</p> : null}
    {isSucess ? <div className='text-success fw-bold mb-4'>User created succesfully.</div> : null}

    <button 
    type="submit" 
    className="btn btn-success">Create User</button>     

        </div>

    </div>



</div>
</form>


</div>


<Footer />    
</>





  )
}

