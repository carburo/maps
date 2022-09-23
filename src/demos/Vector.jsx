import { MapContainer, Marker, Popup, GeoJSON } from "react-leaflet";
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
      <GeoJSON data={data} />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
