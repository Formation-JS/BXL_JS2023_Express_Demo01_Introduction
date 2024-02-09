const { PORT } = process.env;

// Pour récupérer express de la lib
const express = require("express");

// Création du serveur express
const app = express();

//----- Routing -----
// Pour charger nos routes
const routes = require("./src/routes") //Comme je n'ai pas précisé de nom de fichier, il va chercher un index.js

// Pour les utiliser
app.use("/", routes);
//----- fin Routing -----

// Lancement du serveur express
app.listen( PORT , () => {
    console.warn("Serveur Express started on Port "+ PORT);
})