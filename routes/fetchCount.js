const FaceCount = require('../models/faceCountQuery');
const FaceMetrics = require('../models/faceMetricQuery');
const FaceMatch = require('../models/faceMatchQuery');

module.exports = (app) => {

	app.get('/face_count', function(req, res) {
		FaceCount.find(function(err, count) {
			if(err) throw err;
			res.send(count);
		});
	});

	app.get('/face_metrics', function(req, res) {
		FaceMetrics.find(function(err, metrics) {
			if(err) throw err;
			res.send(metrics);
		});
	});

	app.post('/face_match', function(req, res) {

		let { body } = req;
		let { imageName } = body;
		FaceMatch.find({
		  image_name: imageName
		}, (err, matches) => {
			if(err) throw err;
			res.send(matches);
		});
	});

};