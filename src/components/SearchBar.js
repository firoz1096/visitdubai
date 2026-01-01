import React from 'react';
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
//import { Link } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {

  let navigate = useNavigate();
  
  //show hide component on click
  const [showSearchbar, setshowSearchbar] = useState(false);



  //hold value of text field
  const [searchEntry, setSearchEntry] = useState([]);

  

//convert value of textfield and pass to serach result page.
  const passEntry  = searchEntry;

  // const toInputUppercase = e => {
  //   e.target.value = ("" + e.target.value).toUpperCase();
  // }


  const handleSubmit =  () => {
    if (searchEntry.length === 0){ 
      return (false); 
      
    }

    else {
      navigate(`/search-result/${passEntry}`)  
      setshowSearchbar(false);

      return(true);
   
    
    }



  }




  return (
    
    <>  
    <button className="btn_icon"  onClick={() => setshowSearchbar(true)}><FiSearch /> </button>

    <div className={`searchbar animate slideInDown ${showSearchbar ? "d-block" : ""}`} >

    <div className="d-flex align-items-center h-50">
          <div className="container">
       


        <div className='row'>

       

          <div className='col-10 col-lg-9'>

          <table cellPadding={0} cellSpacing={0}>
          <thead>
          <tr>

            <td>
            <input 
            id='searchTxt' 
          placeholder='Search...'

          ref={(input) => {input && input.focus() }}  


          className='form-control' type='text'   
          onChange={e => setSearchEntry(e.target.value.split(/ /g).map(word =>
            `${word.substring(0,1).toUpperCase()}${word.substring(1)}`)
        .join(" "))}

          // onInput={toInputUppercase}
          
          /> 

            </td>
           
            <td> 
              {/* <Link onClick={sendText} className='btn' to={`/search-result/${passEntry}`}><FiSearch /></Link> */}
              
              <button onClick={handleSubmit} className='btn'><FiSearch /></button>
            </td>
          
          </tr>
            </thead>
          </table>
            


          </div>

          <div className='col-2 col-lg-3'>
<button className='btn_close' onClick={() => setshowSearchbar(false)}> <IoCloseOutline /></button>

            </div>



        </div>
 

          </div>
    </div>
    
</div>

    </>

  )
}
