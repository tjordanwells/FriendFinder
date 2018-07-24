var users = require("../data/friends");
var path = require("path");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(users);
    });
    
    app.post("/api/friends", function(req, res) {

        var match = {
			name: "",
			photo: "",
		    difference: 100
		};

		var user = req.body;
		var userScores 	= user.scores;
        var total = 0;

		for  (var i = 0; i < users.length; i++) {

			totalDifference = 0;

			for (var j = 0; j < users[i].scores[j]; j++) {

				total += Math.abs(parseInt(userScores[j]) - parseInt(users[i].scores[j]));

				if (total <= match.difference){

					match.name = users[i].name;
					match.photo = users[i].photo;
					match.difference = total;
				}
			}
		}

		users.push(user);

		res.json(match);
        
    });
};