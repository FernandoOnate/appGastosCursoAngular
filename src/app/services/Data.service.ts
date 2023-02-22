import { EventEmitter, Injectable } from "@angular/core";
import { Egreso } from "../models/Egreso.model";
import { Ingreso } from "../models/Ingreso.model";
import { IngresoService } from "./Ingreso.service";
import { EgresoService } from "./Egreso.service";
@Injectable()
export class DataService {
    // egresoEliminado  = new EventEmitter<boolean>();
  
    // ARRAY DE INGRESOS
    arrayIngresos: Ingreso[] = [
        new Ingreso('Venta gafas', 5000),
        new Ingreso('Sueldo', 1500000),
        new Ingreso('Venta disco', 50000),
    ];

    // ARRAY DE EGRESOS
    arrayEgresos: Egreso[] = [
        new Egreso('Comida', 50000),
        new Egreso('Luz', 30000),
        new Egreso('Cable audifonos', 13000),
    ];

    // OBTIENE LA SUMATORIA DE LOS VALORES DEL ARRAY INGRESOS
    getIngresosTotales(): number {
        let ingresosTotales = 0;
        this.arrayIngresos.map(
            (ingreso: Ingreso) => {
                ingresosTotales += ingreso.valor;
            }
        );
        return ingresosTotales;
    }

    // OBTIENE LA SUMATORIA DE LOS VALORES DEL ARRAY EGRESO
    getEgresosTotales(): number {
        const egresosTotales = this.arrayEgresos.reduce(
            (prev: number, curr: Egreso) => {
                prev = prev + curr.valor;
                return prev;
            }, 0
        )
        return egresosTotales;
    }

    // OBTIENE LA DIFERENCIA ENTRE LOS INGRESOS Y LOS EGRESOS TOTALES
    getPresupuestoTotal(): number {
        return this.getIngresosTotales() - this.getEgresosTotales();
    }

    // DA FORMATO COLOMBIANO A LOS VALORES
    darFormatoValores(valor: number) {
        return valor.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 2
        });
    }

    // DA FORMATO COLOMBIANO A LOS PORCENTAJES
    formatoPorcentajes = (porc: number) => {
        return porc.toLocaleString('es-CO', {
            style: 'percent',
            minimumFractionDigits: 2
        });
    }

    // ELIMINA UN ELEMENTO DEL ARRAY DE INGERSO
    eliminarIngreso(id: number) {
        const index = this.arrayIngresos
            .findIndex(
                (ingreso: Ingreso) => ingreso.getId() === id
            );
        this.arrayIngresos.splice(index, 1);
    }

    // ELIMINA UN ELEMENTO DEL ARRAY DE EGRESO
    eliminarEgreso(id: number) {
        const index = this.arrayEgresos.findIndex(
            (egreso: Egreso) => egreso.getId() === id
        );
        this.arrayEgresos.splice(index,1);
    }
}