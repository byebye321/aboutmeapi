const Work = require('../models/work')

function getallWork (req, res){
  Work.find((err, work) => {
    res.status(200).json({work: work})
  })
}

module.exports = {
  index: getallWork
}
