export interface Prestador{

    id?: number,
    tipo: string,
    CPFOrCNPJ: string,
    nome: string,
    email: string,
    endereco: {
      CEP: string,
      logradouro: string,
      numero: null,
      complemento: string,
      bairro: string,
      cidade: string,
      UF: string
    }
}