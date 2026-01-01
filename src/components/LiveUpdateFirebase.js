
import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useState } from 'react'
import { useEffect } from 'react'
import { Link} from "react-router-dom";
import { database } from '../dashboard/config'
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, onSnapshot  } from 'firebase/firestore'

import { Editor } from '@tinymce/tinymce-react';


function LiveUpdateFirebase() {



    const [title,setTitle] =useState('')
    const [category,setCategory] =useState('')
    const [description,setDescription] =useState('')


    
  //sending/accesssing database and creating table (activitytbl).
  const value = collection(database,"demotbl")


  //create post - using addDoc.
  const CreateActivity =async()=>{
    await addDoc(value,{Title:title,Category:category,Description:description})
    setTitle("")
    setCategory("")
    setDescription("")

    //console.log(title)
  }


//get data
const [product,setProduct] =useState([])

useEffect(() => {

    let isMounted = true;
  
    const doFetch = async () => {
      const querySnapshot = await getDocs(collection(database, "demotbl")) 
      const arr = []
     
      querySnapshot.forEach((doc) => {
        arr.push({
          ...doc.data(),
          id: doc.id
        })
       
       
        if (isMounted) setProduct(arr)
  
        //console.log(arr)
      })

    
    };
  

  
      doFetch() // start the async work
  
      .catch((err) => {
        if (!isMounted) return; // unmounted, ignore.
        // TODO: Handle errors in your component
        console.error("failed to fetch data", err)
      });
  
      return () => {
        isMounted = false
      };

      
  
    }, []);


    //listen firebase data changes
    useEffect(() => {

        const listenDemoTbl = () => {   
            onSnapshot(collection(database, "demotbl"), (snapshot) => {
                setProduct(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))   
            })  
        }
        
        listenDemoTbl();
       
 
    }, []);
    
   


//edit- load data on input fields based on id
const [id,setId] =useState('')
const [show,setShow] =useState(false) //show/hide button - if update btn active hide create btn

const handleEdit =async(id,Title,Category,Description)=>{
    setTitle(Title)
    setCategory(Category)
    setDescription(Description)
    
    setId(id)
    setShow(true)

}


//update data
const handleUpdate =async()=>{
    const updateData = doc(database,"demotbl",id)
    await updateDoc(updateData,{Title:title,Category:category,Description:description})
    setTitle("")
    setCategory("")
    setDescription("")

    setShow(false)

  }
  

 


//delete data
const handleDelete =async(id)=>{
    const deleteVal =  doc(database,"demotbl",id)
    await deleteDoc(deleteVal)

  }




  //clear input fields while clicking on cancel btn
  const clearFields = () => { 
    setTitle('')
    setCategory('')
    setDescription('') 
    setId('')
    setShow(false)
    
  }




  return (

<> 


<div className='container mt-5'>
       
        <div className='row'>
        <div className='col-lg-12 text-end'> <Link to="/">  go to home page  </Link>  </div> 

        <div className='col-lg-12 mb-3'> <h5> Test data live update firebase </h5> </div> 
     

        <div className="col-lg-12 mb-3">

        <div className="form-label">Title {'(input field)'} </div>

        <input 
        id="title"
        type="text" 
        className="form-control" 
        value={title} onChange={(e) => setTitle(e.target.value)} />

        </div>


      <div className="col-lg-12 mb-3">

      <div className="form-label">Category {'(select tag / listbox)'}</div>


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


        <div className="col-lg-12 mb-3">

        <div className="form-label">Description {'(rich text editor)'} </div>


          <Editor 
           id='tinyMce2' 
           
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
  
            {!show?
            <button onClick={CreateActivity} className='btn btn-success'>Create</button>
            :<button onClick={handleUpdate} className='btn btn-success'>Update</button>
            }

            <Link onClick={clearFields} className='btn btn-danger m-3'> Cancel </Link>

        </div>


        </div>



        <div className='row'>

         <div className='col-12'>

         <table className="table table-striped border align-middle">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
  

                </tr>
            </thead>
            <tbody>



         {
                product.map(values=>


                    <tr key={values.id}>
                 
                 <td>{values.Title}</td>
                 <td>{values.Category} </td>

                 <td dangerouslySetInnerHTML={{__html: values.Description}}></td>
                 
               

                       <td>

                       <button 
                       className='btn' 
                        onClick={()=>handleEdit(values.id,values.Title,values.Category,values.Description)}>
                        <FiEdit /> Edit</button>  

                       </td>


                       <td>
                       <button className='btn' 
                            onClick={()=>handleDelete(values.id)}><AiOutlineDelete /> Delete</button>

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



export default  LiveUpdateFirebase
