import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function VisaListing(props) {
    return (

<>



  <tr>
    <td>{props.title}</td>
    
    <td> <img style={{width: "100px"}} src={`images/visa/${props.imageUrl}`} alt={props.title} />  </td>

    <td> 
      <Link className='btn p-2 m-2' to={`/edit-visa/${props.id}`}><FiEdit /> Edit  </Link>
      </td>
   
    <td> 
    <button className="btn">Delete <AiOutlineDelete /> </button>   
    </td>

  </tr>



</>



    )   
}