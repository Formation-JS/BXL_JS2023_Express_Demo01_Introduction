const { PORT } = process.env;

// Pour récupérer express de la lib
const express = require("express");

const app = express();


app.listen( PORT , () => {
    console.warn("Serveur Express started on Port "+ PORT);
})