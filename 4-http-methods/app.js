const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')


//static assets
app.use(express.static('./express-methods-public'))
//parse json
app.use(express.json())
//parse form
app.use(express.urlencoded({extended: false}))
//router
app.use('/api/people', people)

app.use('/api/login', auth)





app.listen(5500, () => {
    console.log('running on 5500');
})