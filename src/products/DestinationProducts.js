import React from "react"; 
import  { useState } from "react"; 
import { useEffect } from 'react'


import DestinationItems from "./DestinationItems";
import axios from "axios";
import Loader from '../components/Loader'



const DestinationProducts = () => {

    const [items, setItems] = useState([])

        //loader
        const [loader, setLoader] = useState([true])

    useEffect(() => {

        //adding url of real time database
       axios.get('https://seven-ocean-db2-default-rtdb.firebaseio.com/destinations.json')
      
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

       
     }, []);


    return (
        <>
        <div id="explore-top-destination" className="destination_products"> 

            <div  className="container mt-5">
                <div className="row">

                <div className="col-12">
                    <h3> Explore Top Destination</h3>
                    </div>
                    <div className="col-12 col-md-6">
                    <p>Save extra with our exclusive deals!</p>

                    </div>


                </div>

                <div className="row">
        

                    {
                    items.map(item => {

                        return (<DestinationItems key={item.id} data={item} />)
                    })
                            
                }   



                </div>
                        
            </div>


            { loader && <Loader/> } 

        </div>

        </>
    )
}


export default DestinationProducts