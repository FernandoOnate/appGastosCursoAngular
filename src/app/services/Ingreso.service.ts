import { EventEmitter, Injectable } from "@angular/core";
import { Ingreso } from "../models/Ingreso.model";
import { DataService } from "./Data.service";
@Injectable()
export class IngresoService {
    
    cambioEnIngresos = new EventEmitter<boolean>();

    constructor(private dataService: DataService) { }

    agregarIngreso(desc: string, val: number) {
        const ingresoNuevo = new Ingreso(desc, val);
        this.dataService.arrayIngresos.push(ingresoNuevo);
    }

    ingresoEliminar(id: number) {
        this.dataService.eliminarIngreso(id);
    }

}