import Contrato from "../models/Contrato"
import Prestador from "../models/Prestador"
import VigenciaDTO from "./VigenciaDTO"
import Vigencia from "../models/Vigencia"

export default class ContratoDTO{
    private id: number | undefined
    private prestadorId: number| undefined
    private CPFOrCNPJ: string  | undefined
    private nome:string | undefined
    private servico:string
    private vigencia: VigenciaDTO

    constructor(data?: any){
        this.prestadorId = data?.prestadorId
        this.CPFOrCNPJ = data?.CPFOrCNPJ
        this.nome = data?.nome
        this.servico = data?.servico
        this.vigencia = data?.vigencia
    }

    public fromEntity(contrato: Contrato, prestador?: Prestador): ContratoDTO{
        const contratoDTO = new ContratoDTO();
        contratoDTO.id = contrato.id
        contratoDTO.prestadorId = prestador?.id
        contratoDTO.CPFOrCNPJ = prestador?.tipo === 'F' ? prestador.cpf : prestador?.cnpj
        contratoDTO.nome = prestador?.tipo === 'F' ? prestador.nome : prestador?.razao_social
        contratoDTO.servico = contrato.servico_prestado

        const vigencia: Vigencia = {
            inicio: contrato.data_inicio,
            fim: contrato.data_fim
        }

        contratoDTO.vigencia =  new VigenciaDTO().fromEntity(vigencia)
        return contratoDTO;
    }

    public toEntity(): Contrato {
        const vigencia: Vigencia = new VigenciaDTO(this.vigencia).toEntity()
        let contrato: Contrato = {
            id: this.id,
            prestador_id: this.prestadorId,
            servico_prestado: this.servico,
            data_inicio: vigencia.inicio,
            data_fim: vigencia.fim,
        };
        return contrato;
    }

}