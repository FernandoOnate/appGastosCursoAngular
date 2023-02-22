import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from './services/Data.service';
import { Ingreso } from './models/Ingreso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'ingreso-app';
  constructor(private dataService:DataService){}
  arrayDeIngresosPadre:Ingreso[] = this.dataService.arrayIngresos;
  
}
