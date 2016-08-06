const mongoose = require('mongoose')

const ProfileSchema = mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true},
  description: { type: String, required: true},
  github: { type: String }
})

module.exports = mongoose.model('Profile', ProfileSchema)
