import { EventEmitter, Injectable } from "@angular/core";
import { Egreso } from "../models/Egreso.model";
import { DataService } from "./Data.service";
@Injectable()
export class EgresoService{

    cambioEnEgresos = new EventEmitter<boolean>();

    constructor(private dataService:DataService){}

    agregarEgreso(desc:string,val:number){
        const nuevoEgreso = new Egreso(desc,val);
        this.dataService.arrayEgresos.push(nuevoEgreso);
        this.cambioEnEgresos.emit(true);
    }

    eliminarEgreso(id:number){
        this.dataService.eliminarEgreso(id);
    }
}