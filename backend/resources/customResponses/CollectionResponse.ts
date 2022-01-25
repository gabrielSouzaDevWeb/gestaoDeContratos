export default class CollectionResponse{
    private timestamp: number;
    private message: string;
    private data: Array<Object> | Object;

    constructor(data: Array<Object> | Object){
        this.timestamp = new Date().getTime()
        this.message = ""
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