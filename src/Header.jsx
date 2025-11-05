import Typography from "@mui/material/Typography";

export const Header = ({ magnitude, period }) => (
  <div className="header">
    <header>
      <Typography
        variant="h3"
        align="left"
        gutterBottom
        sx={{ color: "#5352a9", font: "Bahnschrift" }}
      >
        IGEO Erdbebenmonitor
      </Typography>
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{ color: "#5352a9", font: "Bahnschrift" }}
      >
        Magnitude: {magnitude} | Timeperiod: {period}
      </Typography>
    </header>
  </div>
);
