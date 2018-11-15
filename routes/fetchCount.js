const FaceCount = require('../models/faceCountQuery');
const FaceMetrics = require('../models/faceMetricQuery');

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

};