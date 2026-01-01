import React from "react"; 


import { BiTimeFive } from "react-icons/bi";

const TourItems = ({data}) => {

    return (


    <div className="col-md-6 col-lg-4 mb-4">

        <div className="wrapper"> 

        <div className="image_holder">
        <img src={`images/activities/${data.imageUrl}`} alt={data.title} />

        <p className="duration"> <BiTimeFive/> {data.duration} hours </p>   

        </div>

        <div className="content">

        <div className="title">

        <h5> {data.title} </h5>
        </div>


        <div className="bp mt-4">
            <div>   <button type="text" className="btn btn-primary"> Book Now </button></div>
            <div> <span> From</span>   <h6>AED {data.price} <span>Per Person</span> </h6> </div>

        </div>


        </div>



        </div>
    </div>


    )
}



export default TourItems