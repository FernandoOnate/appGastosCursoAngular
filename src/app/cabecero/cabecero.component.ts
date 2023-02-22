import { Component } from '@angular/core';
import { DataService } from '../services/Data.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent {
  constructor(public dataService: DataService) {

  }
  presupuestoTotal = this.dataService.getPresupuestoTotal();
  ingresosTotales = this.dataService.getIngresosTotales();
  egresosTotales = this.dataService.getEgresosTotales();

  porcentajeEgresos = this.egresosTotales / this.ingresosTotales;
}
