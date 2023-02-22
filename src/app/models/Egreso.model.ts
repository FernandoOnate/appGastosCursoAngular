import { Dato } from "./Dato.model";

export class Egreso extends Dato {

    static contadorEgreso: number;
    private _idEgreso: number;

    constructor(public desc: string, public val: number) {
        super(desc, val);

        this._idEgreso = ++Egreso.contadorEgreso;
        
    }
    getId() {
        return this._idEgreso;
    }
}