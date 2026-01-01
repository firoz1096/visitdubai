import React, { useEffect, useState } from "react";
import { imageDb } from '../dashboard/configImgDB';

import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { AiOutlineCloudUpload } from "react-icons/ai";

//
import {auth} from '../dashboard/config';
import {onAuthStateChanged } from "firebase/auth";
import {useNavigate } from 'react-router-dom';
//


const UploadHolidayPhotos = () => {

    //protect page if user is not logged in starts
    const [isProtectPage, setIsProtectPage] = useState(false);
    const navigate = useNavigate();
  
    onAuthStateChanged(auth, (user) => {
      
      if (user) {
        // User is signed in.
        setIsProtectPage(true)
  
      } 
      
      else {
        // No user is signed in.
        setIsProtectPage(false)
        navigate("/login")    
  
      }
  
  
    });  
  //protect page if user is not logged in ends


    const [img,setImg] =useState('')
    const [imgUrl,setImgUrl] =useState([])


    const uploadImage = () =>{
        
        if (!img) {
         //console.log('image is required');
         document.getElementById('uploadMsg').innerHTML = "<span class='text-danger'>image is required</span>";
         return false;
         }
         if (!img.name.match(/\.(jpg|jpeg|png|gif)$/)) {
           //console.log('select valid image.');

           document.getElementById('uploadMsg').innerHTML = "<span class='text-danger'>select a valid image... jpg, jpeg, png, gif allowed.</span>";
          return false;
         }



     if(img !==null){
        const imgRef =  ref(imageDb,`holidayphotos/${v4()}`)
        uploadBytes(imgRef,img).then(value=>{
            //console.log(value) 

            //load uploaded image in 
            getDownloadURL(value.ref).then(url=>{
                setImgUrl(data=>[...data,url])
            })

            document.getElementById('uploadMsg').innerHTML = "<span class='text-success'>image uploaded</span>";
            return true;           
        }) 

     }


    }



    useEffect(()=>{

        listAll(ref(imageDb,"holidayphotos")).then(imgs=>{
           
            imgs.items.forEach(val=>{
                getDownloadURL(val).then(url=>{
                    setImgUrl(data=>[...data,url])
                })
            }) 
            //console.log(imgs)        
        })


    },[])

      

 

  return (




<>

{isProtectPage ? ( 

<>
<div className="container mt-5 mb-5">

<div className="row">

    <div className="col-lg-12">
    <h4> Upload Image</h4>
    <p> for destination products. </p>

    </div>
</div>


<div className="border border-secondary border-2 p-4"> 
<div className="row">

    <div className="col-lg-9">

        <input type="file" id="uploadVisaImg" 
        className="form-control form-control-lg"
        onChange={(e)=>setImg(e.target.files[0])}
        /> 
        
        <div id="uploadMsg"></div>
        

    </div>

    <div className="col-lg-3">
        <button onClick={uploadImage} className="btn btn-success"> <AiOutlineCloudUpload /> Upload Image</button>
    </div>
    </div>

</div>


</div>

<div className="container mt-5 mb-5">

    <div className="row">

    <div className="col-12">
    <h4> Uploaded Images </h4>
    <p> copy the URL showing next to image to use for destination products. </p>

    </div>

            <div className="col-12">
            <table className="table table-bordered">
            <thead>
            <tr>
                <th>Images</th>
                <th>Copy URL</th>
            </tr>
            </thead>
            <tbody>

                    {

                    imgUrl.map((item,index)=>

                        <tr className="align-middle" key={index}>
                        <td><img src={item} height="200px" alt="#" /> </td>

                        <td> 
                        {item}



                    </td>

                        </tr>

                    )
                    }

        </tbody>
        </table>

            </div>


    </div>

   

</div>
</>

 ) 
                 : 
                 ( 
                 
               <div> </div>
                 
                 
                         
                 )
                 }

</>



    
  )
}


export default UploadHolidayPhotos;