// // ===============================================================================
// // LOAD DATA
// // ===============================================================================
var friends = require('../data/friends.js');
// // var Scores = friendData[1].scores;
// // console.log(Scores);
// // ===============================================================================
// // ROUTING
// // ===============================================================================

module.exports = function(app) {
	// API GET Requests
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});
    // API POST Requests
	app.post('/api/friends', function(req, res) {
		
		var newFriend = req.body;
		var userResponses = newFriend.scores;
		console.log('userResponses = ' + userResponses);

		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000;

		
		for (var i = 0; i < friends.length; i++) {

            var diff = 0;
            
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			console.log('diff = ' + diff);

			if (diff < totalDifference) {
				console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friends[i].name);
				console.log('Friend image = ' + friends[i].photo);

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		friends.push(newFriend);

		// Send appropriate response
		res.json({status: 'OK', name: matchName, photo: matchImage});
	});
};