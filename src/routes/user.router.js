const userRouter = require("express").Router();

//#region Autre façon de faire les routes
// Autre façon d'écrire les routes, très utilisée quand on est plutôt en API puisqu'il permet d'abord de définir la route et ensuite toutes les méthodes sur cette route (pour éviter la redondance des routes)
// userRouter.route('/users?')
//     .get(() => {})
//     .post(() => {})

// userRouter.route('/users?/:id')
//     .get(() => {})
//     .patch(() => {})
//     .put(() => {})
//     .delete(() => {})
//#endregion

// Va fonctionner pour /users et pour /user
userRouter.get("/", (req, res) => {
    res.send("<h1>Liste des utilisateurs</h1>");
})
userRouter.post("/", (req,res) => {
    res.send("<h1> POST </h1>");
})

// Pour une route avec un segment dynamique, on rajoute : à la partie qui va changer
// /:id -> segment dynamique
// /:id([0-9]+) -> segment dynamique avec un validateur regex, on n'accepte que les id qui sont des nombres (mais il faut au moins un chiffre)
userRouter.get("/:id([0-9]+)", (req, res) => {
    // Pour récupérer la valeur du paramètre
    // req.params.id
    res.send(`<h1>Affichage de l'utilisateur dont l'id est ${req.params.id}</h1>`)
})

module.exports = userRouter;
