const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({
    teams: [
      {
        id: 1,
        name: "Rögle BK",
        city: "Ängelholm",
        founded: 1932,
        logo: "/src/assets/rögle.svg", // Rögle BK
        colors: "#006633, #FFFFFF",
      },
      {
        id: 2,
        name: "Färjestad BK",
        city: "Karlstad",
        founded: 1932,
        logo: "/src/assets/färjestad.svg", // Färjestad BK
        colors: "#006633, #FFCC00",
      },
      {
        id: 3,
        name: "Luleå HF",
        city: "Luleå",
        founded: 1977,
        logo: "/src/assets/luleå.svg", // Luleå HF
        colors: "#FF0000, #FFFFFF",
      },
      {
        id: 4,
        name: "Skellefteå AIK",
        city: "Skellefteå",
        founded: 1921,
        logo: "/src/assets/saik.svg", // Skellefteå AIK
        colors: "#FFCC00, #000000",
      },
      {
        id: 5,
        name: "HV71",
        city: "Jönköping",
        founded: 1971,
        logo: "/src/assets/hv71.svg", // HV71
        colors: "#0066CC, #FFCC00",
      },
      {
        id: 6,
        name: "Malmö Redhawks",
        city: "Malmö",
        founded: 1972,
        logo: "/src/assets/blö.svg", // Malmö Redhawks
        colors: "#CC0000, #000000",
      },
      {
        id: 7,
        name: "Växjö Lakers",
        city: "Växjö",
        founded: 1997,
        logo: "/src/assets/lakers.svg", // Växjö Lakers
        colors: "#0066CC, #FFFFFF",
      },
      {
        id: 8,
        name: "Örebro HK",
        city: "Örebro",
        founded: 1990,
        logo: "/src/assets/örebro.svg", // Örebro HK
        colors: "#000000, #FF0000",
      },
      {
        id: 9,
        name: "Frölunda HC",
        city: "Gothenburg",
        founded: 1938,
        logo: "/src/assets/frölunda.svg", // Frölunda HC
        colors: "#990000, #FFFFFF",
      },
      {
        id: 10,
        name: "Timrå IK",
        city: "Timrå",
        founded: 1938,
        logo: "/src/assets/timrå.svg", // Timrå IK
        colors: "#CC0000, #FFFFFF",
      },
      {
        id: 11,
        name: "Leksands IF",
        city: "Leksand",
        founded: 1919,
        logo: "/src/assets/leksand.svg", // Leksands IF
        colors: "#0066CC, #FFFFFF",
      },
      {
        id: 12,
        name: "Brynäs IF",
        city: "Gävle",
        founded: 1912,
        logo: "/src/assets/brynäs.svg", // Brynäs IF
        colors: "#000000, #FFCC00",
      },
    ],
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
