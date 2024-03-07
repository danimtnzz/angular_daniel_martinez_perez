import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  esPrimeraVisita: boolean = true;
  saludo1: string = 'Bienvenido de nuevo';
  saludo2: string = 'Hola, ¿qué tal estás?';

  //TODO: no funciona
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.id) {
        this.esPrimeraVisita = false;
      } else {
        this.esPrimeraVisita = true;
      }
    });
  }

  getSaludo(): string {
    return this.esPrimeraVisita ? this.saludo2 : this.saludo1;
  }
}
