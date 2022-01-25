export default interface Contrato{
    id?: number
    CPFOrCNPJ:string
    nome:string
    servico:string
    vigencia:{
        inicio:string,
        fim: string
    }
}