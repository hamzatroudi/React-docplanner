import React, {Component } from 'react';
import './App.css';



const Item=({item})=>{
    return(<div className="item">
    <div>    <img src ={item.image} className="imglist"/>
</div>
    
    <div className="desous"><p> {item.title}</p>
     <button className="btncard">{item.bouton}</button></div> 
     
     
   
     </div>
 )
    
 }



        

export default Item