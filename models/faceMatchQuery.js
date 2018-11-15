const mongoose = require('mongoose');
const { Schema } = mongoose;

var faceMatch = new Schema({image_name: String, face_name: String, similarity: Number}, {collection: 'face_recognition'});
module.exports = mongoose.model('faceMatchQuery', faceMatch);