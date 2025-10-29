import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";

import "./App.css";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

export function App() {
  const [info, setInfo] = useState({});
  console.log(info);

  return (
    <div className="app">
      <Header />
      <Sidebar info={info} />
      <div className="mainArea">
        <Map setInfo={setInfo} />
      </div>
    </div>
  );
}
