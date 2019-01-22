import React, { Component } from 'react';
import './App.css';



import Item from './item.js'


const tab=[
    {image:"https://www.docplanner.com/images/warsaw.png",
     title:"Warsaw",
     bouton:"SEE OPENNINGS"}
     ,
     {image:"https://www.docplanner.com/images/barcelona.png",
     title:"Barcelona",
     bouton:"SEE OPENNINGS"},

     {image:"https://www.docplanner.com/images/istanbul.png",
     title:"Istanbul",
     bouton:"SEE OPENNINGS"},
     {image:"https://www.docplanner.com/images/rome.png",
     title:"Rome",
     bouton:"SEE OPENNINGS"},
     {image:"https://www.docplanner.com/images/mexico-city.png",
     title:"Mexico City",
     bouton:"SEE OPENNINGS"},
     {image:"https://www.docplanner.com/images/curitiba.png",
     title:"Curitiba",
     bouton:"SEE OPENNINGS"}

]


class List extends Component {
   
    render() { 
        return ( <div className="list">
        

            { tab.map((el,index)=><Item item={el} key={index} />)}
           

      
         
        </div>);
    }
}
 
export default List;