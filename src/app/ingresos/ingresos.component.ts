import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingreso } from '../models/Ingreso.model';
import { DataService } from '../services/Data.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  @Input() arrayIngresosHijo:Ingreso[];
  constructor(public dataService:DataService){}
  eliminarIngreso(id:number){

  }
}
