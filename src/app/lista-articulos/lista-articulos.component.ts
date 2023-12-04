import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiculoService } from '../acticulo.service';
@Component({
  selector: 'app-lista-articulos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-articulos.component.html',
  styleUrl: './lista-articulos.component.css'
})
export class ListaArticulosComponent {
  private articulos: any[] = [];
  @Output() seleccionarArticulo: EventEmitter<any> = new EventEmitter();

  constructor(private articuloService: ActiculoService) {}

  getArticulos(): any[] {
    return this.articuloService.getArticulos();
  }

  borrarArticulo(codigo: number): void {
    this.articuloService.borrarArticulo(codigo);
  }

  seleccionarEnLista(articulo: any): void {
    this.articuloService.seleccionarArticulo(articulo);
  }
}
