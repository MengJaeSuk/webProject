/**
 * Created by cmm on 12/31/14.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    name: String,
    sex: String,
    age: String,
    nation: String,
    degree:String,
    university:String,
    major: String,
    skill:String,
    description: String,
    photo1: String,
    photo2: String
});

module.exports = schema;