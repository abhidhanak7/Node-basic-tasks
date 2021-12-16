const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3000
const route = require('../node-basic/route/route')
const mongoDB = 'mongodb://localhost/test';



mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connection successfull"))
    .catch((err) => console.log(err))

app.use(express.json())

app.use('/v1', route)



app.listen(port, () => {
    console.log(`listning to the port ${port}`)
})