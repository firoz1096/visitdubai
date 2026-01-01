
import React, { useEffect, useState } from "react";
import { imageDb } from '../dashboard/configImgDB';

import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { AiOutlineCloudUpload } from "react-icons/ai";


import { CopyToClipboard } from "react-copy-to-clipboard";


const UploadImgFire = () => {

    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);

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
        const imgRef =  ref(imageDb,`files/${v4()}`)
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

        listAll(ref(imageDb,"files")).then(imgs=>{
           
            imgs.items.forEach(val=>{
                getDownloadURL(val).then(url=>{
                    setImgUrl(data=>[...data,url])
                })
            }) 
            //console.log(imgs)        
        })


    },[])


    

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }


      

 

  return (
<>
    


<div className="container mt-5">

    <div className="row">

        <div className="col-12 mb-5 mt-5">

            <h5> Demo Copy to Clipboard </h5>

        <table className="table">
            <tbody>
                <tr>

                <td>
                <input className="form-control form-control-lg"
                    type="text"
                    placeholder="Type some text here"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />


                </td>
                <td>
                        <CopyToClipboard text={text} onCopy={onCopyText}>

                        <div className="copy_to_area"> 
                        <button className="btn btn-outline-primary">Copy</button>                  
                        {isCopied ? 
                        (<span className="copied">Copied!</span> ) : 
                        ( '' )}
                        </div>

                        </CopyToClipboard>

                </td>

                </tr>
            </tbody>
</table>




        </div>

    
    </div>


    <div className="row">

        <div className="col-12 mb-2">

            <h3> Upload Image</h3>

    </div>

        <div className="col-8">

            <input type="file" id="uploadVisaImg" 
            className="form-control form-control-lg"
            onChange={(e)=>setImg(e.target.files[0])}
            /> 
            
            <div id="uploadMsg"></div>
            

        </div>

        <div className="col-4">
            <button onClick={uploadImage} className="btn btn-success"> <AiOutlineCloudUpload /> Upload Image</button>
        </div>

    </div>


    <div className="row">

        <div className="col-12 mt-5">
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

                {/* <button className="btn btn-outline-primary"
                onClick={copyVisaUrl}  
                id={v4()}> Copy </button>       */}



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
}


export default UploadImgFire;