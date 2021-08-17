const express = require('express')
const morgan = require('morgan')
const handlebars= require('express-handlebars');
const path = require('path');

const app = express()
const port = 3000


//static path 
app.use(express.static(path.join(__dirname, 'public')))


//HTTP logger
app.use(morgan('combined'))

//Templates engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))



//Send
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})