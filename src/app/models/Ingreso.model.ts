import { Dato } from "./Dato.model";

export class Ingreso extends Dato {

    static contadorIngreso: number = 0;
    private _idIngreso: number;

    constructor(public desc: string, public val: number) {

        super(desc, val);
        this._idIngreso = ++Ingreso.contadorIngreso;

    }
    getId() {
        return this._idIngreso;
    }
}