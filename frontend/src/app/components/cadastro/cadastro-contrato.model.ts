export interface CadastroContrato{
    id?: number
    CPFOrCNPJ:string,
      nome:string,
      servico:string,
      vigencia:{
        inicio:string,
        fim: string
      }
}
//criado de forma literal