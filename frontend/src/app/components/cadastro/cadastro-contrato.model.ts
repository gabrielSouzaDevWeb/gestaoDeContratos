export interface CadastroContrato {
  id?: number
  prestadorId: number,
  CPFOrCNPJ: string,
  nome: string,
  servico: string,
  vigencia: {
    inicio: string,
    fim: string
  }
}
//criado de forma literal