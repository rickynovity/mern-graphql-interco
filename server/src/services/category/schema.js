const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const CategorySchema = new Schema({
  name: String
}, { timestamps: true })

module.exports = mongoose.model('Category', CategorySchema)