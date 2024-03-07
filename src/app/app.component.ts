import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_daniel_martinez_perez';
  mostrarToolbar: boolean = true;
  constructor(private router: Router){

  }

  ngOnInit() {
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd) {
        this.mostrarToolbar = event.url !== '/' && event.url !== '/menu-juegos';
      }
    });
  }
}
