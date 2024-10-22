import React, { useCallback, useRef, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const marker = {
  position: { lat: 36.4885989846369, lng: 127.2605191550169 },
  title: "My Marker",
};

const libraries = ["places", "marker"];

const GoogleMapComponent = ({ center, zoom }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.REACT_APP_MAP_ID;
  const mapRef = useRef(null);
  const [loadError, setLoadError] = useState(null);

  const { isLoaded: apiLoaded, loadError: apiLoadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries,
    version: "weekly",
  });

  useEffect(() => {
    if (apiLoadError) {
      console.error("Error Loading Google Maps:", apiLoadError);
      setLoadError(apiLoadError);
    }
  }, [apiLoadError]);

  useEffect(() => {
    if (apiLoaded) {
      const checkMarkerAvailability = () => {
        if (window.google?.maps?.marker?.AdvancedMarkerElement) {
          console.log("AdvancedMarkerElement is available");
          initializeMarker();
        } else {
          console.error("AdvancedMarkerElement is not available. Retrying...");
          setTimeout(checkMarkerAvailability, 1000);
        }
      };
      checkMarkerAvailability();
    }
  }, [apiLoaded]);

  const initializeMarker = () => {
    const markerContent = document.createElement("div");
    markerContent.style.width = "30px";
    markerContent.style.height = "30px";
    markerContent.style.backgroundColor = "#FBBC04";
    markerContent.style.border = "3px solid #000";
    markerContent.style.borderRadius = "50%";
    markerContent.style.display = "flex";
    markerContent.style.alignItems = "center";
    markerContent.style.justifyContent = "center";
    markerContent.style.fontSize = "20px";
    markerContent.style.fontBold = "20px";

    markerContent.innerHTML = "📍";

    const markerInstance = new window.google.maps.marker.AdvancedMarkerElement({
      map: mapRef.current,
      position: marker.position,
      title: marker.title,
      content: markerContent,
    });

    if (markerInstance) {
      console.log("Marker created at position:", marker.position);
    } else {
      console.error(
        "Failed to create marker. Ensure AdvancedMarkerElement is loaded correctly."
      );
    }
  };

  const onLoad = useCallback((map) => {
    mapRef.current = map;

    const bounds = new window.google.maps.LatLngBounds(
      new window.google.maps.LatLng(36.485945, 127.2602414),
      new window.google.maps.LatLng(36.48927693178, 127.260521)
    );

    map.setOptions({
      mapId: mapId,
    });

    map.fitBounds(bounds);
    initializeMarker();
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, [mapId, initializeMarker]);

  if (loadError) {
    return <div>Error Loading Google Maps: {loadError.message}</div>;
  }

  return (
    <div className="googleMap-container">
      {apiLoaded ? (
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
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default GoogleMapComponent;
