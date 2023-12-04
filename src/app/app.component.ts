import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';
import { FormularioArticulosComponent } from './formulario-articulos/formulario-articulos.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ListaArticulosComponent,FormularioArticulosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mcc-tsys-ta38-3-041223';
}
