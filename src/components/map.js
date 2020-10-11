import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
      style={{width:"100%",height:"100%" }}
        google={this.props.google}
        initialCenter={{
          lat: 40.6426155,
          lng: -73.9276781,
        }}
        zoom={16}
        
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCEo2jtsHal0XsGA6LThmWd4TDRABDtQz0",
})(MapContainer);
