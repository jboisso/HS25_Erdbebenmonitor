import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Marker,
  Popup,
  GeoJSON,
} from "react-leaflet";

import data from "./assets/4.5_week.geojson.json";
import borders from "./assets/plate_boundaries.geojson.json";

export const Map = ({ setInfo }) => {
  const earthquakes = data.features; // Wir benötigen nur den Feature-Array aus den Daten

  return (
    <MapContainer
      center={[5, 0]}
      zoom={2}
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png"
        attribution="Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
      />
      <GeoJSON data={borders} pathOptions={{ color: "#1a7608ff" }} />

      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
          radius={d.properties.mag ** 1.5}
          pathOptions={{
            color: "#ff333d",
            fillColor: "#ff333d",
            fillOpacity: 0.6,
          }}
        >
          <Popup>
            <div>
              <div style={{ textAlign: "center" }}>
                {d.properties.title} <br />
              </div>
              <button
                onClick={() => {
                  setInfo(d);
                }}
              >
                Info
              </button>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
