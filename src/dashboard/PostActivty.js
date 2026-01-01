
import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useState } from 'react'
import {useEffect } from 'react'
import { Link} from "react-router-dom";

import { database } from './config'
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc, onSnapshot  } from 'firebase/firestore'

//import ReactQuill from 'react-quill';
//import 'react-quill/dist/quill.snow.css';

import { Editor } from '@tinymce/tinymce-react';




function PostActivty() {


    const [title,setTitle] =useState('')
    const [imgurl,setImgUrl] =useState('')
    const [price,setPrice] =useState('')
    const [duration,setDuration] =useState('')
    const [category,setCategory] =useState('')
    const [pickup,setPickup] =useState('')
    const [description,setDescription] =useState('')
    const [inclusions,setInclusions] =useState('')
    const [country,setCountry] =useState('')


    //this is to handle popup
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    
  //sending/accesssing database and creating table (activitytbl).
  const value = collection(database,"activitytbl")


  //create post - using addDoc.
  const CreateActivity =async()=>{
    await addDoc(value,{name1:title,name2:imgurl,name3:price,name4:duration,name5:category,name6:pickup,name7:description,name8:inclusions,name9:country})
    setTitle("")
    setImgUrl("")
    setPrice("")
    setDuration("")
    setCategory("")
    setPickup("")
    setDescription("")
    setInclusions("")
    setCountry("")   
}



//get data
const [activityproduct,setActvityProduct] =useState([])

useEffect(() => {

  let isMounted = true;

  const doFetch = async () => {
    const querySnapshot = await getDocs(collection(database, "activitytbl"));  
    const arr = [];
    querySnapshot.forEach((doc) => {
      arr.push({
        ...doc.data(),
        id: doc.id,
      });
      if (isMounted) setActvityProduct(arr); 


      //console.log(arr)
    });
    
  
  };


    doFetch() // start the async work

    .catch((err) => {
      if (!isMounted) return; // unmounted, ignore.
      // TODO: Handle errors in your component
      console.error("failed to fetch data", err);
    });

    return () => {
      isMounted = false;
    };



  }, []);



//delete data
const handleDelete =async(id)=>{
    const deleteVal =  doc(database,"activitytbl",id)
    await deleteDoc(deleteVal)

  //hide popup if delete button is clicked
  setIsPopupOpen(false);

  }



//edit- load data on input fields based on id
const [id,setId] =useState('')
const [show,setShow] =useState(false) //show/hide button - if update btn active hide create btn

const handleEdit =async(id,name1,name2,name3,name4,name5,name6,name7,name8,name9)=>{
    setTitle(name1)
    setImgUrl(name2)
    setPrice(name3)
    setDuration(name4)
    setCategory(name5)
    setPickup(name6)
    setDescription(name7)
    setInclusions(name8)
    setCountry(name9)
    setId(id)
    setShow(true)

}



//update data
const handleUpdate =async()=>{
    const updateData = doc(database,"activitytbl",id)
    await updateDoc(updateData,{name1:title,name2:imgurl,name3:price,name4:duration,name5:category,name6:pickup,name7:description,name8:inclusions,name9:country})
    setTitle("")
    setImgUrl("")
    setPrice("")
    setDuration("")
    setCategory("")
    setPickup("")
    setDescription("")
    setInclusions("")
    setCountry("")
 
    setShow(false)

  
  }




  //listen firebase data changes
      useEffect(() => {

        const listenTblData = () => {   
            onSnapshot(collection(database, "activitytbl"), (snapshot) => {
              setActvityProduct(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))   
            })  
        }
        
        listenTblData();
       
 
    }, []);
  
  
  //clear input fields while clicking on cancel btn
const clearFields = () => { 
    setTitle('')
    setImgUrl('')
    setPrice('')
    setDuration('')
    setCategory('')
    setPickup('')
    setDescription('')
    setInclusions('')
    setCountry('')

    setId('')
    setShow(false)
    
  }

//show popup
const handlePopup = (id) => { 
  setId(id)
  setIsPopupOpen(true);
  //alert(id);
}

