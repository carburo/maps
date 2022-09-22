import { useEffect } from "react";
import { MapContainer, Marker, Popup, useMap } from "react-leaflet";
import leaflet from "leaflet";
import data from "./usa.json";

const position = [51.505, -0.09];

export default function Vector() {
  return (
    <MapContainer
      style={{ height: "100vh" }}
      center={position}
      zoom={2}
      scrollWheelZoom={false}
    >
      <VectorMap />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

function VectorMap() {
  const map = useMap();
  useEffect(() => {
    const jsonMap = leaflet.geoJson(data);
    map.addLayer(jsonMap);
  }, [map]);

  return null;
}
