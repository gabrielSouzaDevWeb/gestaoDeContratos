import Contrato from "../models/Contrato";
import Postgres from "../resources/Postgres"

export default class ContratoRepository{

    private db: Postgres;

    constructor() {
       this.db = new Postgres()
    }

    // public async create(contrato: Contrato) : Promise<Contrato>{
    //     const { rows } = await this.db.client.query(`INSERT INTO contratos (prestador_id, servico_prestado, data_inicio, data_fim) VALUES ($1,$2,$3,$4) RETURNING *`,
    //     [contrato.prestador_id, contrato.servico, contrato.vigencia.inicio, contrato.vigencia.fim])
    //     return rows[0];
    // }

    public async read() {
        let futureResult;
        const { rows } = await this.db.client.query(`select row_to_json(row)
        from (
            SELECT c as contrato, p as prestador FROM public.contratos c
        	inner join prestadores p on c.prestador_id = p.id ORDER BY p.id ASC
        ) row;`)
        futureResult = rows;
        return futureResult;
    }

    public async findById(contratoId: number) {
        let futureResult;
        const { rows } = await this.db.client.query(`select row_to_json(row)
        from (
            SELECT c as contrato, p as prestador FROM public.contratos c
        	inner join prestadores p on c.prestador_id = p.id  where c.id = $1  ORDER BY p.id ASC
        ) row;`,[contratoId])
        futureResult = rows;
        return futureResult;
    }

    // public async update(contrato: Contrato, contratoId: Number) : Promise<Contrato>{
    //     const prestador_id = 1
    //     const servicoPrestado = contrato.servico
    //     const dataInicio = contrato.vigencia.inicio
    //     const dataFim = contrato.vigencia.fim
    //     const { rows } = await this.db.client.query(`UPDATE contratos SET prestador_id = $1, servico_prestado = $2, data_inicio = $3, data_fim = $4 where id = $5 RETURNING *`,
    //     [prestador_id, servicoPrestado, dataInicio, dataFim, contratoId])
    //     return rows[0];
    // }

    public async delete(contratoId: Number) : Promise<Contrato>{
        const { rows } = await this.db.client.query(`DELETE FROM contratos where id = $1`,
        [contratoId])
        return rows[0];
    }

}