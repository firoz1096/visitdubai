import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate,  useParams } from "react-router-dom";



const EditVisaItems = () => { 

    //passing param through routing n props
    const { id } = useParams();

  
    //set values to show
    const [values, setValues] = useState({
      title: '',
      body: '',
     
    });


    const navigate = useNavigate();



    useEffect(() => {
      loadUser();
      // eslint-disable-next-line
    },[] );
  



    //load(fetch) data based on id
    const loadUser = async () => {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setValues(result.data);
      //console.log(result.data)

    };


    //update data
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, values);
      navigate("/contact");
      //console.log(values)
     
    };

 

  return (
    

<div className="container">
      <div className="row">
        <div className="col-md-8 border rounded p-4 mt-2 shadow m-auto">
          <h2 className="text-center m-4">Edit Product</h2>
          <ul id="idUlTag">
</ul>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="textTitle" className="form-label">
              Title
              </label>
              <input 
               id="textTitle"
               type="text"
                className="form-control"
                onChange={e => setValues({...values, title: e.target.value})}
                value={values.title}

              
              />
            </div>
           
            <div className="mb-3">
              <label htmlFor="textAraBody" className="form-label">
              body
              </label>
             
              <textarea
               id="textAraBody"
                className="form-control"
                rows="5"  
                onChange={e => setValues({...values, body: e.target.value})}
                value={values.body}
              
              />

            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/contact">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>


  )
}


export default EditVisaItems
