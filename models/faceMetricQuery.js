const mongoose = require('mongoose');
const { Schema } = mongoose;

var faceMetrics = new Schema({
		image_name: String,
	},
	{collection: 'face_metrics'});
module.exports = mongoose.model('faceMetricsQuery', faceMetrics);