import React, { useState, useEffect } from "react";
import "./style.css";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng
  } from "use-places-autocomplete";
  
  import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
  } from "@reach/combobox";

  function Locate(props){

    return (
        <button class="btn-btn-warning btn-lg"
        onClick = {()=> {
            navigator.geolocation.getCurrentPosition((position)=> {
                props.panTo({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            },()=> null);
        }}
        >Current Location</button>
    )
  }

  export default Locate;