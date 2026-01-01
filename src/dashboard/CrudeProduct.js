import React from 'react'


import {useState, useEffect} from 'react';
import axios from "axios";
//import { Link } from "react-router-dom";
import AddPost from './AddPost'
import Post from './Post'








const CrudeProduct = () => {




   //fetch data
    const [posts, setPosts] = useState([]);



       //url
       const client = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/posts'
      })
      
        // const client = axios.create({
        //   baseURL: ("/testingdata.json")  
        //   })

   


      
        //fetch data
        const fetchPosts = async() => {
          const response = await client.get('?_limit=4');
          //const response = await client.get();
          setPosts(response.data);
          //console.log('data', response)
        }

      useEffect(() => {

        //bind data
        fetchPosts()


       // eslint-disable-next-line react-hooks/exhaustive-deps
     },[] );



  //save data
  const addPost = async(title, body) => {
    const response = await client.post('', {
      title,
      body,
    });
    setPosts((prevPosts) => [response.data, ...prevPosts])
  };
   
  //delete data
  const deletePost = async(id) => {
    const response = await client.delete(`${id}`);

    //setPosts(posts.filter((post) => post.id !== id))

    setPosts(posts.filter((post) => post.id !== id))
    //alert (id);
  };
   
   




  return (
   

  <>



<div className='container mt-5'>

  <div className='row'>
  <div className='col-8 mb-3'>

  <AddPost addPost={addPost}/>
    
  </div>
  </div>


  <div className='row'>
  <div className='col-12 mb-5 mt-4'>

  <table className='table table-bordered'>
    <thead>
  <tr style={{backgroundColor: "WhiteSmoke"}}>
    <th>title</th>
    <th>body</th>
    <th>edit</th>
    <th>delete</th>
  </tr>
  </thead>
  <tbody>
        {posts.map((post) => 
          <Post 
            key={post.id} 
            id={post.id}
            title={post.title} 
            body={post.body} 
            deletePost={deletePost}
          />
        )}
        </tbody>
    </table>
  </div>
  </div>

</div>

</> 


  )
}


export default CrudeProduct