import React from 'react'

import { useState, useEffect } from 'react'


import { database } from './config'

import {  collection, getDocs  } from 'firebase/firestore'


function UseArrayHook(){

    const [holidayproduct,setHoldayProduct] =useState([])

    useEffect(() => {
        let isMounted = true;
      
        const doFetch = async () => {
          const querySnapshot = await getDocs(collection(database, "destinationtbl"));
          const arr = [];
          querySnapshot.forEach((doc) => {
            arr.push({
              ...doc.data(),
              id: doc.id,
            });
            if (isMounted) setHoldayProduct(arr);
            console.log(arr)
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




  return (
    <div className='row'>

    <div className='col-12 mt-5'> <h5> Visa Products </h5> </div>  
      
    <div className='col-12 mb-5'>

    <table className="table table-striped border align-middle">
      <thead>
        <tr>

          <th scope="col">Title</th>

        </tr>
      </thead>
      <tbody>

    {
                holidayproduct.map(values=>

                  <tr key={values.id} id={values.id}>
                          
                    <td>{values.name1} </td>
          
                </tr>
                )
              }

    </tbody>
    </table>

    </div>

  </div>

  )
}


export default UseArrayHook