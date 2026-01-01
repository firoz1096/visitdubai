import React from 'react'
import Header2 from "../../components/NavbarInner";
import Footer from "../../components/Footer";

import { BiTimeFive } from "react-icons/bi";
import { Link} from "react-router-dom";
import { useState, useEffect } from 'react'
import { database } from '../../dashboard/config'
import { collection, query, where, getDocs } from "firebase/firestore";

import Loader from '../../components/Loader';
//go to top if any any new page render
import GoToTop from '../../components/GoToTop'; 

const Honeymoon = () => {

//loader
const [loader, setLoader] = useState([true])


//get data
const [holidayproduct,setHoldayProduct] =useState([])


useEffect(() => {

  //bind data once on load
  doFetch() 
     
  
}, []);



//fetch data based on query/string
const doFetch = async () => {
    const q = query(collection(database, "destinationtbl"), where("name12", "==","Honeymoon"));

    const querySnapshot = await getDocs(q);

    const arr = [];
    querySnapshot.forEach((doc) => {
      arr.push({
        ...doc.data(),
        id: doc.id
      });

      //console.log(doc.id, " => ", doc.data());
      //console.log(arr)
            
    setHoldayProduct(arr); 

    setLoader(false)
      
    })     

}



  return (

   
<>
<Header2 /> 
<div className='subPage'> 
<div className="destination_products"> 

    <div className="container">

        <div className="row">
            <div className="col-12">  
                <h3>Honeymoon</h3>
                <p>Save extra with our exclusive deals!</p>

            </div>
        </div>

        <div className="row">

                {
                    holidayproduct.map(values=>
                      

                        <div key={values.id} className="col-md-6 col-lg-4 mb-4">

                        <div className="wrapper"> 
                        
                        <div className="image_holder">
                    
                        <img src={values.name2} alt={values.name1} />
                    
                        <p className="duration"> <BiTimeFive/> {values.name5} Day & {values.name4} Night  </p>   
            
                        </div>
            
                        <div className="content">
                        
                        <div className="title">
            
                        <h5> {values.name1} </h5>
                        </div>
            
            
                        <div className="bp mt-4">
                            <div>  <Link className="btn btn-primary" to={`/destinations/${values.id}`}>Book Now </Link> </div>


                            <div> <span> From</span>   <h6>AED {values.name3} <span>Per Person</span> </h6> </div>
            
                        </div>
            
            
                        </div>
            
                    
                    
                        </div>
                    </div>

        
                     

                    )
                }
         </div>

    </div>

    { loader && <Loader/> }  

</div>
</div>
<GoToTop /> 
<Footer />  

</>

  )
}


export default Honeymoon