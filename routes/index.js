const express = require('express')
const router = express.Router()
const projectController = require('../controller/projects_controller')

// enable cors for all api routes - we could also define this on the app object in app.js
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// router.get('/profile', (req, res)=>{
//   res.json({lol: 'lol'})
// })

router.get('/projects', projectController.index)

module.exports = router
