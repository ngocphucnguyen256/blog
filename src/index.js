const express = require('express')
const morgan = require('morgan')
const handlebars= require('express-handlebars');
const path = require('path');

const app = express()
const port = 3000

const route=require('./routes')

//middleware
app.use(express.urlencoded())
app.use(express.json())

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

route(app)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})