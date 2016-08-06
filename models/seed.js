var seeder = require('mongoose-seed')
//
// seeder.connect('mongodb://default:pokemon@ds145365.mlab.com:45365/myapi', function() {
//   seeder.loadModels([
//     'models/project.js'
//   ])
//
// //clears the data and reloads data
//   seeder.clearModels(['Project'], function() {
//     seeder.populateModels(data, function() {
//       console.log('done populating model');
//       process.exit();
//     })
//   });
//
// });

var data = [
  {
    'model': 'Profile',
    'documents': [
      {
        name: 'Stephanie Hendricks',
        email: 'hendricks.step@gmail.com',
        description: 'Full Stack Developer in the making',
        github: 'https://github.com/byebye321'
      }
    ]
  },
  {
    'model': 'Project',
    'documents': [
      {
        'title': 'Readr',
        'link': 'https://github.com/flight846/readr-client',
        'description':'Collaborative team project, serving curated news with the use of api, and node js.'
      },
      {
        'title': 'Impossible Quiz',
        'link': 'https://github.com/byebye321/impossible-quiz',
        'description':'Quiz built with html css and Javascript that is impossible to win.'
      },
      {
        'title': 'Microblog',
        'link': 'https://nikkeicentral.herokuapp.com',
        'description': 'Micro news blog built with ruby on rails'
      }
    ]
  },
  {
    'model': 'Education',
    'documents': [
      {
        'school': 'General Assembly',
        'duration': 'May - August 2016',
        'qualification': 'Full Stack Development'
      },
      {
        'school': 'Le Cordon Bleu Australia & University of South Australia',
        'duration': '2010 - 2013',
        'qualification': 'Bachelor of Business, International Hotel Management'
      }
    ]
  },
  {
    'model': 'Work',
    'documents': [
      {
        company: 'Candeo Hospitality Management Global Headquarters',
        duration: '2015 - 2016',
        postion: 'Sales Executive - Global Expansion (Hong Kong)',
        description: 'Global sales and expansion of business'
      },
      {
        company: 'Almac Group',
        duration: '2014 - 2015',
        postion: 'Business Development Coordinator(Proposals)',
        description: 'Created Global Pharmaceutical Quotations and Proposals'
      }
    ]
  }
]

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://default:pokemon@ds145365.mlab.com:45365/myapi', function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/profile.js',
    'models/project.js',
    'models/education.js',
    'models/work.js'
  ])

  // clears the data and reloads data
  seeder.clearModels(['Profile', 'Project', 'Education', 'Work'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      console.log('done populating model');
      process.exit();
    })
  })
})
