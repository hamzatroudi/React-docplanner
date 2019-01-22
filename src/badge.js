import React, {Component } from 'react';
import {Row,Col} from  "react-bootstrap";



const Badge=(props)=>{
    return(
    <div className="badgee" id={props.myid}>
     <div><img src ={props.item.flag}/></div>
    

    <div> <p> {props.item.texte}</p></div>
   
     
     
     <div><p>{props.item.paragraphe}</p>
     </div>
     
     
   
     </div>
     

 )
    
 }



        

export default Badge