export default interface Endereco {
    id?: number,
    cep: string,
    logradouro: string,
    numero: string | undefined,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string
}