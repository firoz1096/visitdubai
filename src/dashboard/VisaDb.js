import React from 'react';
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import { FiPlus } from "react-icons/fi";
import axios from "axios";

import VisaListing from './VisaListing';



const VisaDb = () => {

   //fetch data
   const [visaItems, setVisaItems] = useState([]);


       //url
       const client = axios.create({
        baseURL: 'https://tesdb-1516c-default-rtdb.firebaseio.com/users.json'
      })


              //fetch data
              const fetchVisaPosts = async() => {
                //const response = await client.get('?_limit=4');
                const response = await client.get();
                
                setVisaItems(response.data);
                
                //console.log('data', response)
              }


              useEffect(() => {

                //bind data
                fetchVisaPosts()
        
        
               // eslint-disable-next-line
             },[] );


  return (
    

<>

<div className='container mt-5'>

<div className='row'> 
    <div className='col-12'> <h5> Visa Products </h5> </div>

        <div className='col-12 text-end'>  
        <Link className="btn btn-success" to="/post-visa">Add <FiPlus /></Link> 
        </div>       
</div> 






<div className='row'>
  <div className='col-12 mb-5 mt-4'>

  <table className='table table-bordered'>
    <thead>
  <tr style={{backgroundColor: "WhiteSmoke"}}>
    <th>title</th>
    <th>image</th>
    <th>edit</th>
    <th>delete</th>
  </tr>
  </thead>
  <tbody>
        {visaItems.map((post) => 
          <VisaListing 
            key={post.id} 
            id={post.id}
            title={post.title}
            imageUrl={post.imageUrl}  
        
          />
        )}
        </tbody>
    </table>
  </div>
  </div>




</div>

</>



  )
}


export default VisaDb