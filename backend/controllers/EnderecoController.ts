import express from "express";
import EnderecoService from "../services/EnderecoService";

export default class EnderecoController{

    private enderecoService: EnderecoService

    constructor(private app: express.Express){

        this.enderecoService = new EnderecoService()

        this.app.get("/enderecos", this.enderecoService.read)
        this.app.get("/enderecos/:enderecoId", this.enderecoService.findById)
        this.app.get("/enderecos/getCepData/:cep", this.enderecoService.getCepDataViaCep)
    }

}
