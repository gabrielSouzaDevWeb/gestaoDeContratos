import Vigencia from "../models/Vigencia";

export default class VigenciaDTO {
    private inicio: string;
    private fim: string;
   
    constructor(data?: any){
        this.inicio = data?.inicio
        this.fim = data?.fim
    }

    public fromEntity(vigencia: Vigencia): VigenciaDTO{
        let vigenciaDTO = new VigenciaDTO();
        vigenciaDTO.inicio = vigencia?.inicio
        vigenciaDTO.fim = vigencia?.fim
        return vigenciaDTO;
    }

    public toEntity(): Vigencia {
        let vigencia: Vigencia = {
            inicio: this.inicio,
            fim:  this.fim
        };
        return vigencia
    }
}