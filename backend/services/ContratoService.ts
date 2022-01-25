import { Request, Response } from "express";
import ContratoDTO from "../dtos/ContratoDTO";
import Contrato from "../models/Contrato";
import Prestador from "../models/Prestador";
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
        const contrato: Contrato = new ContratoDTO(req.body).toEntity()
        this.contratoRepository.create(contrato)
        .then(result =>{
            res.send(new CreateResponse(new ContratoDTO().fromEntity(result)).getBody())
        })
    }

    public read = (req: Request, res: Response) => {
        this.contratoRepository.read()
        .then(result =>{
            const mergedEntities = result.map(entity => {
                const contrato: Contrato = entity.row_to_json.contrato;
                const prestador: Prestador = entity.row_to_json.prestador;
                return new ContratoDTO().fromEntity(contrato, prestador)
            })
            res.send(mergedEntities)
        })
    }

    public findById = (req: Request, res: Response) => {
        const id: number =  Number.parseInt(req.params.contratoId) 
        this.contratoRepository.findById(id)
        .then(result =>{
            const mergedEntities = result.map(entity => {
                const contrato: Contrato = entity.row_to_json.contrato;
                const prestador: Prestador = entity.row_to_json.prestador;
                console.log(new ContratoDTO().fromEntity(contrato, prestador))
                return new ContratoDTO().fromEntity(contrato, prestador)
            })
            res.send(mergedEntities[0])
        })
    }

    public update = (req: Request, res: Response) => {
        const contratoId: number =  Number.parseInt(req.params.contratoId) 
        const contrato: Contrato = new ContratoDTO(req.body).toEntity()
        this.contratoRepository.update(contrato, contratoId)
        .then(result =>{
            res.send(result)
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