import React from 'react'
import { Link} from "react-router-dom";
import { useState, useEffect } from 'react'
import { database } from '../dashboard/config'
import { collection, getDocs  } from 'firebase/firestore'

import Loader from '../components/Loader'

const VisaPage = () => {

//loader
const [loader, setLoader] = useState([true])

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

      //limit items only for home page
      if (window.location.pathname === "/"){      
          
          setVisaProduct(arr.slice(0,3))
                 
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
<div className="visa_products"> 
    <div className="container">

        <div className='row'>
            <div className="col-12"> 
            <h3> UAE Tourist Visa Offers</h3>
            <p>Apply for UAE visa in just 10 minutes! </p>
            
            </div>
        </div>


        <div className='row'>
                
            {
                        visaproduct.map(values=>

                            <div key={values.id} className="col-md-4 mb-4">
                            <div className="visa_item">
                            <img src={values.name5} alt={values.name1} />
                                <div className="wrapper">
                                <div className="content">
                                <h4> {values.name1} </h4>
                                        <p> Starting from AED {values.name3}* </p>

                                        <Link className="btn btn-primary" to={`/visa/${values.id}`}> Enquiry </Link>
                                      
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


export default VisaPage