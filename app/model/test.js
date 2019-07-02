const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const testSchema = new Schema({
    __v: {type: Number, select: false},
    name: { type: String, required: true }
})

module.exports = model('test', testSchema);