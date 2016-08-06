const Project = require('../models/project')

function listProjects (req, res){
  res.status(200).json({lol: 'lol'})
}

function getallProjects (req, res){
  Project.find((err, projects) => {
    res.status(200).json({projects: projects})
  })
}

module.exports = {
  index: getallProjects
}
