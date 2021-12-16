const { Console } = require("console")
const e = require("express")
const express = require("express")
const userdata = require("../model/mode")
const route = express()
const jwt = require('jsonwebtoken')




//api for insert many data into the database
route.post('/route', async (req, res) => {
    console.log(req.body)
    try {
        const result = await userdata.insertMany(req.body);
        res.json(result);
        console.log(result)
    } catch (err) {
        res.send(err)
    }
})





//api for get the data for displaying the records in the postman
route.get('/route', async (req, res) => {
    try {
        const reactPlaylist = new userdata({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        const result = await userdata.find()
        res.send(result);
    } catch (err) {
        res.send(err)
    }
})




//api for updating the records in the database
route.patch('/route/:id', async (req, res) => {
    console.log(req.body.email)
    try {
        const _id = req.params.id;
        console.log("Id : ", _id)
        await userdata.findByIdAndUpdate(_id, req.body);
        console.log("Result : ", result)
        res.send(result);
    } catch (e) {
        res.status(400).send(e)
    }
})





//api for deleting the records in the database
route.delete('/route/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        console.log("Id : ", _id)
        await userdata.findByIdAndDelete(_id, req.body);
        console.log("Result : ", result)
        res.send(result);
    } catch (e) {
        res.status(400).send(e)
    }

})




//jwt token signup example 
route.post('/route/login', (req, res) => {
    const user = { id: 3 }
    const token = jwt.sign({ user }, 'my-secret-key')
    res.json({
        token: token
    })
})





// exporting the routes
module.exports = route





