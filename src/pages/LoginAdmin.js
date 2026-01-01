import React from 'react'
import Header2 from "../components/NavbarInner";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";

import {useNavigate } from 'react-router-dom';

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {auth} from '../dashboard/config'



export default function LoginAdmin() {
  let navigate = useNavigate();

  //validate form using react hook form.
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const [user, setUser] = useState({});

  const [userNotExist, setUserNotExist] = useState("");




  useEffect(() => {
    

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
  
      if (user) {
        // User is signed in.
        setIsLogin(false)
      } 
      
      else {
        // No user is signed in.
        setIsLogin(true)
      }
  
    })

  }, [user]);






    const onLogin =async()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Signed in
      // const user = userCredential.user;
      // console.log(user);
      
      
    })
    .catch((error) => {
      
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setUserNotExist("Opps! Incorrect email or password.")
    });
   
}



//const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);

    navigate("/")

    // console.log("You have logged out.")

  }


  return (
    

<>

<Header2 /> 
<div className='subPage'> 
<div className='container'>


<div className='row'>


{isLogin ? ( 

<form onSubmit={handleSubmit(onLogin)}>
  
  <div className='col-12 mb-3'> 
  <h3>Agent Login</h3>

  </div>

  <div className='col-lg-5'>

      <div className="form-group mb-3">
      <div>Email</div>
      
      <input
        type="text" 
        id="txtEmail"
        className="form-control" 
        
        autoComplete="on" 
        
        {...register("email", {
          required: "This field is required.",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email"
          }
        })}

        placeholder="Email..."

        onChange={(e)=>setEmail(e.target.value)}

      />

    {errors.email && <div className='text-danger'>{errors.email.message}</div>}   

      </div>

      <div className="form-group mb-3">

      <div>Password</div>

      <input
      type="password" 
      id="txtPassword"
      className="form-control" 
      name="password" autoComplete="off" 

      {...register("password", {
      required: "This field is required.",
    })}


      placeholder="Password..."
      
      onChange={(e)=>setPassword(e.target.value)}

      />

    {errors.password && <div className='text-danger'>{errors.password.message}</div>}   

      </div>

      <div className="form-group mb-3">

      <button className="btn btn-success"> Login</button> 


      {userNotExist && <div className="text-danger"> {userNotExist} </div>}

      </div>


  </div>

</form>  

 ) 
 : 
 
 (

<div className='col-12'>

<h3>Hi, {user?.email}  </h3>

<button  className="btn btn-success" onClick={logout} >Sign out </button> 

</div> 

  )
  }







</div>





</div>
</div>

<Footer />    
</>




  )
}
