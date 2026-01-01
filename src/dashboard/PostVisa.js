import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import { useState, useEffect } from 'react'
import { Link} from "react-router-dom";

import { database } from './config'
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc, onSnapshot  } from 'firebase/firestore'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function PostVisa(){


  const [visatitle,setVisaTitle] =useState('')
  const [visatype,setVisaType] =useState('')
  const [visaprice,setVisaPrice] =useState('')
  const [visadesc,setVisaDesc] =useState('')
  const [imgurl,setImgUrl] =useState('')
  const [visavalidity,setVisaValidity] =useState('')
  const [visaentry,setVisaEntry] =useState('')
  const [country,setCountry] =useState('')

  
  //this is to handle popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);


   
  //sending/accesssing database and creating table (visatbl).
  const value = collection(database,"visatbl")


  //create post - using addDoc.
  const handleCreate =async()=>{
    await addDoc(value,{name1:visatitle,name2:visatype,name3:visaprice,name4:visadesc,name5:imgurl,name6:visavalidity,name7:visaentry,name8:country})
    setVisaTitle("")
    setVisaType("")
    setVisaPrice("")
    setVisaDesc("")
    setImgUrl("")
    setVisaValidity("")
    setVisaEntry("")
    setCountry("")
    
}


//get data
const [visaproduct,setVisaProduct] =useState([])

useEffect(() => {
  let isMounted = true;

  const doFetch = async () => {
    const querySnapshot = await getDocs(collection(database, "visatbl"));
    const arr = [];
    querySnapshot.forEach((doc) => {
      arr.push({
        ...doc.data(),
        id: doc.id,
      });
      if (isMounted) setVisaProduct(arr);
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
  const deleteVal =  doc(database,"visatbl",id)
  await deleteDoc(deleteVal)

  //hide popup if delete button is clicked
  setIsPopupOpen(false);
}



//edit- load data on input fields based on id
const [id,setId] =useState('')
const [show,setShow] =useState(false) //show/hide button - if update btn active hide create btn

const handleEdit =async(id,name1,name2,name3,name4,name5,name6,name7,name8)=>{
  setVisaTitle(name1)
  setVisaType(name2)
  setVisaPrice(name3)
  setVisaDesc(name4)
  setImgUrl(name5)
  setVisaValidity(name6)
  setVisaEntry(name7)
  setCountry(name8)
  setId(id)
  setShow(true)
}


//update data
const handleUpdate =async()=>{
  const updateData = doc(database,"visatbl",id)
  await updateDoc(updateData,{name1:visatitle,name2:visatype,name3:visaprice,name4:visadesc,name5:imgurl,name6:visavalidity,name7:visaentry,name8:country})
  setVisaTitle("")
  setVisaType("")
  setVisaPrice("")
  setVisaDesc("")
  setImgUrl("")
  setVisaValidity("")
  setVisaEntry("")
  setCountry("")
  setShow(false)
}


//listen firebase data changes
useEffect(() => {

  const listenTblData = () => {   
      onSnapshot(collection(database, "visatbl"), (snapshot) => {
          setVisaProduct(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))   
      })  
  }
  
  listenTblData();
 

}, []);



//clear input fields while clicking on cancel btn
const clearFields = () => { 
  setVisaTitle('')
  setVisaType('')
  setVisaPrice('')
  setVisaDesc('')
  setImgUrl('')
  setVisaValidity('')
  setVisaEntry('')
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

  <div className='col-lg-6'> <h5> Post Visa </h5> </div>  

  <div className='col-lg-6'>  <Link className='btn m-3' to="/"> go to home page </Link>  </div>     

  <div className="col-lg-12 mb-3">
  <div className="form-label">Visa Title </div>

  <input 
  id="visatitle"
  type="text" 
  className="form-control" 
  value={visatitle} onChange={(e) => setVisaTitle(e.target.value)} />
  </div>

  <div className="col-lg-12 mb-3">
  <div className="form-label">Visa Image URL</div> 

  <input 
  id="imgurl"
  type="text" 
  className="form-control" 
  value={imgurl} onChange={(e) => setImgUrl(e.target.value)} />
  </div>

  <div className='col-lg-2 mb-3'>
  <div className="form-label">Stay Period </div>

  <input 
  id="visatype"
  type="number" 
  className="form-control" 
  value={visatype} onChange={(e) => setVisaType(e.target.value)} />

  <div id="helpVisaDuration" className="form-text">enter numeric value</div>



  </div>


  <div className='col-lg-2 mb-3'>
  <div className="form-label">Visa Price </div>

  <input 
  id="visaprice"
  type="number"
  className="form-control" 
  value={visaprice} onChange={(e) => setVisaPrice(e.target.value)} />

  <div id="helpVisaPrice" className="form-text">enter numeric value</div>
  </div>


  <div className='col-lg-2 mb-3'>
  <div className="form-label">Visa Validity </div>

  <input 
  id="visavalidity"
  type="number" 
  className="form-control" 
  value={visavalidity} onChange={(e) => setVisaValidity(e.target.value)} />

  <div id="helpVisaValidity" className="form-text">enter numeric value</div>
  </div>

  <div className="col-lg-3 mb-3">
  <div className="form-label">Entry </div>


<select 
      id="visaentry"  
      className="form-select" 
      value={visaentry} onChange={(e) => setVisaEntry(e.target.value)} >
            <option>Select Entry</option>
            <option value="Single">Single</option>
            <option value="Multiple">Multiple</option>
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
            <option value="Saudi Arabia">Saudi Arabia</option>
      </select>




  </div>



  <div className="col-lg-12 mb-3">
  <div className="form-label">Visa Description </div>




<ReactQuill 
        theme="snow" 
        style={{"height" : "150px", "margin" : "0px 0px 50px 0px"}} 
        id="visadesc"
        value={visadesc} onChange={setVisaDesc} />





  </div>

  <div className="col-lg-12 mb-3">
  {!show?
  <button onClick={handleCreate} className='btn btn-success'>Create</button>
  :<button onClick={handleUpdate} className='btn btn-success'>Update</button>
  }

<button onClick={clearFields} className='btn btn-danger m-3'>Cancel</button>

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

  <div className='col-12 mt-5'> <h5> Visa Products </h5> </div>  
    
  <div className='col-12 mb-5'>

  <table className="table table-striped border align-middle">
    <thead>
      <tr>
      <th scope="col">Image</th>
        <th scope="col">Title</th>
        <th scope="col">Stay period</th>
        <th scope="col">Price</th>
        <th scope="col">Visa Validity</th>
        <th scope="col">Entry</th>
        <th scope="col">Country</th>
        <th scope="col">Edit/Delete</th>
      </tr>
    </thead>
    <tbody>

  {
              visaproduct.map(values=>

                <tr key={values.id} id={values.id}>
                        
                  <td><img src={values.name5} height="100px" alt="#" /> </td>
                  <td>{values.name1} </td>
                  <td>{values.name2} days</td>
                  <td>AED {values.name3}* </td>
                  <td>{values.name6} days </td>
                  <td>{values.name7} </td>
                  <td>{values.name8} </td>
    
                  
                  <td> 

                  <Link className='me-3' to={`/visa/${values.id}`}>View</Link>

                  <button className='btn' 
                  onClick={()=>handleEdit(values.id,values.name1,values.name2,values.name3,values.name4,values.name5,values.name6,values.name7,values.name8)}>
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


</>


  )
}


export default PostVisa