import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaludoComponent } from './saludo/saludo.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { LapsosComponent } from './lapsos/lapsos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    SaludoComponent,
    CronometroComponent,
    LapsosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
