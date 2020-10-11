import React, { Component } from "react";

const ActionButton =(props)=> {
  
    return (
    <div class="action-container"><div class="action">{props.children}</div></div> 
    );
  }


export default ActionButton;
