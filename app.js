const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
// const Project = require('./project')
const routes = require('./routes/index')

app.use('/', routes)


// app.get('/profile', (req, res) =>{
//   const name = {
//     name: 'Stephanie Hendricks',
//     gender: 'female',
//     linkedin: '',
//     github: ''
//   }
//   res.status(200).json(name)
// })
//
// app.get('/projects', (req, res) => {
//   const project1= new Project('Biography Page', 'this is a project about me', 'using html css and JS')
//   const project2= new Project('aboutmee', 'this is a project about mee', 'yahoo.co.jp', 'doggie')
//   const project3= new Project('aboutmer', 'this is a project about mer', 'yahoo.co.jp', 'doggie')
//   const project4= new Project('aboutmet', 'this is a project about met', 'yahoo.co.jp', 'doggie')
//   const project5= new Project('aboutmeu', 'this is a project about meu', 'yahoo.co.jp', 'doggie')
//   const arrayOfProjects = [project1, project2, project3, project4, project5]
//   res.status(200).json(arrayOfProjects)
// })
//
// app.get('/skills ', (req, res) => {
//   const skills1= new Skill('html, css')
//   const skills2= new Skill('backend')
// })
//
// app.get('/work', (req, res) => {
//   const work1= new Work('first job')
//   const work2= new Work('second job')
//   const work3= new Work('third job')
// })
//
// app.get('/education', (req, res) =>{
//   const education1= new Education('university')
// })
//
// app.get('/work', (req, res) => {
//   const work1= "business dev"
//   const work2= "global sales"
// })

mongoose.connect('mongodb://default:pokemon@ds145365.mlab.com:45365/myapi');

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})

//mongoose.connect('mongodb://127.0.0.1:27017/steph');

module.exports = app
