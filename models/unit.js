const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Unit = mongoose.model('Units', unitSchema);
module.exports = Unit;
