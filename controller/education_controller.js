const Education = require('../models/education')

function getallEducation (req, res){
  Education.find((err, education) => {
    res.status(200).json({education: education})
  })
}

module.exports = {
  index: getallEducation
}
