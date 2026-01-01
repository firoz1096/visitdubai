import React from 'react'
import { BiTimeFive } from "react-icons/bi";
import { Link} from "react-router-dom";
import { useState, useEffect } from 'react'
import { database } from '../dashboard/config'
import { collection, getDocs  } from 'firebase/firestore'

import Loader from '../components/Loader'


const ActivityPage = () => {

//loader
const [loader, setLoader] = useState([true])

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

        //limit items only for home page
        if (window.location.pathname === "/"){      

            //setActvityProduct(arr.slice(0,3))   
            setActvityProduct(arr.slice(-3))           
            }
                
    setLoader(false)

    });
    
  
  };


    doFetch() // start the async work

    .catch((err) => {
        setLoader(false)

      if (!isMounted) return; // unmounted, ignore.
      // TODO: Handle errors in your component
      console.error("failed to fetch data", err);
    });

    return () => {
      isMounted = false;
    };

    
 

  }, []);




  return (
   

    <>
<div className='subPage'> 
<div className="destination_products">
        <div className="container">
       
        <div className="row">
            <div className="col-12"> 
                <h3>Activities</h3>
                <p>Planning to explore top attractions?</p>
            </div>
        </div>


        <div className="row">



        {
                        activityproduct.map(values=>

                            <div key={values.id} className="col-md-6 col-lg-4 mb-4">

                            <div className="wrapper"> 
                    
                            <div className="image_holder">
                            <img src={values.name2} alt={values.name1} />
                    
                            <p className="duration"> <BiTimeFive/> {values.name4} hours </p>   
                    
                            </div>
                    
                            <div className="content">
                    
                            <div className="title">
                    
                            <h5> {values.name1}</h5>
                            </div>
                    
                    
                            <div className="bp mt-4">
                                <div>   
                                  
                                <Link className="btn btn-primary" to={`/activity/${values.id}`}>Book Now </Link>  
                               </div>
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
</>

  )
}


export default ActivityPage