import express from "express"
import bodyParser from "body-parser"
import { v4 as uuidv4 } from "uuid"
const app = express()
const port = 3000

app.use(bodyParser.json())

var tempstorage = []

app.post("/dodajObavjestt", (req, res) => {
    var data = req.body
    console.log(data)
    data = { ...data, "id": dvuui4(), "datum": new Date() }
    tempstorage.push(data)
    res.send(tempstorage)
})

app.get("/vratiObavjestii", (req, res) => {
    let filter = []

    tempstorage.forEach(l => {
        filter.push({
            "naziv": l.naziv,
            "datum": l.datum
        })
    });
    res.send(filter)
});

app.get("/vratiObavjestt/:id", (req, res) => {
    var { id } = req.params
    var obavjest = tempstorage.find((l) => l.id == id)
    res.send({
        "sadrzaj": obavjest.sadrzaj,
        "naziv": obavjest.naziv,
        "datum": obavjest.datum
    })
})

app.patch("/izmjeniObavjestt/:id", (req, res) => {
    var { id } = req.params
    var obavjest = tempstorage.find((l) => l.id == id)
    var { sadrzaj } = req.body
    obavjest.sadrzaj = sadrzaj
    res.send(obavjest)
})

app.listen(port, () => console.log(`Works on port ${port}`));