import React from 'react'

import { Link } from "react-router-dom"




const DropdownMenu = () => {
  return (
    <div className="hoverContent">
    <ul>
        <li><Link className="dropdown-item" to="/africa">Africa</Link></li>
        <li><Link className="dropdown-item" to="/americas">Americas</Link></li>
        <li><Link className="dropdown-item" to="/asia">Asia</Link></li>
        <li><Link className="dropdown-item" to="/europe">Europe</Link></li>

        <li><Link className="dropdown-item" to="/desert-safaris">Desert Safaris</Link></li>
        <li><Link className="dropdown-item" to="/city-breaks">City Breaks</Link></li>
        <li><Link className="dropdown-item" to="/cruise-dinner">Cruise Dinner</Link></li>
        
      </ul>
</div>
  );
};

export default DropdownMenu;