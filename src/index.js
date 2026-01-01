import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './App';

//Protect Route (pages) from unauthorized user
import ProtectedRoute from './dashboard/ProtectedRoute';
import UserAuthContextProvider  from './dashboard/UserAuthContext';
//

import Demopage from './components/LiveUpdateFirebase'



import Destinations from './pages/Destinations/Destinations';
import Africa from './pages/Destinations/Africa';
import Americas from './pages/Destinations/Americas';
import Asia from './pages/Destinations/Asia';
import Europe from './pages/Destinations/Europe';

import Activities from './pages/Activities/Activities';
import DesertSafaris from './pages/Activities/DesertSafaris';
import CityBreaks from './pages/Activities/CityBreaks';
import CruiseDinner from './pages/Activities/CruiseDinner';

import Adventure from './pages/TourType/Adventure';
import Family from './pages/TourType/Family';
import GroupTour from './pages/TourType/GroupTour';
import Honeymoon from './pages/TourType/Honeymoon';
import SeaBeach from './pages/TourType/SeaBeach';
import Safaris from './pages/TourType/Safaris';


import Visa from './pages/Visa/Visa';

import Contact from './pages/Contact';

import TermsConditions from './pages/TermsConditions';


import NoPage from './pages/NoPage';

//crude oprations
import EditVisaT from './dashboard/EditVisaItems';


import EditVisa from "./dashboard/EditVisa";
import PostVisa from "./dashboard/PostVisa";


//dashboard
import UploadActivtyPhotos from './dashboard/UploadActivtyPhotos';
import UploadHolidayPhotos from './dashboard/UploadHolidayPhotos';
import UploadVisaPhotos from './dashboard/UploadVisaPhotos'
import PostDestination from './dashboard/PostDestination';
import PostActivty from './dashboard/PostActivty';


import ViewDestinations from './pages/Destinations/ViewDestinations';

import ViewActivity from './pages/Activities/ViewActvity';
import ViewVisa from './pages/Visa/ViewVisa';

import DashboardAdmin from './dashboard/DashboardAdmin';
import LoginAdmin from './pages/LoginAdmin';
//import CreateUser from './dashboard/CreateUser'
import SearchResult from './components/SearchResult';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserAuthContextProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />

    <Route path="/destinations" element={<Destinations />} />
    <Route path="/africa" element={<Africa />} />
    <Route path="/americas" element={<Americas />} />
    <Route path="/asia" element={<Asia />} />
    <Route path="/europe" element={<Europe />} />


    <Route path="/adventure" element={<Adventure />} />
    <Route path="/family" element={<Family />} />
    <Route path="/group-tour" element={<GroupTour />} />
    <Route path="/honeymoon" element={<Honeymoon />} />
    <Route path="/sea-beach" element={<SeaBeach />} />
    <Route path="/safaris" element={<Safaris />} />

    <Route path="/activities" element={<Activities />} />
    <Route path="/desert-safaris" element={<DesertSafaris />} />
    <Route path="/city-breaks" element={<CityBreaks />} />
    <Route path="/cruise-dinner" element={<CruiseDinner />} />

    <Route path="/visa" element={<Visa />} />

    <Route path="/contact" element={<Contact />} />
    <Route path="/terms-conditions" element={<TermsConditions />} />

    <Route path="/editvisa/:id" element={<EditVisaT />} />
   
    <Route path="/edit-visa/:id" element={<EditVisa />} />
    
    <Route path="/destinations/:id" element={<ViewDestinations />} />
    <Route path="/activity/:id" element={<ViewActivity />} />
    <Route path="/visa/:id" element={<ViewVisa />} />

    <Route path="/login" element={<LoginAdmin />} />

    <Route path="/search-result/:searchValue" element={<SearchResult />} />
    

    <Route path="/demopage" element={<Demopage />} />

    

    {/* protected routes */}
    <Route path="/post-visa" element={<ProtectedRoute> <PostVisa /> </ProtectedRoute>} /> 
    <Route path="/post-destination" element={<ProtectedRoute> <PostDestination /> </ProtectedRoute>} />
    <Route path="/post-activity" element={<ProtectedRoute> <PostActivty /> </ProtectedRoute>} />
    <Route path="/upload-activity-photos" element={<ProtectedRoute> <UploadActivtyPhotos /> </ProtectedRoute>} />
    <Route path="/upload-destination-photos" element={<ProtectedRoute> <UploadHolidayPhotos /> </ProtectedRoute> } />  
    <Route path="/upload-visa-photos" element={<ProtectedRoute> <UploadVisaPhotos /> </ProtectedRoute> } />
    <Route path="/dashboard" element={<ProtectedRoute> <DashboardAdmin /> </ProtectedRoute> } />
    {/* <Route path="/create-user" element={ <ProtectedRoute> <CreateUser /> </ProtectedRoute> } /> */}
   

    <Route path="*" element={<NoPage />} />

  </Routes>
</BrowserRouter>

</UserAuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
