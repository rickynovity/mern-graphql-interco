const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const FormationSchema = new Schema({
  objectives: String,
  title: String,
  source: String,
  progress: Number,
  startDate: Date,
  endDate: Date,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  statusId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Status'
  },
  languageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Language'
  },
  trainerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer'
  }
}, { timestamps: true })

module.exports = mongoose.model('Formation', FormationSchema)