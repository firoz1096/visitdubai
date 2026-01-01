import React from 'react'
import { useEffect } from 'react'



const FetchApidemo = () => {
 
    useEffect(() => {
        const result = fetch ('https://seven-ocean-databse-default-rtdb.firebaseio.com/people.json')
        console.log(result)
      }, []);
 
 
    return (

    <>
    
    <h1> ddededed</h1>
    
    </>



  )
}


export default FetchApidemo

