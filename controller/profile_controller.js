const Profile = require('../models/profile')

function getallProfile (req, res){
  Profile.find((err, profile) => {
    res.status(200).json({profile: profile})
  })
}

module.exports = {
  index: getallProfile
}
