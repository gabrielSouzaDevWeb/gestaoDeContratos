import Contrato from "../models/Contrato";
import Endereco from "../models/Endereco";
import Prestador from "../models/Prestador";
import Postgres from "../resources/Postgres"

export default class PrestadorRepository{

    private db: Postgres;

    constructor() {
       this.db = new Postgres()
    }

    public async create(prestador: Prestador) : Promise<Prestador>{
        const { rows } = await this.db.client.query(`INSERT INTO prestadores (tipo, cpf, cnpj, nome, razao_social, email) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
        [prestador.tipo, prestador.cpf, prestador.cnpj, prestador.nome, prestador.razao_social, prestador.email])
        return rows[0];
    }

    public async read() {
        let futureResult
        const { rows } = await this.db.client.query(`select row_to_json(row)
        from (
            SELECT p as prestador, pe as endereco
            FROM prestadores p
            inner join prestadores_enderecos pe ON p.id = pe.prestador_id ORDER BY p.id ASC
        ) row;`)
        futureResult = rows;
        return futureResult;
    }

    public async findById(prestadorId: number) {
        let futureResult
        const { rows } = await this.db.client.query(`select row_to_json(row)
        from (
            SELECT p as prestador, pe as endereco
            FROM prestadores p
            inner join prestadores_enderecos pe ON p.id = pe.prestador_id
            where p.id = $1
        ) row;`,[prestadorId])
        futureResult = rows;
        return futureResult;
    }

    public async update(prestador: Prestador, prestadorId: Number | undefined) : Promise<Prestador>{
        console.log('**************',prestadorId)
        let futureResult: Prestador
        const { rows } = await this.db.client.query(`UPDATE prestadores SET tipo = $1, cpf = $2, cnpj = $3, nome = $4, razao_social = $5, email = $6 where id = $7 RETURNING *`,
        [
             prestador.tipo,
             prestador.cpf,
             prestador.cnpj,
             prestador.nome, 
             prestador.razao_social,
             prestador.email,
             prestadorId
        ])
        futureResult = rows[0];
        return futureResult;
    }

    public async delete(prestadorId: Number) : Promise<Prestador>{
        const { rows } = await this.db.client.query(`DELETE FROM prestadores where id = $1 RETURNING *`,[prestadorId])
        return rows[0];
    }

}