import React, {Component } from 'react';
import {Row,Col} from  "react-bootstrap";
import './carteviste.css';



const ItemVis=(props)=>{
    let select_box
    (props.item.select) 
    ? select_box = <button>Choose country</button>
     : select_box =''

     //     (props.item.select) && (select_box = <p>xfgcvbgcv</p>)
 
    return(
    <div className={`item1 ${props.item.backc}`}>
    <div className="cartetitle">    
    <p> {props.item.title}</p> 
</div>
    
    <div className="des1"><p> {props.item.texte}</p>
    

     </div> 
     
     <div className="des2">
     {/* {select_box}  */}
     <img src ={props.item.image} className="imgcarte"/>

     </div>
     
     
   
     </div>
     

 )
    
 }



        

export default ItemVis