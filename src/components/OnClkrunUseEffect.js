import React, { useEffect} from "react";

export default function OnClkrunUseEffect() {




    

    const runUseEffect =() =>  {

    


     
        
    }




    useEffect(()=>{

     

        document.getElementById('demo').innerHTML=("render")





    },[])



  return (

<>




    <div className='container'>
        <div className='row'> 
        <div className='col-12 mt-5'> <div id="demo"></div>  </div>


        <div className='col-12 mt-5'> 

    <button className='btn btn-primary' onClick={runUseEffect}> Run Use Effect</button>

    </div>
    </div>
    </div>


    </>
  )
}
