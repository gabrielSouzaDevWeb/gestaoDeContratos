import express from "express";
import bodyParser  from "body-parser";

import ContratosController from "./controllers/ContratosController"

const PORT = 3001

const app = express()
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

new ContratosController(app);



// app.get("/contratos",function(req, res){})
// app.post("/contratos",function(req, res){})
// app.put("/contratos",function(req, res){})
//app.delete("/contratos",function(req, res){})

// app.get("/contratos",function(req, res){})
// app.post("/contratos",function(req, res){})
// app.put("/contratos",function(req, res){})
// app.delete("/contratos",function(req, res){})


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
