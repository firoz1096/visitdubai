import React from 'react'
import Header2 from "../components/NavbarInner";
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom';

//
import { Link} from "react-router-dom";
import { useState, useEffect } from 'react'
import { database } from '../dashboard/config'
import { collection, query, where, getDocs } from 'firebase/firestore';
//go to top if any any new page render
import GoToTop from '../components/GoToTop'; 


export default function SearchResult() {
    
    const { searchValue } = useParams();

    //get data
    const [holidayproduct,setHoldayProduct] =useState([])
    const [holidayproduct2,setHoldayProduct2] =useState([])
    const [holidayproduct3,setHoldayProduct3] =useState([])
    const [holidayproduct4,setHoldayProduct4] =useState([])

    const [totalResult, setTotalResult] = useState(0);
    const [totalResult2, setTotalResult2] = useState(0);
    const [totalResult3, setTotalResult3] = useState(0);
    const [totalResult4, setTotalResult4] = useState(0);


  
  
  
    //fetch data for destination column (title)
    const doFetch = async () => {
    const q = query(collection(database, "destinationtbl"),
    where('name1', '>=', `${searchValue}`),
    where('name1', '<=', `${searchValue+ '\uf8ff'}`),
    )

    const querySnapshot = await getDocs(q);

    // if (querySnapshot.empty) {
    //   console.log('No matching documents.');
    //   return;
    // }  



    const arr = [];
    querySnapshot.forEach((doc) => {
    arr.push({
    ...doc.data(),
    id: doc.id
    });

    //console.log(doc.id, " => ", doc.data());
    //console.log(arr)
      
    setHoldayProduct(arr); 

    //count result
    const totalResult = querySnapshot.size
    setTotalResult(totalResult);

    })     

    }


    //fetch data for destination column (country)
    const doFetch2 = async () => {
    const w = query(collection(database, "destinationtbl"),
    where('name13', '>=', `${searchValue}`),
    where('name13', '<=', `${searchValue+ '\uf8ff'}`),
    )


    const querySnapshot2 = await getDocs(w);
    const arr2 = [];
    querySnapshot2.forEach((doc) => {
    arr2.push({
    ...doc.data(),
    id: doc.id
    });

    setHoldayProduct2(arr2); 

    //count result
    const totalResult = querySnapshot2.size
    setTotalResult2(totalResult);

    })     

    }


    //fetch data for activity column (title)
    const doFetch3 = async () => {
    const x = query(collection(database, "activitytbl"),
    where('name1', '>=', `${searchValue}`),
    where('name1', '<=', `${searchValue+ '\uf8ff'}`),
    )


    const querySnapshot3 = await getDocs(x);   
    const arr3 = [];
    querySnapshot3.forEach((doc) => {
      arr3.push({
        ...doc.data(),
        id: doc.id
      });

    setHoldayProduct3(arr3); 

    //count result
    const totalResult = querySnapshot3.size
    setTotalResult3(totalResult);
      
    })     

    }


    //fetch data for visa column (title)
    const doFetch4 = async () => {
    const y = query(collection(database, "visatbl"),
    where('name1', '>=', `${searchValue}`),
    where('name1', '<=', `${searchValue+ '\uf8ff'}`),
    )


    const querySnapshot4 = await getDocs(y);   
    const arr4 = [];
    querySnapshot4.forEach((doc) => {
      arr4.push({
        ...doc.data(),
        id: doc.id
      });

    setHoldayProduct4(arr4); 

    //count result
    const totalResult = querySnapshot4.size
    setTotalResult4(totalResult);
      
    })     

    }



    //count total reuslt here
    const totalCount = totalResult + totalResult2 + totalResult3 + totalResult4;

  
    useEffect(() => {

      //bind data once on load
      doFetch() 
      doFetch2() 
      doFetch3() 
      doFetch4() 
      // eslint-disable-next-line      
    }, [holidayproduct,holidayproduct2,holidayproduct3,holidayproduct4,searchValue,totalCount]);


  

  return (


    <>

<Header2 /> 


<div className='container mt-5 search_results'>

<div className='row'>


<div className='col-12'>
  <h3>SearchResult</h3>

  <p>Showing results {totalCount} for: "{searchValue}"</p>
  </div>

<div className='col-12 mt-2'>


{
        holidayproduct.map(values=>
          

            <div key={values.id} className="col-md-6 col-lg-4 mb-4">
            
             <Link to={`/destinations/${values.id}`}> <h5> {values.name1} </h5> </Link> 

             {/* <p dangerouslySetInnerHTML={{__html: values.name6.substring(0, 110)}}>
              </p> */}

             <p dangerouslySetInnerHTML={{__html: values.name6.length > 110 ?
                `${values.name6.substring(0, 100)}...` : values.name6}}>
              </p>

        </div>


    

        )
    }






{
        holidayproduct2.map(values=>
          

            <div key={values.id} className="col-md-6 col-lg-4 mb-4">
            
             <Link to={`/destinations/${values.id}`}> <h5> {values.name1} </h5> </Link> 

             <p dangerouslySetInnerHTML={{__html: values.name6.length > 110 ?
                `${values.name6.substring(0, 100)}...` : values.name6}}>
              </p>

        </div>


    

        )
    }





{
        holidayproduct3.map(values=>
          

            <div key={values.id} className="col-md-6 col-lg-4 mb-4">
            
             <Link to={`/activity/${values.id}`}> <h5> {values.name1} </h5> </Link> 

             <p dangerouslySetInnerHTML={{__html: values.name6.length > 110 ?
                `${values.name7.substring(0, 100)}...` : values.name7}}>
              </p>

        </div>


    

        )
    }


{
        holidayproduct4.map(values=>
          

            <div key={values.id} className="col-md-6 col-lg-4 mb-4">
            
             <Link to={`/visa/${values.id}`}> <h5> {values.name1} </h5> </Link> 

             <p dangerouslySetInnerHTML={{__html: values.name4.length > 110 ?
                `${values.name4.substring(0, 100)}...` : values.name7}}>
              </p>

        </div>


    

        )
    }




</div>

</div>


</div>


<Footer />    

<GoToTop /> 

    </>
  )
}
