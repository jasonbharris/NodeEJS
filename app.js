// imports
const express = require('express')

const app = express()
const port = 3000


//Static Files
app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { text: 'This is EJS!!!'})
})
app.get('/about', (req, res) => {
  res.render('about', { text: 'About Page!!!'})
})


app.listen(port, () => console.log(`Listening on port ${port}`))
