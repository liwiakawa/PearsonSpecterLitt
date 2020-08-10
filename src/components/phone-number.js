import React, { FC, Component } from "react";
import { Link } from "react-router-dom";
import {MdPhone} from "react-icons/md"

class Phone extends Component {
  render() {
    return (
      <div className="phone">
          <div> <MdPhone /> 123456789 </div> 
      </div>
    );
  }
}

export default Phone;
