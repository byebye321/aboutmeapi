const mongoose = require('mongoose')

const EducationSchema = mongoose.Schema({
  school:{ type: String, required: true },
  duration:{ type: String, required: true},
  qualification: { type: String, required: true}
})

module.exports = mongoose.model('Education', EducationSchema)
