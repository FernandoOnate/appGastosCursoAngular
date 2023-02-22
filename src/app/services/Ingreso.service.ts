import { EventEmitter, Injectable } from "@angular/core";
import { Ingreso } from "../models/Ingreso.model";
import { DataService } from "./Data.service";
@Injectable()
export class IngresoService {

    ingresoSeleccionado = new EventEmitter<number>();

    constructor(private dataService: DataService) { }

    agregarIngreso(desc: string, val: number) {
        const ingresoNuevo = new Ingreso(desc, val);
        this.dataService.arrayIngresos.push(ingresoNuevo);
    }

    ingresoEliminar(id:number){
        this.dataService.eliminarIngreso(id);
    }
    // arrayIngresosEvent = new EventEmitter<Ingreso[]>();

    // crearIngresoHTML(ing: Ingreso) {
    //     return `
    //         <div class="elemento limpiarEstilos">
    //             <div class="elemento_descripcion">${ing.descripcion}</div>
    //                 <div class="derecha limpiarEstilos">
    //                     <div class="elemento_valor">+${this.dataService.darFormatoValores(ing.valor)}</div>
    //                         <div class="elemento_eliminar">
    //                             <button class="elemento_eliminar--btn">
    //                                 <ion-icon style="color:red;" name="trash-outline" onclick='eliminarIngreso(${ing.getId})'></ion-icon>
    //                             </button>
    //                         </div>
    //                 </div>
    //         </div>
    //         `;
    // }
    // listarIngresos() {
    //     let ingresosString = '';
    //     this.dataService.arrayIngresos.map((ingreso: Ingreso) => {
    //         ingresosString += this.crearIngresoHTML(ingreso);
    //     })
    // }
}