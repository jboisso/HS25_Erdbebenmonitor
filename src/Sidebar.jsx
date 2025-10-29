export const Sidebar = ({ info }) => (
  <div className="aside">
    <aside>
      <p>Stärke: {info.properties?.mag ?? ""}</p>
      <p>
        Zeitpunkt:{" "}
        {info.properties?.time
          ? new Date(info.properties.time).toLocaleString()
          : ""}
      </p>
      <p>
        Epizentrum:{" "}
        {info.geometry?.coordinates
          ? `${info.geometry.coordinates[0]} E, ${info.geometry.coordinates[1]} N`
          : ""}
      </p>
      <p>Ort: {info.properties?.place ?? ""}</p>
    </aside>
  </div>
);
