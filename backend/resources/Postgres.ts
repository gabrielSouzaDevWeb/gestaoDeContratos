import { Client } from "pg"

export default class Postgres{

    private credentials = {
        user: "postgres",
        host: "localhost",
        database: "gestao_contratos",
        password: "pausebreak",
        port: 5432,
      };

    public client: Client = new Client(this.credentials);


    constructor(){
        this.init()
    }

    private async init(){
        await this.client.connect()
    }


}