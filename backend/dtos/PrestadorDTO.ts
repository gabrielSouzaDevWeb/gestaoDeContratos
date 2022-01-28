import Endereco from "../models/Endereco"
import Prestador from "../models/Prestador"
import EnderecoDTO from "./EnderecoDTO"

export default class PrestadorDTO{
    private id: number | undefined
    private tipo: string
    private CPFOrCNPJ: string | undefined
    private nome: string | undefined
    private email: string
    private endereco: EnderecoDTO | undefined

    constructor(data?: any){
        this.tipo = data?.tipo
        this.CPFOrCNPJ = data?.CPFOrCNPJ
        this.nome = data?.nome
        this.email = data?.email
        this.endereco = data?.endereco
    }

    public fromEntity(prestador: Prestador, endereco: Endereco): PrestadorDTO{
        let prestadorDTO = new PrestadorDTO();
        prestadorDTO.id = prestador.id
        prestadorDTO.tipo = prestador.tipo
        prestadorDTO.CPFOrCNPJ =  prestador.tipo === 'F' ? prestador.cpf : prestador.cnpj 
        prestadorDTO.nome = prestador.tipo === 'F' ? prestador.nome : prestador.razao_social
        prestadorDTO.email = prestador.email
        prestadorDTO.endereco = new EnderecoDTO().fromEntity(endereco)
        return prestadorDTO;
    }

    public toEntity(): Prestador {
        let prestador: Prestador = {
            tipo: this.tipo,
            cpf:  this.tipo === 'F' ? this.CPFOrCNPJ : undefined,
            cnpj: this.tipo === 'J' ? this.CPFOrCNPJ : undefined,
            nome: this.tipo === 'F' ? this.nome : undefined,
            razao_social: this.tipo === 'J' ? this.nome : undefined,
            email: this.email
        };
        console.log(prestador)
        return prestador
    }

}