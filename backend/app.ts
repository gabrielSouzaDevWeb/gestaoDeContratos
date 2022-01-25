import express from "express";
import bodyParser  from "body-parser";

import ContratosController from "./controllers/ContratosController"
import PrestadoresController from "./controllers/PrestadoresController";
import EnderecoController from "./controllers/EnderecoController";

const PORT = 3001

const app = express()
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

new PrestadoresController(app)
new ContratosController(app);   
new EnderecoController(app)


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
