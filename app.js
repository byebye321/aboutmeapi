const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//this is a generic route so this will always be shown on the cosole log
app.use('/', (req, res, next) =>{
   console.log('hi')
   next()
})

app.use('/profile', (req, res) =>{
  const name = {
    name: 'Stephanie',
    age: 5,
    pet: 'a dog named dog',
    gender: 'female',
  }
  res.status(200).json(name)
})

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})
