import React, {Component } from 'react';
import './section3.css';
import {Row,Col} from  "react-bootstrap";
import Badge from "./badge.js";
import Listebadge from './liste-badge';


class SecThree extends Component {
    render() { 
        return ( 
            <div className="section3-container">
           <Row className="sec3">
           <Col  lg={6} md={6} sm={12} >
           <div>
           <p className="psecthree">
           The world's <br></br>
           biggest healthcare platform
           </p>
           <p className="psecthree_">
           We work from 6 offices all over the world, bringing Docplanner <br></br>Group to life in almost 20 countries.
           </p>
           </div>
           </Col>
           <Col  lg={6} md={6} sm={12} >
           
           <Listebadge/>
           </Col>
           
           
           
           
           
           </Row>

           
                    
            </div>
         );
    }
  }
  
  
  
    export default SecThree;