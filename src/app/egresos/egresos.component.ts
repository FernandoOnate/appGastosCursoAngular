import { Component, Input } from '@angular/core';
import { EgresoService } from '../services/Egreso.service';
import { DataService } from '../services/Data.service';
import { Egreso } from '../models/Egreso.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent {
  @Input() arrayEgresos:Egreso[];
  
  constructor(
    public egresoService:EgresoService,
    public dataService:DataService
    ){
    }

    eliminarEgreso(id:number){
      this.dataService.eliminarEgreso(id);
      this.egresoService.cambioEnEgresos.emit(true);
    }
}
