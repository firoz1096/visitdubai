import React from 'react'
import {useState} from 'react'

export default function AddPost(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addPost(title, body);
        setTitle('');
        setBody('');
    };    
    
    return (
        <form onSubmit={handleSubmit}>
        <h2>Add new Post</h2>
        <div className='mb-3'>
            <label htmlFor="exampleFormControlInput1" className='form-label'>Title</label>
            <input id="exampleFormControlInput1" className='form-control' 
                name="title" 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        <div className='mb-3'>
            <label htmlFor="exampleFormControlTextarea1" className='form-label'>Body</label>
            <textarea id="exampleFormControlTextarea1" className='form-control' rows="3"  
                name="body" 
                value={body} 
                onChange={(e) => setBody(e.target.value)}>
            </textarea>
        </div>
        <button type="submit" className="btn btn-success">Add Post</button>
    </form>
    )
}