import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";

import "./App.css";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

export function App() {
  const [info, setInfo] = useState({});
  const [svalue, setSvalue] = useState(1);
  const [eqdata, setEqdata] = useState({});
  const [magnitude, setMagnitude] = useState("all");
  const [period, setPeriod] = useState("hour");

  useEffect(
    () => {
      fetch(
        `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitude}_${period}.geojson`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((res) => setEqdata(res))
        .catch((err) => console.error("Fetch failed:", err));
    },
    [magnitude, period] // Abhängigkeitsliste, hier leer
  );

  return (
    <div className="app">
      <Header magnitude={magnitude} period={period} />
      <Sidebar
        info={info}
        setSvalue={setSvalue}
        svalue={svalue}
        setMagnitude={setMagnitude}
        setPeriod={setPeriod}
      />
      <div className="mainArea">
        <Map setInfo={setInfo} svalue={svalue} eqdata={eqdata} />
      </div>
    </div>
  );
}
