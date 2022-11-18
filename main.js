const express = require('express')
const session = require('cookie-session')
const helmet = require('helmet')
const hpp = require('hpp')
const csurf = require('csurf')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path: path.resolve(__dirname, '.env')})

const app = express()

app.use(helmet())
app.use(hpp())

app.use(
  session({
    name: 'session',
    secret: process.env.COOKIE_SECRET,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  })
)
app.use(csurf())

const authRoutes = require('./routes/auth')

app.use('/auth', authRoutes)

app.listen(8080, () => {
  console.log('Listening on port 8080')
})

module.exports = app