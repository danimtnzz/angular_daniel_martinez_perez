import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lapsos',
  templateUrl: './lapsos.component.html',
  styleUrls: ['./lapsos.component.css']
})
export class LapsosComponent {
  // static registros: { horas: number, minutos: number, segundos: number }[] = [];
  // registros=LapsosComponent.registros;
  @Input() registros: { horas: number, minutos: number, segundos: number }[] = [];
}
