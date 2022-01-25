export default class UpdatedResponse{
    private timestamp: number;
    private message: string;
    private data: Object;

    constructor(data: Object){
        this.timestamp = new Date().getTime()
        this.message = "Registro atualizado com sucesso"
        this.data = data
    }

    public getBody(): Object{
        return {
            timestamp: this.timestamp,
            message: this.message,
            data: this.data,
        }
    }
}