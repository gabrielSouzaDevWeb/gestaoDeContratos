import Endereco from "../models/Endereco";
import Postgres from "../resources/Postgres"

export default class EnderecoRepository{

    private db: Postgres;

    constructor() {
       this.db = new Postgres()
    }

    public async create(endereco: Endereco, prestadorId: number | undefined) : Promise<Endereco>{
        const { rows } = await this.db.client.query(`INSERT INTO prestadores_enderecos (cep, logradouro, numero, complemento, bairro, cidade, uf, prestador_id) 
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
        [endereco.cep, endereco.logradouro, endereco.numero, endereco.complemento, endereco.bairro, endereco.cidade, endereco.uf, prestadorId])
        return rows[0];
    }

    public async read() : Promise<Endereco[]>{
        const { rows } = await this.db.client.query(`SELECT * FROM prestadores_enderecos`)
        return rows;
    }

    public async findById(enderecoId: number): Promise<Endereco[]> {
        let futureResult: Array<Endereco>
        const { rows } = await this.db.client.query(`SELECT * FROM prestadores_enderecos where id = $1 ORDER BY id ASC`,[enderecoId])
        futureResult = rows;
        return futureResult;
    }

    public async update(endereco: Endereco, enderecoId: Number | undefined) : Promise<Endereco>{
        const cep = endereco.cep
        const logradouro = endereco.logradouro
        const numero = endereco.numero
        const complemento = endereco.complemento
        const bairro = endereco.bairro
        const cidade = endereco.cidade
        const uf = endereco.uf
       
        const { rows } = await this.db.client.query(`UPDATE prestadores_enderecos SET (cep = $1, logradouro = $2, numero = $3, complemento = $4, bairro = $5,
             cidade = $6, uf = $7) where id = $8 RETURNING *`,
        [cep, logradouro, numero, complemento, bairro, cidade, uf, enderecoId])
        return rows[0];
    }

    public async delete(contratoId?: Number) : Promise<Endereco>{
        const { rows } = await this.db.client.query(`DELETE FROM contratos where id = $1`,
        [contratoId])
        return rows[0];
    }


}