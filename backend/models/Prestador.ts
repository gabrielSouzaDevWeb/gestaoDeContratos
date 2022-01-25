export default interface Prestador{
    id?: number,
    tipo: string,
    cpf: string | undefined,
    cnpj: string | undefined,
    nome: string | undefined,
    razao_social: string | undefined
    email: string,
}