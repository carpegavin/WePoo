import React, { useState, useEffect } from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import { formatRelative} from "date-fns";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxIput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox"

import Search from "../../components/Search"
import Locate from "../../components/Locate";

const libraries = ["places"]
const mapContainerStyle = {
  width: "100vh",
  height: "100vh",
}

const center = {
  lat: 30.2672 ,
  lng: -97.7431
}

const options = {
  disableDefaultUI: true ,
  zoomControl : true
}

function Map() {
  
  const {isLoaded,loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries
  })

  const [markers, setMarkers ] = useState([]);
  const [selected, setSelected] = useState(null)

  const onMapClick = React.useCallback ((event)=> {
    setMarkers ( (current) => [
      ...current, {
        lat: event.latLng.lat() ,
      lng: event.latLng.lng() ,
      time: new Date()
      },
    ])
  },[])

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map)=> {
    mapRef.current = map
  }, [])

  const panTo = React.useCallback(({lat,lng})=> {
    mapRef.current.panTo({lat,lng});
    mapRef.current.setZoom(10)
  },[])

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps"

  return (
    <div>
      {/* <h2>WePoo</h2> */}
        <Locate panTo = {panTo}/>
        <Search panTo = {panTo}/>
        <GoogleMap
          mapContainerStyle = {mapContainerStyle}
          zoom = {14}
          center = {center}
          options = {options}
          onClick = {onMapClick}
          onLoad={onMapLoad}
        >
          {markers.map((marker) =>( 
            <Marker 
            key={marker.time.toISOString()} 
            position={{lat: marker.lat, lng : marker.lng}}
            onClick={()=> {
              setSelected(marker);
            }}
            />
            ))}

            {selected ? (<InfoWindow
              position={{lat:selected.lat,lng:selected.lng}}
              onCloseClick={()=> {
                setSelected(null)
              }}
            >
              <div>
                <h2>Bear Spotted</h2>
                <p>Spotted {formatRelative(selected.time , new Date())}</p>
              </div>
            </InfoWindow>): null}
        </GoogleMap>
    </div>
  );
}

export default Map;
