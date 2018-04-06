var WeatherAdmin = require('./WeatherAdmin.js');

var access = process.argv[2];
var user = process.argv[3];
var location = "";

for (var i = 4; i < process.argv.length; i++) {
	location += (process.argv[i] + " ")
};
location = location.trim();

var weatherSearch = new WeatherAdmin();

switch (access) {
	case "admin":
		weatherSearch.getData();
		break;
	case "user":
		weatherSearch.newUserSearch(user, location);
		break;
	default: console.log("Please follow the format node CLI.js (User or Admin) (Username) (Location Search")
}