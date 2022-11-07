import express from "express"
import bodyParser from "body-parser"
import { v4 as uuidv4 } from "uuid"
const app = express()
const port = 3000

app.use(bodyParser.json())

var autorii = []

app.post("/dodajAutoraa", (req, res) => {
    var pogreska = false
    var data = req.body

    if (!data.djela || !data.naziv || Object.keys(data).length != 2) {
        res.send({ "Error": "KRIVI KLJUCEVI" });
        pogreska = true;
    }


    data.djela.forEach(l => {
        if (l.length > 20) {
            res.send({ "Error": `DJELO ${l} IMA VISE OD 20 ZNAKOVA` });
            pogreska = true;
        }
    });

    if (!pogreska) {
        data = { ...data, "id": uuidv4(), "datum": new Date() }
        autorii.push(data)
        res.send(autorii)
    }
});

app.get("/vratiAutoree", (req, res) => {
    let filter = []

    autorii.forEach(l => {
        filter.push({
            "naziv": l.naziv,
            "djela": l.djela
        })
    });
    res.send(filter)
})

app.delete("/izbrisiDjeloAutoraa/:id", (req, res) => {
    var { id } = req.params
    var brisanjeautora = autorii.find(autor => autor.id != id)
    res.send(brisanjeautora)
})

app.listen(port, () => console.log(`Works on port ${port}`));