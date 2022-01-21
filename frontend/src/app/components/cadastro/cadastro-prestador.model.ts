export interface CadastroPrestador{

    id?: number,
      tipo: string,
      CPFOrCNPJ: string,
      nome: string,
      email: string,
      endereco: {
        CEP: string,
        logradouro: string,
        numero: number,
        bairro: string,
        cidade: string,
        UF: string
      }
}