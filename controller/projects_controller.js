const Project = require('../models/project')

function getallProjects (req, res){
  Project.find((err, projects) => {
    res.status(200).json({projects: projects})
  })
}

module.exports = {
  index: getallProjects
}
