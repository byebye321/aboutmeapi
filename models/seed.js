var seeder = require('mongoose-seed')

seeder.connect('mongodb://default:pokemon@ds145365.mlab.com:45365/myapi', function() {
  seeder.loadModels([
    'models/project.js'
  ])

//clears the data and reloads data
  seeder.clearModels(['Project'], function() {
    seeder.populateModels(data, function() {
      console.log('done populating model');
      process.exit();
    })
  });

});

var data = [
  {
    'model': 'Project',
    'documents': [
      {
        'title': 'test',
        'link': 'lin',
        'description':'des'
      }
    ]
  }
]
