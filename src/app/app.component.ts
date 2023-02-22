import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from './services/Data.service';
import { Ingreso } from './models/Ingreso.model';
import { Egreso } from './models/Egreso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private dataService:DataService){}
  arrayDeIngresosPadre:Ingreso[] = this.dataService.arrayIngresos;
  arrayEgresosPadre:Egreso[] = this.dataService.arrayEgresos;

  ngOnInit(): void {
    // console.log(this.dataService.getEgresosTotales());
    // console.log(this.dataService.getIngresosTotales());
  }
}
