import React from 'react'
import { useState } from 'react'
import axios from 'axios'




const UploadVisaPhoto = () => {

    const [file, setFile] = useState()

    function handleChange(event) {
      setFile(event.target.files[0])
    }
    
    function handleSubmit(event) {
      event.preventDefault()
      const url = '/src/assets/img/';
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      axios.post(url, formData, config).then((response) => {
        console.log(response.data);
      });
  
    }
    


  return (
    
    
<div className='container'>

  <div className='row'>

    <div className='col-12 mt-5'>
    <form onSubmit={handleSubmit}>
            <h1>React File Upload</h1>


            <input type="file" onChange={handleChange}/>
            <button type="submit">Upload</button>
          </form>
    </div>

  </div>


<div className='row d-none'>

<div className='col-12 mt-5'>

 Visa Image URL list
</div>

</div>




</div>    



  )
}


export default UploadVisaPhoto;
