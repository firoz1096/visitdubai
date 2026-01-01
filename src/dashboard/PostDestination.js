import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useState } from 'react'
import {useEffect } from 'react'
import { Link} from "react-router-dom";

import { database } from './config'
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc, onSnapshot  } from 'firebase/firestore'

//import ReactQuill from 'react-quill';
//import 'react-quill/dist/quill.snow.css';

import { Editor } from '@tinymce/tinymce-react';


function PostDestination() {


    const [holidaytitle,setHolidayTitle] =useState('')
    const [imgurl,setImgUrl] =useState('')
    const [destinationprice,setDestinationPrice] =useState('')
    const [numberday,setNumberDay] =useState('')
    const [numbernight,setNumberNight] =useState('')
    const [overview,setOverview] =useState('')
    const [inclusions,setInclusions] =useState('')
    const [terms,setTerms] =useState('')
    const [itinerary,setItinerary] =useState('')
    const [exclusions,setExclusions] =useState('')
    const [holidaycat,setHolidayCat] =useState('')

    const [tourtype,setTourType] =useState('')
    const [country,setCountry] =useState('')


        //this is to handle popup
        const [isPopupOpen, setIsPopupOpen] = useState(false);


  //sending/accesssing database and creating table (destinationtbl).
  const value = collection(database,"destinationtbl")


  //create post - using addDoc.
  const CreateDestination =async()=>{
    await addDoc(value,{name1:holidaytitle,name2:imgurl,name3:destinationprice,name4:numberday,name5:numbernight,name6:overview,name7:inclusions,name8:terms,name9:itinerary,name10:exclusions,name11:holidaycat,name12:tourtype,name13:country})
    setHolidayTitle("")
    setImgUrl("")
    setDestinationPrice("")
    setNumberDay("")
    setNumberNight("")
    setOverview("")
    setInclusions("")
    setTerms("")
    setItinerary("")
    setExclusions("")
    setHolidayCat("")

    setTourType("")
    setCountry("")

}


//get data
const [holidayproduct,setHoldayProduct] =useState([])


useEffect(() => {

  let isMounted = true;

  const doFetch = async () => {
    const querySnapshot = await getDocs(collection(database, "destinationtbl"));
    const arr = [];
    querySnapshot.forEach((doc) => {
      arr.push({
        ...doc.data(),
        id: doc.id,
      });
      if (isMounted) setHoldayProduct(arr);
   
      //console.log(arr)
    });
    
    
  };


    doFetch() // start the async work

      .catch((err) => {
        if (!isMounted) return; // unmounted, ignore.
        // TODO: Handle errors in your component
        console.error("failed to fetch data", err);
      });

  
    return () => {
      isMounted = false;
    };

   

  }, []);


//delete data
const handleDelete =async(id)=>{
    const deleteVal =  doc(database,"destinationtbl",id)
    await deleteDoc(deleteVal)

  //hide popup if delete button is clicked
  setIsPopupOpen(false);
  }



//edit- load data on input fields based on id
const [id,setId] =useState('')
const [show,setShow] =useState(false) //show/hide button - if update btn active hide create btn

const handleEdit =async(id,name1,name2,name3,name4,name5,name6,name7,name8,name9,name10,name11,name12,name13)=>{
  setHolidayTitle(name1)
  setImgUrl(name2)
  setDestinationPrice(name3)
  setNumberDay(name4)
  setNumberNight(name5)
  setOverview(name6)
  setInclusions(name7)
  setTerms(name8)
  setItinerary(name9)
  setExclusions(name10)
  setHolidayCat(name11)
  setTourType(name12)
  setCountry(name13)

  setId(id)
  setShow(true)

}


//update data
const handleUpdate =async()=>{
    const updateData = doc(database,"destinationtbl",id)
    await updateDoc(updateData,{name1:holidaytitle,name2:imgurl,name3:destinationprice,name4:numberday,name5:numbernight,name6:overview,name7:inclusions,name8:terms,name9:itinerary,name10:exclusions,name11:holidaycat,name12:tourtype,name13:country})
    setHolidayTitle("")
    setImgUrl("")
    setDestinationPrice("")
    setNumberDay("")
    setNumberNight("")
    setOverview("")
    setInclusions("")
    setTerms("")
    setItinerary("")
    setExclusions("")
    setHolidayCat("")
    setTourType("")
    setCountry("")

    setShow(false)
  
  }
  


 //listen firebase data changes
useEffect(() => {

  const listenTblData = () => {   
      onSnapshot(collection(database, "destinationtbl"), (snapshot) => {
        setHoldayProduct(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))   
      })  
  }
  
  listenTblData();
 

}, []); 
  

  //clear input fields while clicking on cancel btn
