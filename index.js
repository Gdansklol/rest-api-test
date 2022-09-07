const { request } = require('express')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes');

app.use(bodyParser.json())
// app.use('/user',router);

const PORT = process.env.PORT || 5000

app.use('/user', require('./routes/user.js'))
//import routes from "./routes/user.js";

app.get('/',(req,res)=>{
    res.send('<h1>API index.js is running</h1>')
})


app.listen(PORT, console.log(`Server is running on ${PORT}`))

