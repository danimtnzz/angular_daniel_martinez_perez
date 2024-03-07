import { Component } from '@angular/core';
import { LapsosComponent } from '../lapsos/lapsos.component';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {
  minutos: number = 0;
  segundos: number = 0;
  horas: number = 0;
  isRunning: boolean = false;
  registros: { horas: number, minutos: number, segundos: number }[] = [];
  ngOnInit() {
    this.actualizarTiempo();
  }

  iniciar() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.actualizarTiempo();
    }
  }

  pausar() {
    this.isRunning = false;
  }

  recordar() {
    this.registros.push({ horas: this.horas, minutos: this.minutos, segundos: this.segundos });
  }

  private actualizarTiempo() {
    if (this.isRunning) {
      setTimeout(() => {
        this.segundos++;
        if (this.segundos === 60) {
          this.segundos = 0;
          this.minutos++;
        }
        if(this.minutos === 60){
          this.minutos=0;
          this.horas++;
        }
        this.actualizarTiempo();
      }, 1000);
    }
  }
}
