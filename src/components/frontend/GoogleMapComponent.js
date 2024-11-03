import React, { useCallback, useRef, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const marker = {
  position: { lat: 36.4885989846369, lng: 127.2605191550169 },
  title: "My Marker",
};

const libraries = ["places", "marker"];

const GoogleMapComponent = React.memo(({ center, zoom }) => {
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

  const initializeMarker = useCallback(() => {
    if (mapRef.current && window.google?.maps?.marker?.AdvancedMarkerElement) {
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
      markerContent.innerHTML = "📍";

      const markerInstance =
        new window.google.maps.marker.AdvancedMarkerElement({
          map: mapRef.current,
          position: marker.position,
          title: marker.title,
          content: markerContent,
        });

      console.log("Marker created at position:", marker.position);

      return () => {
        if (markerInstance) {
          markerInstance.setMap(null);
        }
      };
    } else {
      console.error(
        "AdvancedMarkerElement is not available. Cannot initialize marker."
      );
      setTimeout(checkMarkerAvailability, 1000);
    }
  }, []);

  // useEffect(() => {
  //   if (apiLoaded) {
  //     const checkMarkerAvailability = () => {
  //       if (window.google?.maps?.marker?.AdvancedMarkerElement) {
  //         initializeMarker();
  //       } else {
  //         console.error("AdvancedMarkerElement is not available. Retrying...");
  //         setTimeout(checkMarkerAvailability, 1000);
  //       }
  //     };
  //     checkMarkerAvailability();
  //   }
  // }, [apiLoaded, initializeMarker]);

  const checkMarkerAvailability = useCallback(() => {
    if (window.google?.maps?.marker?.AdvancedMarkerElement) {
      initializeMarker();
    } else {
      console.error("AdvancedMarkerElement is not available. Retrying...");
      setTimeout(checkMarkerAvailability, 1000);
    }
  }, [initializeMarker]);

  const onLoad = useCallback(
    (map) => {
      mapRef.current = map;
      console.log("Map ID on Load:", mapId);

      const bounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(36.485945, 127.2602414),
        new window.google.maps.LatLng(36.48927693178, 127.260521)
      );

      map.setOptions({ mapId });
      map.fitBounds(bounds);

      checkMarkerAvailability();
    },
    [mapId, checkMarkerAvailability]
  );

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  if (loadError) {
    return <div>Error Loading Google Maps: {loadError.message}</div>;
  }
  console.log("Map ID before return:", mapId);

  return (
    <div className="googleMap-container">
      {apiLoaded ? (
        <GoogleMap
          center={center}
          zoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{ mapTypeControl: false }}
          mapId={mapId}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
});

export default GoogleMapComponent;
