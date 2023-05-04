import { EmitFlags } from "typescript"
import { Pessoa2 } from "./pesssoa2"
export class Pessoa{
    nome:string
    idade:number
    sobrenome:string
    constructor(nome:string,idade:number,sobrenome:string){
        this.nome = nome
        this.idade = idade
        this.sobrenome = sobrenome
    }

    Responder(){
        console.log('Ola'+Pessoa2,' Sou Muito Grado Pela Oportunidade Que vocês me deram')
    }
}