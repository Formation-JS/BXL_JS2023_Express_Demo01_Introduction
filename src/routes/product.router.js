const productRouteur = require("express").Router();

productRouteur.route('/')
    .get((req, res) => {
        const data = { products : [
            { id : 1, name : "Patates"}
        ]}
        res.writeHead(200, {"Content-Type" : "application/json"})
        res.end( JSON.stringify(data), "utf-8", () => { console.log("oui.");});
    })

productRouteur.route('/:id')
    .get((req, res) => {
        res.send(`<h1> Détails sur le produit ${req.params.id} </h1>`)
    })

module.exports = productRouteur;