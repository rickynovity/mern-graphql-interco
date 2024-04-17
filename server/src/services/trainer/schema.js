const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const TrainerSchema = new Schema({
  name: String,
  biography: String,
  contact: {
    email: String,
    phone: String
  }
}, { timestamps: true })

module.exports = mongoose.model('Trainer', TrainerSchema)