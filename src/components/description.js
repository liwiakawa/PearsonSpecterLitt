import React, { Component } from "react";

const Description =(props)=> {
  
    return (
    <div class="description-container"><p class="description">{props.children}</p></div> 
    );
  }


export default Description;
