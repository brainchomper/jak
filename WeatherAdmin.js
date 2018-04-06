var fs = require('fs');
var UserSearch = require('./UserSearch');
var moment = require('moment');

var WeatherAdmin = function () {
	this.getData = function () {
		fs.readFile("log.txt", "utf8", function (error, data) {
			console.log(data);
		});
	};

	this.newUserSearch = function (name, location) {
		var newSearch = new UserSearch(name, location)
		var logText =
			"\nName: " + newSearch.name +
			" Location: " + newSearch.location +
			" Date: " + moment(newSearch.date).format("MM-DD-YYYY");

		fs.appendFile("log.txt", logText, function (err) {
			if (err) {
				throw err;
			}
		});
		newSearch.getWeather();
	};
};

module.exports = WeatherAdmin;
