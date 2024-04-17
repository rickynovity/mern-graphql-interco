const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const StatusSchema = new Schema({
  name: String
}, { timestamps: true })

module.exports = mongoose.model('Status', StatusSchema)