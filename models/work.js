const mongoose = require('mongoose')

const WorkSchema = mongoose.Schema({
  company: { type: String, required: true },
  duration: { type: String },
  postion: { type: String, required: true },
  description: { type: String, required: true }
})

module.exports = mongoose.model('Work', WorkSchema)
