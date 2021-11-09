import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const Grid = () => {
    return (
      
      <div className="basic-grid">
            <Link to='/about'>
              <div id='grid-item-1' className="grid-item">ABOUT</div> 
            </Link>

            <Link to="/services">
              <div id='grid-item-2' className="grid-item">SERVICES</div> 
            </Link>

             <Link to="/individual">
              <div id='grid-item-3' className="grid-item">INDIVIDUAL</div> 
            </Link>

            <Link to="couples">
              <div id='grid-item-4' className="grid-item">COUPLES</div> 
            </Link> 

            <Link to="/group">
              <div id='grid-item-5' className="grid-item"> GROUP</div> 
            </Link>

            <Link to="/fees">
              <div id='grid-item-6' className="grid-item"> FEE</div> 
            </Link>

            <Link to="/workshops">
              <div id='grid-item-7' className="grid-item">WORKSHOPS</div> 
            </Link>

            <Link to="/abouttherapy">
             <div id='grid-item-8' className="grid-item">ABOUT THERAPY</div> 
            </Link>

            <Link to="/consultation">
              <div id='grid-item-9' className="grid-item">REQUEST CONSULTATION</div> 
             </Link>
             
              
         
      </div>
    );
  }
  
  export default Grid;