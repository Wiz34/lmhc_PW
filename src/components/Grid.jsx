import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import SV from '../grid-images/services.jpg';
import IN from '../grid-images/individual.jpg';
import CP from '../grid-images/couples.jpg';
import GR from '../grid-images/group.jpg';
import FE from '../grid-images/fees.jpg';
import WS from '../grid-images/workshops.jpg';
import AT from '../grid-images/about-therapy.jpg';
import RC from '../grid-images/request-consultation.jpg';



const Grid = () => {
    return (
      
      <div className="basic-grid">
            <Link to='/about'>
              <div id='grid-item-1' className="grid-item">ABOUT</div> 
            </Link>

            <Link to="/services">
              <div style={{ backgroundImage:`url(${SV})`}}
              id='grid-item-2' className="grid-item">SERVICES</div> 
            </Link>

             <Link to="/individual">
              <div style={{ backgroundImage:`url(${IN})`}}
               id='grid-item-3' className="grid-item">INDIVIDUAL</div> 
            </Link>

            <Link to="couples">
              <div style={{ backgroundImage:`url(${CP})`}}
              id='grid-item-4' className="grid-item">COUPLES</div> 
            </Link> 

            <Link to="/group">
              <div style={{backgroundImage:`url(${GR})`}}
                id='grid-item-5' className="grid-item"> GROUP
              </div> 
            </Link>

            <Link to="/fees">
              <div style={{backgroundImage: `url(${FE})`}}
               id='grid-item-6' className="grid-item"> FEE</div> 
            </Link>

            <Link to="/workshops">
              <div style={{backgroundImage: `url(${WS})`}}
               id='grid-item-7' className="grid-item">WORKSHOPS</div> 
            </Link>

            <Link to="/abouttherapy">
             <div style={{backgroundImage:`url(${AT})`}}
              id='grid-item-8' className="grid-item">ABOUT THERAPY</div> 
            </Link>

            <Link to="/consultation">
              <div style={{backgroundImage: `url(${RC})`}}
              id='grid-item-9' className="grid-item">REQUEST CONSULTATION</div> 
             </Link>

              
         
      </div>
    );
  }
  
  export default Grid;