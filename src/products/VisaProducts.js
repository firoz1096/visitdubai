import React, { useState } from "react"; 
import { useEffect } from 'react';
import Loader from '../components/Loader'


import VisaItems from "./VisaItems";
import axios from "axios";




const VisaProducts = () => {

    const [items, setItems] = useState([])

    //loader
    const [loader, setLoader] = useState([true])



    useEffect(() => {

         //adding url of real time database
        axios.get('https://seven-ocean-databse-default-rtdb.firebaseio.com/visa.json')
        
       
        .then(reponse=> {

            let data = reponse.data

            //limit items for home page
            if (window.location.pathname === "/"){      
          
               data = data.slice(0,3)           
              
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


   

    return (

            <>


    <div className="visa_products"> 
        <div className="container mt-5">

            <div className="row">
                    <div className="col-12">
                    <h3> UAE Tourist Visa Offers</h3>
                    </div>

                    <div className="col-12 col-md-6">
                    <p>Apply for UAE visa in just 10 minutes! </p>

                    </div>
            </div>     
           
           <div className="row">  
        
                {
                    items.map(item => {

                        return (<VisaItems key={item.id} data={item}  />)
                    })
                            
                }   


            </div>

        </div>

        { loader && <Loader/> }  

    </div>
     

        </>

    )
}


export default VisaProducts