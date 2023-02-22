import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/Data.service';
import { IngresoService } from '../services/Ingreso.service';
import { EgresoService } from '../services/Egreso.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  presupuestoTotal: number;
  presupuestoString: string;
  ingresosTotales: number;
  ingresosString:string;
  egresosString: string;
  egresosTotales: number;
  porcentajeEgresos: string;

  cargarDatos(): void {
    this.presupuestoTotal = this.dataService.getPresupuestoTotal();
    this.ingresosTotales = this.dataService.getIngresosTotales();
    this.egresosTotales = this.dataService.getEgresosTotales();
    
    this.presupuestoString = this.dataService.darFormatoValores(this.dataService.getPresupuestoTotal());
    this.porcentajeEgresos = this.dataService.formatoPorcentajes(this.egresosTotales / this.ingresosTotales);
    this.ingresosString = this.dataService.darFormatoValores(this.dataService.getIngresosTotales());
    this.egresosString = this.dataService.darFormatoValores(this.dataService.getEgresosTotales());
  }

  constructor(
    public dataService: DataService,
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) {
    this.ingresoService.cambioEnIngresos.subscribe(
      (eliminado: boolean) => {
        if (eliminado) {
          this.cargarDatos();
        }
      });

    this.egresoService.cambioEnEgresos.subscribe(
      (eliminado: boolean) => {
        if (eliminado) this.cargarDatos();
      }
    )
  }

  ngOnInit(): void {
    this.cargarDatos();
  }
}
