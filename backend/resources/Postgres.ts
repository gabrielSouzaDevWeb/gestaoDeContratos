import { response } from "express";
import { Client } from "pg"

export default class Postgres{

    private credentials = {
        user: "postgres",
        host: "localhost",
        database: "gestao_contratos",
        password: "admin",
        port: 5432,
      };

    public client: Client = new Client(this.credentials);

    constructor(){
        this.init()
    }

    private async init(){
        try{
            await this.client.connect()
        }catch(err){
            console.log(err)
        }
    }
}