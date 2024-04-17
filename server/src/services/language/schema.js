const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const LanguageSchema = new Schema({
  name: String
}, { timestamps: true })

module.exports = mongoose.model('Language', LanguageSchema)