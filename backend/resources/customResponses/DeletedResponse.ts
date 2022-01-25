export default class DeletedResponse{
    private timestamp: number;
    private message: string;
    private data: Object;

    constructor(){
        this.timestamp = new Date().getTime()
        this.message = "Registro deletado com sucesso."
        this.data = new Object()
    }

    public  getBody(): Object{
        return {
            timestamp: this.timestamp,
            message: this.message,
            data: this.data,
        }
    }
}