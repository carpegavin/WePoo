import React, { useState, useEffect } from "react";
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
        <button
        onClick = {()=> {
            navigator.geolocation.getCurrentPosition((position)=> {
                props.panTo({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            },()=> null);
        }}
        >Use Your Location</button>
    )
  }

  export default Locate;