import React, { FC, Component } from "react";
import { Link } from "react-router-dom";
import {MdPhone} from "react-icons/md"

class Phone extends Component {
  render() {
    return (
      <div className="phone-container">
          <div class="phone-number"> <MdPhone size={15} /> 123 456 789 </div> 
      </div>
    );
  }
}

export default Phone;
