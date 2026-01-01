import React from 'react'
import { Link } from "react-router-dom"

export default function DashboardPage() {
  return (
    
    
    <> 
   <div className='container mt-5'>


    <h3> Dashboard</h3>
    <p>manage products. </p>


    <div className='row'>
      <div className='col-12 text-end'>     <Link className="btn" to="/">go to home page</Link></div>
    <div className='col-12 mt-2 mb-3'>

    <h5> Destnation</h5>
    <Link className="btn btn-outline-primary me-4" to="/post-destination">Post Destnation</Link>
    <Link className="btn btn-outline-primary me-4" to="/upload-destination-photos">Upload Destnation Photos</Link>

    </div>

    <div className='col-12 mt-2 mb-3'>
    <h5> Visa</h5>
    <Link className="btn btn-outline-primary me-4" to="/post-visa">Post Visa</Link>
    <Link className="btn btn-outline-primary me-4" to="/upload-visa-photos">Upload Visa Photos</Link>
    </div>


    <div className='col-12 mt-2 mb-3'>
    <h5> Activty</h5>
    <Link className="btn btn-outline-primary me-4" to="/post-activity">Post Activty</Link>
    <Link className="btn btn-outline-primary me-4" to="/upload-activity-photos">Upload Activty Photos</Link>

    </div>


    {/* <div className='col-12 mt-2 mb-3'>
    <h5> Create/Manage Users</h5>
    <Link className="btn btn-outline-primary me-4" to="/create-user">Create User</Link>

    </div> */}

    </div>
   </div>


   </>
  )
}
