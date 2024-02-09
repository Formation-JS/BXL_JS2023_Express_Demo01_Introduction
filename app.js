const { PORT } = process.env;

// Pour récupérer express de la lib
const express = require("express");

// Création du serveur express
const app = express();

// Exemple première route :
app.get("/", (req, res) => {
    res.send("<h1> Yo </h1>");
})

// Va fonctionner pour /users et pour /user
app.get("/users?", (req, res) => {
    res.send("<h1>Liste des utilisateurs</h1>")
})
// Pour une route avec un segment dynamique, on rajoute : à la partie qui va changer
// /:id -> segment dynamique
// /:id([0-9]+) -> segment dynamique avec un validateur regex, on n'accepte que les id qui sont des nombres (mais il faut au moins un chiffre)
app.get("/users?/:id([0-9]+)", (req, res) => {
    // Pour récupérer la valeur du paramètre
    // req.params.id
    res.send(`<h1>Affichage de l'utilisateur dont l'id est ${req.params.id}</h1>`)
})

// A mettre à la fin, le ** signifie "si aucune des routes existantes dans l'app"
app.get("**", (req, res) => {
    res.send("<h1>Cette route n'existe pas</h1>")
})

// Lancement du serveur express
app.listen( PORT , () => {
    console.warn("Serveur Express started on Port "+ PORT);
})