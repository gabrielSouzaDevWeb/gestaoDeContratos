import Vigencia from "./Vigencia"

export default interface Contrato{
    id?: number
    prestador_id: number | undefined
    servico_prestado:string
    data_inicio:string
    data_fim: string
}