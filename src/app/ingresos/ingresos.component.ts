import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingreso } from '../models/Ingreso.model';
import { DataService } from '../services/Data.service';
import { IngresoService } from '../services/Ingreso.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit{

  @Input() arrayIngresosHijo:Ingreso[];

  constructor(
    public dataService:DataService,
    private ingresoService:IngresoService
    ){}

    ngOnInit(): void {
      this.ingresoService.cambioEnIngresos.emit(false);
    }

  eliminarIngreso(id:number){
      this.ingresoService.ingresoEliminar(id);
      this.ingresoService.cambioEnIngresos.emit(true);
  }
}
