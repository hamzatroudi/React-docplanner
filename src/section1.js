import React, {Component } from 'react';
import './section1.css';
import {Row,Col} from  "react-bootstrap";


class SecOne extends Component {
    render() { 
        return ( 
            <div className="section1-container">
            <Row className="line1">
            <Col  lg={12} md={12} sm={12} >
            <img src="https://www.docplanner.com/img/sygnet.png"></img>
            </Col>
            </Row>
            <Row className="line2">
            <Col  lg={12} md={12} sm={12} >
            <h2>Making the healthcare experience more human</h2>
            </Col>
            </Row>
            <Row className="line3">
            <Col  lg={6} md={6} sm={12} >
            <p className="p1">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
            </Col>
            <Col  lg={6} md={6} sm={12} >
            <p className="p1">We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
            </Col>
            </Row>

           
                    
            </div>
         );
    }
  }
  
  
  
    export default SecOne;