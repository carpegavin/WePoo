import React, { useState, useEffect } from "react";
import API from "../../utils/API"
import mapStyles from "./mapStyles.js"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import "./Map.css";
import Search from "../../components/Search"
import Locate from "../../components/Locate";

const libraries = ["places"]
const mapContainerStyle = {
  marginTop: "2vh",
  marginBottom: "5vh",
  width: "100vw",
  height: "80vh",
}
let center = {};

navigator.geolocation.getCurrentPosition((position)=> {
  center={
      lat: position.coords.latitude,
      lng: position.coords.longitude
  }
},()=> center={lat: 30.2672,lng:-97.7431});

const options = {
  style: mapStyles,
  disableDefaultUI: true ,
  zoomControl : true,
}

function Map() {
  
  const {isLoaded,loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_APIKEY,
    libraries
  })


  const [markers, setMarkers ] = useState([]);
  const [selected, setSelected] = useState(null);
  const [info, setInfo] = useState(null);
  const [amenities, setAmenities] = useState(null);

  function setAmenity(data){
    let array=[];
    if(data){
      if(data.handicapAccess){
        array.push("Handicap Accessible")
      };
      if(data.babyChangingTable){
        array.push("Baby Changing Table")
      };
      if(data.singlePersonBath){
        array.push("Single Person Bathroom")
      };
      if(data.feminineHygieneProducts){
        array.push("Feminine Hygiene Available")
      };
      if(data.public){
        array.push("Public Access")
      }
    }
    setAmenities(array.join(", "));
  }

  function loadMarkers(){
    API.getReviews()
      .then( res => {
        let markerArray=[]
        res.data.forEach(item => {
        let obj = {
          lat:item.lat,
          lng:item.lon,
          time: new Date()
        }
        markerArray.push(obj)
       })
        setMarkers(markerArray)
      }
      )
      .catch(error=>console.log(error))
  }

  function loadReviewInfo(id){
    console.log(id)
    API.getReview(id)
      .then(res=>
        { setInfo(res.data[0]);
          setAmenity(res.data[0].review[0])
        })
      .catch(error=>console.log(error))
  }

  useEffect(()=>{
    loadMarkers()
  },[])

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
    mapRef.current.setZoom(18)
  },[])

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps"

  return (
    <div>
        <Locate panTo = {panTo}/>
        <Search panTo = {panTo}/>
        <GoogleMap
          mapContainerStyle = {mapContainerStyle}
          zoom = {18}
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
              let id = marker.lat.toString()+"wepoo"+marker.lng.toString();
              loadReviewInfo(id)
            }}
            // icon={{
            //   url: "./toiletpaper.svg",
            //   scalredSize: new window.google.maps.Size(30,30),
            //   origin: new window.google.maps.Point(0,0),
            //   anchor: new window.google.maps.Point(15,15)
            // }}
            />
            ))}

            {selected ? (<InfoWindow style={{color: "red" }}
              position={{lat:selected.lat,lng:selected.lng}}
              onCloseClick={()=> {
                setSelected(null);
                setInfo(null);
                // setAmenities(null)
              }}
            >
              {info && amenities ? (<div className="InfoWindow">
                <h2 className="justify-content-center">{info.locationName} </h2>
                <p>Rating: {info.review[0].rating}</p>
                <p>Amenities: {amenities}</p>
                <a className="reviewButt" href={`/review/${selected.lat}wepoo${selected.lng}`}><button>Leave A Review</button></a>
              </div>) : (<div>
                <h2>No Reviews for this Location</h2>
                
               <a href={`/review/${selected.lat}wepoo${selected.lng}`}><button>Leave A Review</button></a>
              </div>)}
            </InfoWindow>): null}
        </GoogleMap>
    </div>
  );
}

export default Map;
