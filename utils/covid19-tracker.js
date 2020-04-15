const request = require("request");

const covidTracker = (address, callback) => {
  covidUrl = `https://covid19.mathdro.id/api/countries/${address}`;
  request({ url: covidUrl, json: true }, (error, { body }) => {
    if (error) {
      callback(
        `Can't connect to the service.Please check your internet connection if there is a problem.`
      );
    } else if (body.error) {
      callback(`Country not found!`);
    } else {
      callback(undefined, {
        confirmed: body.confirmed.value,
        recovered: body.recovered.value,
        deaths: body.deaths.value,
        update: body.lastUpdate,
      });
    }
  });
};

module.exports = covidTracker;
