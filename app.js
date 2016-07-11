const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const Project = require('./project')

//this is a generic route so this will always be shown on the cosole log
app.use('/', (req, res, next) =>{
   console.log('hi')
   next()
})

app.get('/profile', (req, res) =>{
  const name = {
    name: 'Stephanie',
    age: 5,
    pet: 'a dog named dog',
    gender: 'female',
  }
  res.status(200).json(name)
})

app.get('/projects', (req, res) => {
  const project1= new Project('aboutme', 'this is a project about me', 'yahoo.co.jp', 'doggie')
  const project2= new Project('aboutmee', 'this is a project about mee', 'yahoo.co.jp', 'doggie')
  const project3= new Project('aboutmer', 'this is a project about mer', 'yahoo.co.jp', 'doggie')
  const project4= new Project('aboutmet', 'this is a project about met', 'yahoo.co.jp', 'doggie')
  const project5= new Project('aboutmeu', 'this is a project about meu', 'yahoo.co.jp', 'doggie')
  const arrayOfProjects = [project1, project2, project3, project4, project5]
  res.status(200).json(arrayOfProjects)
})

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})
