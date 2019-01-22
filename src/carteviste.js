import React, { Component } from 'react';
import ItemVis from './item-visite';
import {Row,Col} from  "react-bootstrap";
import './carteviste.css';





const tab1=[
    {
     title:"For patients",
     texte:"Find a doctor, book a visit and solve any health-related doubt",
     image:"https://www.docplanner.com/img/screen-marketplace@2x.png",
     backc:"green_",
     select: true,
    }
    ,
    {
        title:"For doctors",
        texte:"Save time managing visits and cut no-shows by half",
        image:"https://www.docplanner.com/img/screen-saas@2x.png",
        backc:"blue_",
        select: false

       }

]

class Carte extends Component {
   
    render() { 
        return ( 
        <Row className="carteviste-container">
       
            { tab1.map((el,index)=>
            <Col  lg={6} md={12} sm={12} >
            <ItemVis item={el} key={index}  />
            </Col>
            
               )
        
            }   
        </Row>
        );
    }
}
 
export default Carte;