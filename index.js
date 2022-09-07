const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.use('/user', require('./routes/user.js'))

app.get('/',(req,res)=>{
    res.send('<h1>API index.js is running</h1>')
})


app.listen(PORT, console.log(`Server is running on ${PORT}`))

