import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function Post(props) {
    return (

<>



  <tr>
    <td>{props.title}</td>
    <td>{props.body}</td>
    <td> 
      <Link className='btn p-2 m-2' to={`/editvisa/${props.id}`}><FiEdit /> Edit  </Link>
      </td>
   
    <td> 
    <button className="btn" onClick={() => props.deletePost(props.id)}>Delete <AiOutlineDelete /> </button>   
    </td>

  </tr>



</>



    )   
}