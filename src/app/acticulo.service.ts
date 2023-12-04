import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiculoService {
  private articulos: any[] = [];
  private articuloSeleccionadoSubject = new Subject<any>();
  getArticulos(): any[] {
    return this.articulos;
  }
  
  getArticuloPorCodigo(codigo: number): any | undefined {
    return this.articulos.find((articulo) => articulo.codigo === codigo);
  }

  agregarArticulo(articulo: any): void {
    this.articulos.push(articulo);
  }

  borrarArticulo(codigo: number): void {
    this.articulos = this.articulos.filter((articulo) => articulo.codigo !== codigo);
  }

  modificarArticulo(codigo: number, nuevoArticulo: any): void {
    const index = this.articulos.findIndex((articulo) => articulo.codigo === codigo);
    if (index !== -1) {
      this.articulos[index] = { ...nuevoArticulo, codigo };
    }
  }
  constructor() { }

  getArticuloSeleccionadoObservable() {
    return this.articuloSeleccionadoSubject.asObservable();
  }

  seleccionarArticulo(articulo: any): void {
    this.articuloSeleccionadoSubject.next(articulo);
  }
}
