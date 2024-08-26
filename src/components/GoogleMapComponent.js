// src/components/GoogleMapComponent.js
import React, { useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

const GoogleMapComponent = ({ center, zoom, marker }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const onLoad = useCallback(
    (map) => {
      const bounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(36.484034, 127.2602414), // Southwest corner
        new window.google.maps.LatLng(36.48927693178, 127.260521) // Northeast corner
      );
      map.fitBounds(bounds);
      map.setZoom(zoom);
    },
    [zoom]
  );

  const onUnmount = useCallback(() => {}, []);

  return (
    <div className="googleMap-container">
      {isLoaded ? (
        <GoogleMap
          center={center}
          zoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          options={{
            mapTypeControl: false,
          }}
        >
          <AdvancedMarker key={marker.key} position={center} title="채울미">
            <Pin
              background={"#FBBC04"}
              glyphColor={"#000"}
              borderColor={"#000"}
            />
          </AdvancedMarker>
        </GoogleMap>
      ) : (
        <div>Loading...</div> // Optional: Display a loading message
      )}
    </div>
  );
};

export default GoogleMapComponent;
