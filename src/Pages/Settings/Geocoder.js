import { useControl } from "react-map-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const Geocoder = () => {
  const ctrl = new MapboxGeocoder({
    accessToken: process.env.REACT_APP_MAPBOX,
    marker: false,
  });
  useControl(() => ctrl);
  ctrl.on("result", (e) => {});
  return null;
};

export default Geocoder;
