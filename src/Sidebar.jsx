import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const time = ["hour", "day", "week", "month"];
const mag = ["all", "1.0", "2.5", "4.5", "significant"];

export const Sidebar = ({
  info,
  svalue,
  setSvalue,
  setMagnitude,
  setPeriod,
}) => (
  <div className="aside">
    <aside>
      <Card sx={{ maxWidth: "25vw" }}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="textSecondary"
            >
              <strong>Earthquake details</strong>
            </Typography>
            <CardContent
              sx={{
                "& .MuiTypography-root": {
                  marginBottom: 1,
                  color: "text.secondary",
                  fontSize: 14,
                },
              }}
            >
              <Typography>
                <strong>Magnitude: </strong> {info.properties?.mag ?? ""}
              </Typography>
              <Typography>
                <strong>Zeitpunkt: </strong>
                {info.properties?.time
                  ? new Date(info.properties.time).toLocaleString()
                  : ""}
              </Typography>
              <Typography>
                <strong>Epizentrum: </strong>
                {info.geometry?.coordinates
                  ? `${info.geometry.coordinates[0]} E, ${info.geometry.coordinates[1]} N`
                  : ""}
              </Typography>
              <Typography>
                <strong>Ort: </strong>
                {info.properties?.place ?? ""}
              </Typography>
            </CardContent>
          </CardContent>
        </CardActionArea>
      </Card>
      <Slider
        aria-label="Size"
        value={svalue}
        onChange={(e, v) => setSvalue(v)}
        valueLabelDisplay="auto"
        step={0.5}
        marks
        min={1}
        max={3}
      />

      <div className="ButtonGroupBox">
        <ButtonGroup
          className="ButtonGroup"
          variant="text"
          aria-label="Basic button group"
          orientation="vertical"
        >
          {mag.map((m) => (
            <Button onClick={() => setMagnitude(m)}>{m}</Button>
          ))}
        </ButtonGroup>
        <ButtonGroup
          className="ButtonGroup"
          variant="text"
          aria-label="Basic button group"
          orientation="vertical"
        >
          {time.map((t) => (
            <Button onClick={() => setPeriod(t)}>{t}</Button>
          ))}
        </ButtonGroup>
      </div>
    </aside>
  </div>
);
