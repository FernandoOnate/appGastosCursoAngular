import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/Data.service';
import { IngresoService } from '../services/Ingreso.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  presupuestoTotal: number;
  ingresosTotales: number;
  egresosTotales: number;
  porcentajeEgresos: number;

  cargarDatos(): void {
    this.presupuestoTotal = this.dataService.getPresupuestoTotal();
    this.ingresosTotales = this.dataService.getIngresosTotales();
    this.egresosTotales = this.dataService.getEgresosTotales();
    this.porcentajeEgresos = this.egresosTotales / this.ingresosTotales;
  }

  constructor(
    public dataService: DataService,
    private ingresoService: IngresoService
  ) {
    this.ingresoService.ingresoEliminado.subscribe(
      (eliminado: boolean) => {
        if (eliminado) {
          this.cargarDatos();
        }
      });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }
}
