import express from "express";
import ContratoService from "../services/ContratoService";

export default class ContratosController{

    private contratoService: ContratoService

    constructor(private app: express.Express){

        this.contratoService = new ContratoService()

        this.app.get("/contratos",                  this.contratoService.read)
        this.app.get("/contratos/:contratoId",     this.contratoService.findById)
        this.app.post("/contratos",                 this.contratoService.create)
        this.app.put("/contratos/:contratoId",     this.contratoService.update)
        this.app.delete("/contratos/:contratoId",  this.contratoService.delete)
    }

}
