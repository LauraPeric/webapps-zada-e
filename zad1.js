import express from "express"
import bodyParser from "body-parser"
import connect from './db,js'
import mongo from 'mongodb'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/art/id:', async (req, res) => {
    let id = req.params.id
    let db = await connect()
    let doc = await db.collection('art').findOne({ _id: mongo.ObjectId(id) })
    if (doc) {
        res.json({ "status": "ok", "data": doc })
    }
    else {
        res.json({ "status": "failed" })
    }
})

app.post('/saveitem', async (req, res) => {
    let db = await connect()
    let data = req.body
    let result = await db.collection('saveitem').InsertOne(data)
    if (result.insertedId) {
        res.json({ "status": "OK", "message": 'item inserted with ${result.insertedId}' })
    }
    else {
        res.json({ "status": "failed" })
    }
})

app.patch('/updateitemprice/id:', async (req, res) => {
    let data = req.body
    let id = req.params.id
    let db = await connect()
    let result = await db.collection('/updateitemprice/id:').updateOne(
        { _id: mongo.ObjectId(id) },
        { $set: data, }
    )
    res.json(result)
})

app.delete('/art/id:', async (req, res) => {
    let id = req.params.id
    let db = await connect()
    let result = await db.collection('art').deleteOne(
        { _id: mongo.ObjectId(id) }
    )
    if (result.deleteCount === 1) {
        res.json({ "status": "OK" })
    }
    else {
        res.json({ "status": "failed" })
    }
})