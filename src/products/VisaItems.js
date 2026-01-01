import React from "react"; 


const VisaItems = ( {data}  ) => {

        
    return (

         <div className="col-md-4 mb-4">
              <div className="visa_item">
                 <img src={`images/visa/${data.imageUrl}`} alt={data.title} />
            <div className="wrapper">
            <div className="content">
            <h4> {data.title} </h4>
                    <p> Starting from AED {data.price}* </p>
                    <button type="text" className="btn btn-primary"> Enquiry </button>

            </div>
            </div>
            </div>
            </div>

    )

}


export default VisaItems