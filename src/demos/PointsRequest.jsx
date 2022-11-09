// import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, GeoJSON } from "react-leaflet";
import { getData } from "./fake-api";
import data from "./usa.json";
import useSWR from "swr";

const origin = [51.505, -0.09];

export default function PointsRequest() {
  const { data: points } = useSWR("/api/points", getData);

  // const [points, setPoints] = useState([]);
  // useEffect(() => {
  //   // fetch('https://api.example.com/items');
  //   getData().then((info) => {
  //     setPoints(info);
  //   });
  // }, []);

  return (
    <MapContainer
      style={{ height: "100vh" }}
      center={origin}
      zoom={2}
      scrollWheelZoom={false}
    >
      <GeoJSON data={data} />
      {points.map((info) => {
        return <StaticMarker key={info.id} position={info.point} />;
      })}
    </MapContainer>
  );
}

function StaticMarker({ position }) {
  return (
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}
