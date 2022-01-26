import { Request, Response } from "express";
import Endereco from "../models/Endereco";
import EnderecoRepository from "../repositories/EnderecoRepository";
import axios from 'axios'
import CollectionResponse from "../resources/customResponses/CollectionResponse";

export default class EnderecoService {

    private enderecoRepository: EnderecoRepository;

    constructor() {
        this.enderecoRepository = new EnderecoRepository();
    }

    public create = (endereco: Endereco, prestadorId: number | undefined): Promise<Endereco> => {
        return this.enderecoRepository.create(endereco, prestadorId)
    }

    public async getCepDataViaCep(req: Request, res: Response){
        const cep: number = Number.parseInt(req.params.cep)
        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(result => {
            res.send(result.data)
        })
    }

    public read = (req: Request, res: Response) => {
        this.enderecoRepository.read()
        .then(result => {
            res.send(new CollectionResponse(result).getBody())
        })
    }

    public findById = (req: Request, res: Response) => {
        const enderecoId: number =  Number.parseInt(req.params.enderecoId) 
        this.enderecoRepository.findById(enderecoId)
        .then(result =>{
            res.send(new CollectionResponse(result).getBody())
        })
    }

    public update = (endereco: Endereco) => {
        return this.enderecoRepository.update(endereco)
    }

    public delete = (enderecoId?: number) => {
        return this.enderecoRepository.delete(enderecoId)
    }
    
}