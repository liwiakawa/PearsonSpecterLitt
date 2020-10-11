import React, { Component } from "react";

const GhostButton =(props)=> {
  
    return (
    <div class="ghost-container"><div class="ghost">{props.children}</div></div> 
    );
  }


export default GhostButton;
