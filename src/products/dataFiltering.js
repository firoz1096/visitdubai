import React from 'react';


//define the mock data with keys
const courses = [

    {
      id: 0,
      name: 'Full Stack Developement Program',
      price: '89,999',
      category: 'Family'
    },
  
    {
  
      id: 1,
      name: 'Python Automation Testing Program',
      price: '64,999',
      category: 'Beach'
    },
  
    {
      id: 2,
      name: 'UI/UX Program',
      price: '89,999',
      category: 'Family'

    },
    {
        id: 3,
        name: 'UI/UX Program',
        price: '89,999',
        category: 'Safaris'
  
      },
      {
        id: 4,
        name: 'UI/UX Program',
        price: '89,999',
        category: 'Beach'
  
      }
  
  ]

export default function DataFiltering() {


  /* Mapping the courses into a new array of JSX nodes as arrayDataItems */
  const arrayDataItems = courses.map(course => 
    <li key={course.id}>
      <p>{course.name}</p>
      <span>{course.price}</span>
      <span>{course.category}</span>
    </li>
  );




  /* new array for filtering 'category' */
  const testings = courses.filter(course  =>
    course.category === 'Beach'
  );

  /* Mapping the courses into a new array of JSX nodes as arrayDataItems */
  const arrayDataItems2 = testings.map(course => 
    <li key={course.id}>
      <p>{course.name}</p>
      <span>{course.price}</span>
      <p id="category">{course.category}</p>
    </li>

  )


  // showing limited items using slice method first 3 items.
  const limtP = arrayDataItems.slice(0, 3);


 

 

  return (
    
    <>
<div className="container">
      <div>
        <h1>Render List/Array of Items with Key</h1>
      </div>

      {/* returning arrayDataItems wrapped in ul */}
      <ul>{arrayDataItems}</ul>
    </div>



{/* //filtering data based on category */}


<div className="container">
      <div>
        <h1>Filtering List/Array of Items </h1>
      </div>

      {/* returning arrayDataItems wrapped in <ul> */}
      <ul>{arrayDataItems2}</ul>
    </div>



    <div className="container">
      <div>
        <h1>Limit List/Array of Items</h1>
      </div>

      {/* returning arrayDataItems wrapped in <ul> */}
      <ul>{limtP}</ul>
    </div>





    </>

  )
}
