const express = require('express')
const router = express.Router()
const projectController = require('../controller/projects_controller')
const educationController = require('../controller/education_controller')
const workController = require('../controller/work_controller')
const profileController = require('../controller/profile_controller')



// enable cors for all api routes - we could also define this on the app object in app.js
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

router.get('/projects', projectController.index)
router.get('/education', educationController.index)
router.get('/work', workController.index)
router.get('/profile', profileController.index)

module.exports = router
