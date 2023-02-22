import { Egreso } from "../models/Egreso.model";
import { Ingreso } from "../models/Ingreso.model";

export class DataService {

    

    arrayIngresos: Ingreso[] = [
        new Ingreso('Venta gafas', 5000),
        new Ingreso('Sueldo', 1500000),
        new Ingreso('Venta disco', 50000),
    ];

    arrayEgresos: Egreso[] = [
        new Egreso('Comida', 50000),
        new Egreso('Luz', 30000),
        new Egreso('Cable audifonos', 13000),
    ];

    darFormatoValores(valor: number) {
        return valor.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 2
        });
    }
    formatoPorcentajes = (porc: number) => {
        return porc.toLocaleString('es-CO', {
            style: 'percent',
            minimumFractionDigits: 2
        });
    }


}