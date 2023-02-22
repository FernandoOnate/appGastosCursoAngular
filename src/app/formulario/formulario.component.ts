import { Component, EventEmitter, Output } from '@angular/core';
import { IngresoService } from '../services/Ingreso.service';
import { EgresoService } from '../services/Egreso.service';
import { DataService } from '../services/Data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  descripcion: string;
  valor: number;
  tipo: string;
  @Output() errorFormularioDesc = new EventEmitter<boolean>();
  @Output() errorFormularioVal = new EventEmitter<boolean>();
  @Output() errorFormularioTipo = new EventEmitter<boolean>();
  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService,
    // private dataService:DataService
  ) { }

  agregarDato() {
    // this.dataService.formularioEnviado.emit(true);
    if (this.tipo !== '0') {

      if (this.descripcion.length > 0 && !isNaN(this.valor)) {
        this.errorFormularioVal.emit(true);
        this.errorFormularioDesc.emit(true);

        if (this.tipo === 'ingreso') {
          this.errorFormularioTipo.emit(false);

          this.ingresoService.agregarIngreso(this.descripcion, this.valor);

        } else if (this.tipo === 'egreso') {
          this.errorFormularioTipo.emit(false);

          this.egresoService.agregarEgreso(this.descripcion, this.valor);
        } else {
          // TIPO INVALIDO
          this.errorFormularioTipo.emit(true);
        }

      } else {
        // descripcion y valor son necesarios
        this.errorFormularioVal.emit(true);
        this.errorFormularioDesc.emit(true);
      }
    } else {
      // TIPO NO SELECCIONADO
      this.errorFormularioTipo.emit(true);
    }
  }
}
