import { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  GeoJSON,
  useMapEvent,
} from "react-leaflet";
import data from "./usa.json";

const origin = [51.505, -0.09];

export default function Vector() {
  return (
    <MapContainer
      style={{ height: "100vh" }}
      center={origin}
      zoom={2}
      scrollWheelZoom={false}
    >
      <GeoJSON data={data} />
      <InteractiveMarker />
    </MapContainer>
  );
}

function InteractiveMarker() {
  const [position, setPosition] = useState(origin);
  useMapEvent("click", (event) => {
    setPosition(event.latlng);
  });

  return (
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}
