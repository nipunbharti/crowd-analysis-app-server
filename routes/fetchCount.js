const FaceCount = require('../models/faceCountQuery');

module.exports = (app) => {

	app.get('/face_count', function(req, res) {
		FaceCount.find(function(err, count) {
			if(err) throw err;
			res.send(count);
		});
	});

};