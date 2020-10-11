import React, { Component } from "react";

const Title =(props)=> {
  
    return (
    <div class="title-container"><h2 class="title">{props.children}</h2></div> 
    );
  }


export default Title;
