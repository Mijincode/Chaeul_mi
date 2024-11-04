import React, { useCallback, useRef, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const markerPosition = {
  position: { lat: 36.4885989846369, lng: 127.2605191550169 },
  title: "My Marker",
};

const libraries = ["places", "marker"];

const GoogleMapComponent = React.memo(({ center, zoom }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.REACT_APP_MAP_ID;
  const mapRef = useRef(null);
  const [loadError, setLoadError] = useState(null);
  const [markerInitialized, setMarkerInitialized] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

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
      markerContent.style.cssText = `
      width: 30px;
      height: 30px;
      background-color: #FBBC04;
      border: 3px solid #000;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      `;
      markerContent.innerHTML = "📍";

      const markerInstance =
        new window.google.maps.marker.AdvancedMarkerElement({
          map: mapRef.current,
          position: markerPosition.position,
          title: markerPosition.title,
          content: markerContent,
        });

      console.log(
        "AdvancedMarkerElement created at position:",
        markerPosition.position
      );
      setMarkerInitialized(true);

      return () => {
        if (markerInstance) {
          markerInstance.setMap(null);
        }
      };
    } else if (retryCount < 5) {
      setRetryCount((prev) => prev + 1);
      console.warn(
        `AdvancedMarkerElement is not available. Retrying...(${
          retryCount + 1
        }/5)`
      );
      setTimeout(initializeMarker, Math.pow(2, retryCount) * 1000);
    }
  }, [retryCount]);

  // const checkMarkerAvailability = useCallback(() => {
  //   if (!markerInitialized && retryCount < 5) {
  //     initializeMarker();
  //   }
  // }, [initializeMarker, markerInitialized, retryCount]);

  useEffect(() => {
    if (apiLoaded && !markerInitialized) {
      initializeMarker();
    }
  }, [apiLoaded, initializeMarker, markerInitialized]);

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

      if (!markerInitialized) initializeMarker();
    },

    [initializeMarker, mapId, markerInitialized]
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
