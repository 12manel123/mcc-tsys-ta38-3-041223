import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActiculoService } from '../acticulo.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-formulario-articulos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario-articulos.component.html',
  styleUrl: './formulario-articulos.component.css'
})
export class FormularioArticulosComponent implements OnInit{
  codigo: number = 0;
  descripcion: string = '';
  precio: number = 0;

  constructor(private articuloService: ActiculoService, private cdr: ChangeDetectorRef) {}
  
  agregarArticulo(): void {
    const articulo = { codigo: this.codigo, descripcion: this.descripcion, precio: this.precio };
    this.articuloService.agregarArticulo(articulo);
    this.limpiarCampos();
  }

  modificarArticulo(): void {
    const nuevoArticulo = { descripcion: this.descripcion, precio: this.precio };
    this.articuloService.modificarArticulo(this.codigo, nuevoArticulo);
    this.limpiarCampos();
  }

  seleccionarArticulo(articulo: any): void {
    this.codigo = articulo.codigo;
    this.descripcion = articulo.descripcion;
    this.precio = articulo.precio;
  }

  private limpiarCampos(): void {
    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;
  }
  ngOnInit(): void {
    this.articuloService.getArticuloSeleccionadoObservable().subscribe((articulo: any) => {
      this.seleccionarArticulo(articulo);
    });
  }

}
