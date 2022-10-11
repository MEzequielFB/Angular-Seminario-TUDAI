import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dulce } from './dulces-lista/Dulce';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private _dulces: Dulce[]; //Se declara privada
  dulces: BehaviorSubject<Dulce[]> //Se hace observable el arreglo de dulces del servicio

  constructor() {
    this._dulces = [];
    this.dulces = new BehaviorSubject(this._dulces); //Notifica los cambios en el arreglo de dulces del servicio
  }

  addDulce(dulceParam: Dulce) { //Busca un dulce con en su lista que tenga el mismo nombre que el pasado por parámetro
    
    let dulce = this._dulces.find((dulce) => dulce.titulo == dulceParam.titulo);
    if (!dulce) { //Si no existe se agrega una copia del dulce al arreglo
      this._dulces.push({... dulceParam}); //Clona el objeto
    } else { //Si existe se suma la cantidad de ese dulce
      dulce.cantidad += dulceParam.cantidad;
    }
    this.dulces.next(this._dulces); //El observable notifica los cambios del arreglo - Equivalente al emitt de eventos
  }
}