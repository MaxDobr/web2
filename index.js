const express = require('express')
const path = require("path")
const {json} = require("express");
const fs = require("fs")
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('Good morning!')
})

app.get('/reg', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname)})
})

app.get('/hi', (req, res) => {
    res.send('Hi!')
})

app.get('/Hello', (req, res) => {
    res.send('Hello! Get inf')
})

app.post('/reg-data', (req, res) => {
    console.log(">>>>>", req.body)
    res.status(201).send('Hello! Post inf')
    fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err)=>{
        if (err) {
            res.status(500).send("User not added")
        } else {
            res.status(201).send("User added")

        }

    })
})

app.put('/Hello', (req, res) => {
    res.send('Hello! Put inf')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})