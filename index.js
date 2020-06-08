// Import packages
const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))
// App

// Morgan
app.use(morgan('tiny'))
// First route
app.get('/', (req, res) => {
    res.json({ message: 'Hello worlds' })
})
// Starting server
app.listen('1337')
