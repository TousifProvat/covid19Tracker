const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();

//directory
const publicDirectory = path.join(__dirname + "/public");
const chartjsDirectory = path.join(__dirname + "/node_modules");
const partialsDirectory = path.join(__dirname + "/views/partials");

//static file
app.use(express.static(publicDirectory));
//chartjs-to use in html
app.use(express.static(chartjsDirectory));

//partials
hbs.registerPartials(partialsDirectory);

//view engine
app.set("view engine", "hbs");

//utils
const covidTracker = require("./utils/covid19-tracker");

//routes
app.get("/", (req, res) => {
  covidTracker(
    "countries/bangladesh",
    (error, { confirmed, recovered, deaths, update } = {}) => {
      var currentDate = new Date(update);
      var date = currentDate.getDate();
      var month = currentDate.getMonth();
      var year = currentDate.getFullYear();

      var dateString = date + "-" + (month + 1) + "-" + year;

      if (error) {
        return res.send(error);
      } else {
        res.render("index", {
          country: "Bangladesh",
          confirmed,
          recovered,
          recoverRate: ((recovered * 100) / confirmed).toFixed(1),
          deaths,
          deathRate: ((deaths * 100) / confirmed).toFixed(1),
          infected: confirmed - (recovered + deaths),
          dateString,
        });
      }
    }
  );
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening to port 3000");
});
