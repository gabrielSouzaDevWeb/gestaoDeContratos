import Endereco from "../models/Endereco"

export default class EnderecoDTO{
    private id: number | undefined
    private CEP: string 
    private logradouro: string 
    private numero: string | undefined 
    private complemento: string 
    private bairro: string 
    private cidade: string 
    private UF: string 

    constructor(data?: any){
        this.CEP = data?.CEP
        this.logradouro = data?.logradouro
        this.numero = data?.numero
        this.complemento = data?.complemento
        this.bairro = data?.bairro
        this.cidade = data?.cidade
        this.UF = data?.UF
    }

    public fromEntity(endereco: Endereco): EnderecoDTO{
        const enderecoDto = new EnderecoDTO();
        enderecoDto.id = endereco.id
        enderecoDto.CEP = endereco.cep
        enderecoDto.logradouro = endereco.logradouro
        enderecoDto.numero = endereco.numero
        enderecoDto.complemento = endereco.complemento
        enderecoDto.bairro = endereco.bairro
        enderecoDto.cidade = endereco.cidade
        enderecoDto.UF = endereco.uf

        console.log(endereco)


        return enderecoDto;
    }

    public toEntity(): Endereco {
        let endereco: Endereco = {
            cep: this.CEP,
            logradouro: this.logradouro,
            numero: this.numero,
            complemento: this.complemento,
            bairro: this.bairro,
            cidade: this.cidade,
            uf: this.UF
        };
        return endereco;
    }
}

