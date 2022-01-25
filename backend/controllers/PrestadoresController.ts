import express from "express";
import PrestadorService from "../services/PrestadorService";

export default class PrestadoresController{

    private prestadorService: PrestadorService

    constructor(private app: express.Express){

        this.prestadorService = new PrestadorService()

        this.app.get("/prestadores",                  this.prestadorService.read)
        this.app.get("/prestadores/:prestadorId",     this.prestadorService.findById)
        this.app.post("/prestadores",                 this.prestadorService.create)
        this.app.put("/prestadores/:prestadorId",     this.prestadorService.update)
        this.app.delete("/prestadores/:prestadorId",  this.prestadorService.delete)
    }

}
