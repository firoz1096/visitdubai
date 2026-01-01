
import React from "react"; 
import TourItems from "./TourItems";
import Loader from '../components/Loader'

import { useState } from "react"; 
import { useEffect } from 'react';
import axios from "axios";



    const TourProducts = () => {

        const [items, setItems] = useState([])

            //loader
    const [loader, setLoader] = useState([true])


        useEffect(() => {

            //adding url of real time database
           axios.get('https://seven-ocean-db3-default-rtdb.firebaseio.com/tours.json')
          
           .then(reponse=> {
   
               let data = reponse.data

                //limit items for home page
            if (window.location.pathname === "/"){      
          
                data = data.slice(0,6)           
               
              }

              setLoader(false)

               setItems(data)
                //console.log('data', data)
           })
   
           .catch(error => {
            setLoader(false)
               console.log(error)
           })
           
         }, []);


        return(

            <>
        <div className="destination_products">
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                <h3>Activities</h3>
                </div>

                <div className="col-12 col-md-6">
                <p>Planning to explore top attractions?

</p>

                </div>
            </div>
        <div className="row">      

           {
             items.map(item => {

                    return (<TourItems key={item.id} data={item} />)
                })
                        
            }   



        </div>



        </div>

            { loader && <Loader/> }  
            </div>

            </>
        )
    }


    export default TourProducts