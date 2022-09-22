import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import OpenStreetMap from "./demos/OpenStreetMap";
import Vector from "./demos/Vector";
// import "leaflet/dist/leaflet.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/open-street-map",
    element: <OpenStreetMap />,
  },
  {
    path: "/vector",
    element: <Vector />,
  },
]);

function Home() {
  return (
    <>
      <h1>Demos</h1>
      <ul>
        <li>
          <Link to="/open-street-map">Open Street Map</Link>
        </li>
        <li>
          <Link to="/vector">Vector</Link>
        </li>
      </ul>
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