const clearFields = () => { 
    setHolidayTitle("")
    setImgUrl('')
    setDestinationPrice('')
    setNumberDay('')
    setNumberNight('')
    setOverview('')
    setInclusions('')
    setTerms('')
    setItinerary('')
    setExclusions('')
    setHolidayCat('')
    setTourType('')
    setCountry('')

    setId('')
    setShow(false)
    
  }
  

//show popup
const handlePopup = (id) => { 
  setId(id)
  setIsPopupOpen(true);
  //alert(id);
}

//hide popup
const cancelPopup = () => { 
  setIsPopupOpen(false);
}



  return (
    

<>



<div className='container mt-5'>

<div className='row'>

<div className='col-lg-6'> <h5> Post Destination </h5> </div> 
<div className='col-lg-6'>  <Link className='btn m-3' to="/"> go to home page </Link>  </div>   


<div className="col-lg-12 mb-3">
<div className="form-label">Title </div>

<input 
id="holidaytitle"
type="text" 
className="form-control" 
value={holidaytitle} onChange={(e) => setHolidayTitle(e.target.value)} />
</div>

<div className="col-lg-12 mb-3">

<div className="form-label">Image URL </div>

<input 
id="imgurl"
type="text" 
className="form-control" 
value={imgurl} onChange={(e) => setImgUrl(e.target.value)} />
</div>

<div className='col-lg-2 mb-3'>

<div className="form-label">Destination Price </div>


<input 
id="destinationprice"
type="number"
className="form-control" 
value={destinationprice} onChange={(e) => setDestinationPrice(e.target.value)} />

<div id="helpDestinationPrice" className="form-text">enter numeric value</div>
</div>

<div className='col-lg-2 mb-3'>
<div className="form-label">No. of Nights </div>

<input 
id="numbernight"
type="number" 
className="form-control" 
value={numbernight} onChange={(e) => setNumberNight(e.target.value)} />

<div id="helpNumberNight" className="form-text">enter numeric value</div>



</div>

<div className='col-lg-2 mb-3'>
<div className="form-label">No. of Days </div>


<input 
id="numberday"
type="number" 
className="form-control" 
value={numberday} onChange={(e) => setNumberDay(e.target.value)} />

<div id="helpNumberDay" className="form-text">enter numeric value</div>



</div>

<div className="col-lg-2 mb-3">
<div className="form-label">Tour Type </div>


<select 
      id="tourtype"  
      className="form-select" 
      value={tourtype} onChange={(e) => setTourType(e.target.value)} >
            <option>Select Tour Type</option>
            <option value="Family">Family</option>
            <option value="Group Tour">Group Tour</option>
            <option value="Honeymoon">Honeymoon</option>
            <option value="Sea Beach">Sea Beach</option>
            <option value="Safaris">Safaris</option>
      </select>


</div>

<div className="col-lg-2 mb-3">
<div className="form-label">Region </div>


<select 
      id="holidaycat"  
      className="form-select" 
      value={holidaycat} onChange={(e) => setHolidayCat(e.target.value)} >
            <option>Select Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
      </select>


</div>




<div className="col-lg-2 mb-3">
  <div className="form-label">Country </div>


<select 
      id="country"  
      className="form-select" 
      value={country} onChange={(e) => setCountry(e.target.value)} >
            <option>Select Country</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antartica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo">Congo, the Democratic Republic of the</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cota D'Ivoire">Cote d'Ivoire</option>
            <option value="Croatia">Croatia (Hrvatska)</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="East Timor">East Timor</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="France Metropolitan">France, Metropolitan</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">French Southern Territories</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
            <option value="Holy See">Holy See (Vatican City State)</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran">Iran (Islamic Republic of)</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
            <option value="Korea">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao">Lao People's Democratic Republic</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macau">Macau</option>
            <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia">Micronesia, Federated States of</option>
            <option value="Moldova">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
            <option value="Saint LUCIA">Saint LUCIA</option>
            <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option> 
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia (Slovak Republic)</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
            <option value="Span">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="St. Helena">St. Helena</option>
            <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan, Province of China</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania">Tanzania, United Republic of</option>
            <option value="Thailand">Thailand</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos">Turks and Caicos Islands</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Viet Nam</option>
            <option value="Virgin Islands (British)">Virgin Islands (British)</option>
            <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
            <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Serbia">Serbia</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
      </select>




</div>




<div className="col-lg-12 mb-3">
<div className="form-label">overview </div>





<Editor id='overview' 
           apiKey='c62u6hr149eqycmngaa0pu43v27dmg6krj6fu6ocrdho2v4y'    
           init={{
            height: 200,
            menubar: false,
            toolbar_sticky: true,  

            plugins: [
              'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
              'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
              'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
           ],
           toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
           'alignleft aligncenter alignright alignjustify | ' +
           'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
          }}

          value={overview}
          onEditorChange={setOverview}

           />


</div>

<div className="col-lg-12 mb-3">
<div className="form-label">Itinerary </div>


<Editor id='itinerary' 
      apiKey='c62u6hr149eqycmngaa0pu43v27dmg6krj6fu6ocrdho2v4y'         
           init={{
            height: 200,
            menubar: false,
            toolbar_sticky: true,  

            plugins: [
              'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
              'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
              'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
           ],
           toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
           'alignleft aligncenter alignright alignjustify | ' +
           'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
          }}

          value={itinerary}
          onEditorChange={setItinerary}

           />



</div>

<div className="col-lg-12 mb-3">
<div className="form-label">Inclusions </div>


<Editor id='inclusions' 
        apiKey='c62u6hr149eqycmngaa0pu43v27dmg6krj6fu6ocrdho2v4y'       
           init={{
            height: 200,
            menubar: false,
            toolbar_sticky: true,  

            plugins: [
              'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
              'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
              'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
           ],
           toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
           'alignleft aligncenter alignright alignjustify | ' +
           'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
          }}

          value={inclusions}
          onEditorChange={setInclusions}

           />




</div>


<div className="col-lg-12 mb-3">
<div className="form-label">Exclusions </div>




<Editor id='exclusions' 
         apiKey='c62u6hr149eqycmngaa0pu43v27dmg6krj6fu6ocrdho2v4y'      
           init={{
            height: 200,
            menubar: false,
            toolbar_sticky: true,  

            plugins: [
              'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
              'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
              'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
           ],
           toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
           'alignleft aligncenter alignright alignjustify | ' +
           'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
          }}

          value={exclusions}
          onEditorChange={setExclusions}

           />


</div>


<div className="col-lg-12 mb-3">
<div className="form-label">Terms & Conditions </div>


<Editor id='terms' 
          apiKey='c62u6hr149eqycmngaa0pu43v27dmg6krj6fu6ocrdho2v4y'     
           init={{
            height: 200,
            menubar: false,
            toolbar_sticky: true,  

            plugins: [
              'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
              'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
              'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
           ],
           toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
           'alignleft aligncenter alignright alignjustify | ' +
           'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
          }}

          value={terms}
          onEditorChange={setTerms}

           />

</div>





<div className="col-lg-12 mb-3">

{!show?
<button onClick={CreateDestination} className='btn btn-success'>Create</button>
:<button onClick={handleUpdate} className='btn btn-success'>Update</button>
}

<Link onClick={clearFields} className='btn btn-danger m-3'> Cancel </Link>

</div>


</div>


<div className='row'>

<div className='col-12'>


<div className={`popupConfirm ${isPopupOpen ? "popupConfirmed" : ""}`}>             

<div className='mb-3'>Are you sure want to delete? </div>

{/* {id} */}

<button className='btn btn-success me-4' 
                  onClick={()=>handleDelete(id)}><AiOutlineDelete /> YES, Delete</button>

<button className='btn btn-danger'
              onClick={()=>cancelPopup(id)} > NO </button>

</div>

</div>

</div>



<div className='row'>

<div className='col-12 mt-5'> <h5> Visa Products </h5> </div>  

<div className='col-12 mb-5'>
<div className="overflow-scroll">
<table className="table table-striped border align-middle">
<thead>
<tr>
<th scope="col">Image</th>
<th scope="col">Title</th>
<th scope="col">Region</th>
<th scope="col">Tour Type</th>
<th scope="col">Price</th>
<th scope="col">Night</th>
<th scope="col">Day</th>
<th scope="col">Country</th>
<th scope="col">Edit/Delete</th>

</tr>
</thead>
<tbody>

{
        holidayproduct.map(values=>

        <tr key={values.id} id={values.id}>
                
            <td><img src={values.name2} height="100px" alt="#" /> </td>
            <td>{values.name1} </td>
            <td>{values.name11}</td>
            <td>{values.name12}</td>
            <td>AED {values.name3} </td>
            <td>{values.name4} Nights</td>
            <td>{values.name5} Days</td>
            <td>{values.name13}</td>
            <td>

            <Link className='me-3' to={`/destinations/${values.id}`}>View</Link>
            
            <button className='btn' 
            onClick={()=>handleEdit(values.id,values.name1,values.name2,values.name3,values.name4,values.name5,values.name6,values.name7,values.name8,values.name9,values.name10,values.name11,values.name12,values.name13)}>
            <FiEdit /> Edit</button>  
            

            <button className='btn' onClick={()=>handlePopup(values.id)}>
                  <AiOutlineDelete /> Delete</button>                  
                
             </td>
            




        </tr>
        )
    }

</tbody>
</table>
</div>
</div>

</div>




</div>


</>


  )
}



export default PostDestination