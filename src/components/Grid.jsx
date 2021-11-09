import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const Grid = () => {
    return (
      
      <div className="basic-grid">
            
            <div id='grid-item-1' className="grid-item">ABOUT
              <Link to="/about"/>
            </div> 
            <div id='grid-item-2' className="grid-item">SERVICES
              <Link to="/services"/>
            </div> 
            <div id='grid-item-3' className="grid-item">
              <Link to="/individual"/>
              INDIVIDUAL</div> 
            <div id='grid-item-4' className="grid-item">
              <Link to="couples"/>
              COUPLES</div> 
            <div id='grid-item-5' className="grid-item">
              <Link to="/group"/>
              GROUP</div> 
            <div id='grid-item-6' className="grid-item">
              <Link to="/fees"/>
              FEE</div> 
            <div id='grid-item-7' className="grid-item">
              <Link to="/workshops"/>
              WORKSHOPS</div> 
            <div id='grid-item-8' className="grid-item">
              <Link to="/abouttherapy"/>
              ABOUT THERAPY</div> 
            <div id='grid-item-9' className="grid-item">
              <Link to="/consultation" />
              REQUEST CONSULTATION</div> 
         
      </div>
    );
  }
  
  export default Grid;