import React, { Component } from 'react';
import Badge from './badge.js';
import {Row,Col} from  "react-bootstrap";






const tab2=[
    {
     flag:"https://www.docplanner.com/img/flag.png",
     texte:"Leader in 10 countries",
     paragraphe:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
    }
    ,
    {
        flag:"https://www.docplanner.com/img/visits.png",
        texte:"1 million appointments",
        paragraphe:"booked last month"

       },
       {
        flag:"https://www.docplanner.com/img/patients.png",
        texte:"30 million unique patients",
        paragraphe:"visit us every month"
       },
       {
        flag:"//www.docplanner.com/img/doctors.png",
        texte:"2 million active doctors",
        paragraphe:"trust in our solutions"
       }

]

class Listebadge extends Component {
   
    render() { 
        return(
        
        <Row className="badgeliste-container">
       
        { tab2.map((el,index)=>
        <Col  lg={5} md={12} sm={12} >
        <Badge item={el} key={index} myid={`fx${index}`} />
        </Col>
        
           )
    
        }   
    </Row>
        );
    }
}
 
export default Listebadge;