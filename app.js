var request = require('request');
var colors = require('colors/safe');

// Make a POST request to the URL

console.log(colors.red("Live Cricket Scores"))

module.exports = function () {
	/* body... */

	request.post(
	    'https://powerful-tor-13817.herokuapp.com/live',
	    { json: { key: 'value' } },
	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	            var x = JSON.parse(JSON.stringify(body));
	            var l = x.Matches.length;

	            var result = "\n---------------";

	            for(var i = 0; i < l; i++){
	            	var teamA = x["Matches"][i]["Team A"];
	            	var teamB = x["Matches"][i]["Team B"];
	            	var status = x["Matches"][i]["Status"];
	            	result = result + "\nMatch : " + (i+1) + "\n";
	            	result = result + "Team A : " + teamA + "\n";
	            	result = result + "Team B : " + teamB + "\n";
	            	result = result + "Status : " + status + "\n";
	            	result = result + "\n---------------";
	            }

	            console.log(result);

	        }
	    }
	);

}
