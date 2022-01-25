import Contrato from "../models/Contrato";
import Postgres from "../resources/Postgres"

export default class ContratoRepository{

    private db: Postgres;

    constructor() {
       this.db = new Postgres()
    }

    public async create(contrato: Contrato) : Promise<Contrato>{
        const prestador_id = 1
        const servico_prestado = contrato.servico
        const data_inicio = contrato.vigencia.inicio
        const data_fim = contrato.vigencia.fim

        const { rows } = await this.db.client.query(`INSERT INTO contratos (prestador_id, servico_prestado, data_inicio, data_fim) VALUES ($1,$2,$3,$4) RETURNING *`,
        [prestador_id, servico_prestado, data_inicio, data_fim])
        return rows[0];
    }

    public async read(): Promise<Contrato[]> {
        let futureResult: Array<Contrato>
        const { rows } = await this.db.client.query(`SELECT * FROM public.contratos ORDER BY id ASC`)
        futureResult = rows;
        return futureResult;
    }

    public async findById(contratoId: number): Promise<Contrato[]> {
        let futureResult: Array<Contrato>
        const { rows } = await this.db.client.query(`SELECT * FROM public.contratos where id = $1 ORDER BY id ASC`,[contratoId])
        futureResult = rows;
        return futureResult;
    }

    public async update(contrato: Contrato, contratoId: Number) : Promise<Contrato>{
        const prestador_id = 1
        const servico_prestado = contrato.servico
        const data_inicio = contrato.vigencia.inicio
        const data_fim = contrato.vigencia.fim
        const { rows } = await this.db.client.query(`UPDATE contratos SET prestador_id = $1, servico_prestado = $2, data_inicio = $3, data_fim = $4 where id = $5 RETURNING *`,
        [prestador_id, servico_prestado, data_inicio, data_fim, contratoId])
        return rows[0];
    }

    public async delete(contratoId: Number) : Promise<Contrato>{
        const { rows } = await this.db.client.query(`DELETE FROM contratos where id = $1`,
        [contratoId])
        return rows[0];
    }

}