//hide popup
const cancelPopup = () => { 
  setIsPopupOpen(false);
}


  return (
  

<>

<div className='container mt-5'>


<div className='row'>

<div className='col-lg-6'> <h5> Post Activity </h5> </div> 
<div className='col-lg-6'>  <Link className='btn m-3' to="/"> go to home page </Link>  </div>   


<div className="col-lg-12 mb-3">
<div className="form-label">Title </div>

<input 
id="title"
type="text" 
className="form-control" 
value={title} onChange={(e) => setTitle(e.target.value)} />
</div>

<div className="col-lg-12 mb-3">      
<div className="form-label">Image URL </div>

<input 
id="imgurl"
type="text" 
className="form-control" 
value={imgurl} onChange={(e) => setImgUrl(e.target.value)} />
</div>



<div className='col-lg-3 mb-3'>
<div className="form-label">Price </div>


<input 
id="price"
type="number"
className="form-control" 
value={price} onChange={(e) => setPrice(e.target.value)} />

<div id="helpPrice" className="form-text">enter numeric value</div>     

   
</div>

<div className='col-lg-3 mb-3'>
<div className="form-label">Duration </div>


<input 
id="duration"
type="number" 
className="form-control" 
value={duration} onChange={(e) => setDuration(e.target.value)} />

<div id="helpDuration" className="form-text">enter numeric value</div>


</div>

<div className='col-lg-3 mb-3'>
<div className="form-label">Category </div>


<select 
      id="category"  
      className="form-select" 
      value={category} onChange={(e) => setCategory(e.target.value)} >
            <option>Select Category</option>
            <option value="Desert Safaris">Desert Safaris</option>
            <option value="City Breaks">City Breaks</option>
            <option value="Cruise Dinner">Cruise Dinner</option>
      </select>


</div>

<div className="col-lg-3 mb-3">
  <div className="form-label">Country </div>


<select 
      id="country"  
      className="form-select" 
      value={country} onChange={(e) => setCountry(e.target.value)} >
            <option>Select Country</option>
            <option value="UAE">UAE</option>
      </select>




  </div>



<div className="col-lg-12 mb-3">
<div className="form-label">Description </div>







<Editor id='description' 
         apiKey='c62u6hr149eqycmngaa0pu43v27dmg6krj6fu6ocrdho2v4y'    
           init={{
            height: 200,
            menubar: false,
            toolbar_sticky: true,  

            plugins: [
              'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
              'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
              'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
           ],
           toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
           'alignleft aligncenter alignright alignjustify | ' +
           'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
          }}

          value={description}
          onEditorChange={setDescription}

           />



</div>

<div className="col-lg-12 mb-3">
<div className="form-label">Pick up and Drop off  </div>



<Editor id='pickup' 
apiKey='c62u6hr149eqycmngaa0pu43v27dmg6krj6fu6ocrdho2v4y'    
           
           init={{
            height: 200,
            menubar: false,
            toolbar_sticky: true,  

            plugins: [
              'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
              'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
              'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
           ],
           toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
           'alignleft aligncenter alignright alignjustify | ' +
           'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
          }}

          value={pickup}
          onEditorChange={setPickup}

           />



{/* <textarea  
id="pickup"
rows="4" 
className="form-control" 
value={pickup} onChange={(e) => setPickup(e.target.value)} /> */}


</div>


<div className="col-lg-12 mb-3">

<div className="form-label">Inclusions  </div>
{/* 
<textarea  
id="inclusions"
rows="4" 
className="form-control" 
value={inclusions} onChange={(e) => setInclusions(e.target.value)} /> */}

{/* <ReactQuill 
  theme="snow" 
  style={{"height" : "150px", "margin" : "0px 0px 50px 0px"}}
  id="inclusions"
  value={inclusions} onChange={setInclusions} /> */}


<Editor id='inclusions' 

apiKey='c62u6hr149eqycmngaa0pu43v27dmg6krj6fu6ocrdho2v4y'    
           
           init={{
            height: 200,
            menubar: false,
            toolbar_sticky: true,  

            plugins: [
              'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
              'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
              'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
           ],
           toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
           'alignleft aligncenter alignright alignjustify | ' +
           'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
          }}

          value={inclusions}
          onEditorChange={setInclusions}

           />



</div>



<div className="col-lg-12 mb-3">   


{!show?
<button onClick={CreateActivity} className='btn btn-success'>Create</button>
:<button onClick={handleUpdate} className='btn btn-success'>Update</button>
}

<Link onClick={clearFields} className='btn btn-danger m-3' to="/post-activity"> Cancel </Link>

</div>


</div>

<div className='row'>

<div className='col-12'>


<div className={`popupConfirm ${isPopupOpen ? "popupConfirmed" : ""}`}>             

<div className='mb-3'>Are you sure want to delete? </div>

{/* {id} */}

<button className='btn btn-success me-4' 
                  onClick={()=>handleDelete(id)}><AiOutlineDelete /> YES, Delete</button>

<button className='btn btn-danger'
              onClick={()=>cancelPopup(id)} > NO </button>

</div>

</div>

</div>

<div className='row'>

<div className='col-12 mt-5'> <h5> Activty Products </h5> </div>  

<div className='col-12 mb-5'>
<div className="overflow-scroll">
    <table className="table table-striped border align-middle">
    <thead>
        <tr>
        <th scope="col">Image</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col">Duration</th>
        <th scope="col">Category</th>
        <th scope="col">Country</th>
        <th scope="col">Edit/Delete</th>

        </tr>
    </thead>
    <tbody>

    {
                activityproduct.map(values=>

                <tr key={values.id} id={values.id}>
                        
                    <td><img src={values.name2} height="100px" alt="#" /> </td>
                    <td>{values.name1} </td>

                    <td>AED {values.name3} </td>
                    <td>{values.name4} Hours </td>
                    <td>{values.name5} </td>
                    <td>{values.name9} </td>
    
                    <td>

                    <Link className='me-3' to={`/activity/${values.id}`}>View</Link>

                  

                    <button className='btn' 
                    onClick={()=>handleEdit(values.id,values.name1,values.name2,values.name3,values.name4,values.name5,values.name6,values.name7,values.name8,values.name9)}>
                    <FiEdit /> Edit</button>  


                    <button className='btn' onClick={()=>handlePopup(values.id)}>
                  <AiOutlineDelete /> Delete</button>                 
                        
                    </td>
                    
        

    
        
                </tr>
                )
            }

    </tbody>
    </table>
</div>
</div>

</div>


</div>


</>



  )
}



export default PostActivty