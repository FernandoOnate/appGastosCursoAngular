export class Dato{
    constructor(public descripcion:string,public valor:number){}
    getDescripcion(){
        return this.descripcion;
    }
    getValor(){
        return this.valor;
    }
    setValor(v:number){
        this.valor = v;
    }
    setDescripcion(d:string){
        this.descripcion = d;
    }
}