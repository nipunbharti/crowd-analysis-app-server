const mongoose = require('mongoose');
const { Schema } = mongoose;

var faceCount = new Schema({face_count: Number, image_name: String}, {collection: 'face_count'});
module.exports = mongoose.model('faceCountQuery', faceCount);