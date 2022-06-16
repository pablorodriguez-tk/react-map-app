/* eslint import/no-webpack-loader-syntax: "off" */
//@ts-ignore
import mapboxgl from "!mapbox-gl";

import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";

mapboxgl.accessToken = "putYouraccessTokenHere";

if (!navigator.geolocation) {
  alert("Geolocation is not supported by your browser");
  throw new Error("Geolocation is not supported by your browser");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
