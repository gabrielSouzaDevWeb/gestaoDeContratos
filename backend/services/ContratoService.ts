import { Request, Response } from "express";
import Contrato from "../models/Contrato";
import ContratoRepository from "../repositories/ContratoRepository";
import CollectionResponse from "../resources/customResponses/CollectionResponse";
import CreateResponse from "../resources/customResponses/CreatedResponse";
import DeletedResponse from "../resources/customResponses/DeletedResponse";
import UpdatedResponse from "../resources/customResponses/UpdatedResponse";

export default class ContratoService {

    private contratoRepository: ContratoRepository;

    constructor() {
        this.contratoRepository = new ContratoRepository();
    }

    public create = (req: Request, res: Response) => {
        const contrato: Contrato = req.body
        this.contratoRepository.create(contrato)
        .then(result =>{
            res.send(new CreateResponse(result).getBody())
        })
    }

    public read = (req: Request, res: Response) => {
        this.contratoRepository.read()
        .then(result =>{
            res.send(new CollectionResponse(result).getBody())
        })
    }

    public findById = (req: Request, res: Response) => {
        const id: number =  Number.parseInt(req.params.contratoId) 
        this.contratoRepository.findById(id)
        .then(result =>{
            res.send(new CollectionResponse(result).getBody())
        })
    }


    public update = (req: Request, res: Response) => {
        const contratoId: number =  Number.parseInt(req.params.contratoId) 
        const contrato: Contrato = req.body
        this.contratoRepository.update(contrato, contratoId)
        .then(result =>{
            res.send(new UpdatedResponse(result).getBody())
        })
    }

    public delete = (req: Request, res: Response) => {
        const contratoId: number =  Number.parseInt(req.params.contratoId) 
        this.contratoRepository.delete(contratoId)
        .then(result =>{

            res.send(new DeletedResponse().getBody())
        })
    }
    
    

}