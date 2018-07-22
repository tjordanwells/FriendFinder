var users = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(users);
    });
    
    app.post("/api/friends", function(req, res) {
        
        var newUser = req.body;
        var userRes = newUser.scores

        var match = "";
        var matchPic = "";

        var totalDiff = 1000;

        for (var i = 0; i < users.length; i++) {

			var difference = 0;
			for (var j = 0; j < userRes.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userRes[j]);
			}
			if (diff < totalDifference) {

				totalDiff = diff;
				match = users[i].name;
				matchPic = users[i].photo;
			}
        }
            
        users.push(newUser);
    
        res.json({matchName: matchName, matchImage: matchImage});
        
    });
};