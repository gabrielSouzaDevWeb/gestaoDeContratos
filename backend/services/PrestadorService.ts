import { Request, Response } from "express";
import util from "util";
import EnderecoDTO from "../dtos/EnderecoDTO";
import PrestadorDTO from "../dtos/PrestadorDTO";
import Endereco from "../models/Endereco";
import Prestador from "../models/Prestador";
import PrestadorRepository from "../repositories/PrestadorRepository";
import CollectionResponse from "../resources/customResponses/CollectionResponse";
import CreateResponse from "../resources/customResponses/CreatedResponse";
import DeletedResponse from "../resources/customResponses/DeletedResponse";
import UpdatedResponse from "../resources/customResponses/UpdatedResponse";
import ContratoService from "./ContratoService";
import EnderecoService from "./EnderecoService";

export default class PrestadorService {

    private prestadorRepository: PrestadorRepository;
    private enderecoService: EnderecoService;
    private contratoService: ContratoService;

    constructor() {
        this.prestadorRepository = new PrestadorRepository();
        this.enderecoService = new EnderecoService();
        this.contratoService = new ContratoService();
    }

    public create = (req: Request, res: Response) => {
        const prestador: Prestador = new PrestadorDTO(req.body).toEntity()
        const endereco: Endereco = new EnderecoDTO(req.body.endereco).toEntity()
        this.prestadorRepository.create(prestador)
            .then(async insertedPrestador => {
                const lastInsertedPrestador = insertedPrestador.id
                const insertedEndereco = await this.enderecoService.create(endereco, lastInsertedPrestador)
                const prestadorDto = new PrestadorDTO().fromEntity(insertedPrestador, insertedEndereco)
                res.send(prestadorDto)
            }).catch(err => {
                res.status(500).send(err)
            })
    }

    public read = (req: Request, res: Response) => {
        this.prestadorRepository.read()
            .then(result => {
                let prestador: Prestador;
                let endereco: Endereco;
                const mergedEntities = result.map(entity => {
                    prestador = entity.row_to_json.prestador
                    endereco = entity.row_to_json.endereco
                    return new PrestadorDTO().fromEntity(prestador, endereco)
                })
                //res.send(new CollectionResponse(mergedEntities).getBody())
                res.send(mergedEntities)
            }).catch(err => {
                res.status(500).send(err)
            })
    }

    public findById = (req: Request, res: Response) => {
        const prestadorId: number = Number.parseInt(req.params.prestadorId)
        this.prestadorRepository.findById(prestadorId)
            .then(result => {
                let prestador: Prestador;
                let endereco: Endereco;
                const mergedEntities = result.map(entity => {
                    prestador = entity.row_to_json.prestador
                    endereco = entity.row_to_json.endereco
                    return new PrestadorDTO().fromEntity(prestador, endereco)
                })
                res.send(mergedEntities[0])
            }).catch(err => {
                res.status(500).send(err)
            })
    }

    public update = (req: Request, res: Response) => {
        const prestadorId: number = Number.parseInt(req.params.prestadorId)
        const prestador: Prestador = new PrestadorDTO(req.body).toEntity()
        const endereco: Endereco = new EnderecoDTO(req.body.endereco).toEntity()
        this.prestadorRepository.update(prestador, prestadorId)
            .then(async updatedPrestador => {
                const updatedEndereco = await this.enderecoService.update(endereco)
                const prestadorDto = new PrestadorDTO().fromEntity(updatedPrestador, updatedEndereco)
                res.send(prestadorDto)
            }).catch(err => {
                res.status(500).send(err)
            })
    }

    public delete = (req: Request, res: Response) => {
        const prestadorId: number = Number.parseInt(req.params.prestadorId)
        this.prestadorRepository.delete(prestadorId)
            .then(async result => {
                const lastDeletedPrestador = result.id
                await this.enderecoService.delete(lastDeletedPrestador)
                res.send(new DeletedResponse().getBody())
            }).catch(err => {
                res.status(500).send(err)
            })
    }
}

