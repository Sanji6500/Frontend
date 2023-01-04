import React, { useState } from "react";
import { Textbox } from "../../Elements/boxs";
import { SubmitButton } from "../../Elements/Buttons";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MdRoom } from "react-icons/md";
import Geocoder from "./Geocoder";

function Settings() {
  // mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;
  const [viewport, setViewport] = useState({
    latitude: 50,
    longitude: 50,
    zoom: 5,
  });

  const handleViewportChange = (newViewport, item) => {
    console.log(item + "------" + newViewport);
    setViewport(newViewport);
  };

  const [NewPlace, setNewPlace] = useState(null);

  const addMark = (e) => {
    const longitude = e.lngLat.lng;
    const latitude = e.lngLat.lat;
    setNewPlace({ longitude, latitude });
  };

  return (
    <div className=" flex w-full py-8 px-8 ">
      <div className="w-1/3    py-4 px-8 h-full bg-white">
        <h3 className="text-xl text-gray-900font-Nunito font-bold   my-2 ">
          Change Password and Email
        </h3>
        <form onSubmit={() => {}}>
          <Textbox TextboxName="Email" placeholder=" Please Enter Email" />
          <Textbox
            TextboxName="Username"
            placeholder=" Please Enter your Username"
          />
          <Textbox
            TextboxName="Password "
            placeholder=" Please Enter Password"
          />
          <Textbox
            TextboxName="Password again"
            placeholder=" Please Enter Email"
          />
          <div className=" py-3">
            <SubmitButton value="Add Product" />
          </div>
        </form>
      </div>

      <div className="p-2"></div>
      <div className="w-4/5  py-4 px-8 h-full bg-white">
        <h3 className="text-xl text-gray-900font-Nunito font-bold   my-2 ">
          Change Addresse
        </h3>
        <form className="" onSubmit={() => {}}>
          <div className=" flex">
            <div className=" w-1/2">
              <Textbox TextboxName="Street " placeholder="Please Enter Value" />
              <Textbox TextboxName="State" placeholder="Please Enter Value" />
              <Textbox
                TextboxName="Country Name"
                placeholder="Please Enter Value"
              />
            </div>

            <div className=" ml-8">
              <Textbox
                TextboxName="Hause Number"
                placeholder="Please Enter Value"
              />
              <Textbox
                TextboxName="Post Code"
                placeholder="Please Enter Value"
              />
            </div>
          </div>

          <div className=" py-3">
            <SubmitButton value="Add Product" />
          </div>
        </form>

        <div className=" rounded-lg">
          <Map
            style={{ width: "100%", height: 400, borderRadius: 8 }}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            onDblClick={addMark}
            initialViewState={{
              longitude: -100,
              latitude: 40,
              zoom: 3.5,
            }}
          >
            {NewPlace && (
              <Marker
                latitude={NewPlace.latitude}
                longitude={NewPlace.longitude}
              >
                <MdRoom size={32} />
              </Marker>
            )}
            <GeolocateControl
              position="top-left"
              onGeolocate={(e) => console.log(e)}
            />
            <Geocoder className="  " />
          </Map>
        </div>
      </div>
    </div>
  );
}

export default Settings;
