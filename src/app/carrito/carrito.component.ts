import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoService } from '../carrito.service';
import { Dulce } from '../dulces-lista/Dulce';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  titulo: String;
  dulces$: Observable<Dulce[]>;

  constructor(private carrito_service: CarritoService) { //Se pasa por parametro la instancia del servicio

    this.titulo = "Carrito de compras";
    this.dulces$ = carrito_service.dulces.asObservable(); //Se declara al arreglo como observable
    //carrito_service.dulces.subscribe(observable => this.dulces = observable); //El arreglo del componente (dulces) se suscribe al servicio del carrito
  }

  ngOnInit(): void {
  }

}
