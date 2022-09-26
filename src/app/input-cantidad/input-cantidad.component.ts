import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Dulce } from '../dulces-lista/Dulce';

@Component({
  selector: 'app-input-cantidad',
  templateUrl: './input-cantidad.component.html',
  styleUrls: ['./input-cantidad.component.scss']
})
export class InputCantidadComponent implements OnInit {

  @Input()
  dulce!: Dulce; //El ! evita que haga falta inicializar el atributo

  constructor() {}

  verificarStock(event: any, dulce: Dulce): void {

    /* let cantidadIngresada = event.target.value;
    console.log(cantidadIngresada); */
    console.log(dulce.cantidad);

    if (dulce.cantidad > dulce.stock) {

      dulce.cantidad = dulce.stock
    }else if (dulce.cantidad < 0) {
      
      dulce.cantidad = 0;
    } else {
      dulce.cantidad = dulce.cantidad
    }
  }

  incrementarCantidad(dulce: Dulce): void {

    if (dulce.cantidad < dulce.stock) {
      dulce.cantidad++;
    }
  }

  disminuirCantidad(dulce: Dulce) : void {

    if (dulce.cantidad > 0) {
      dulce.cantidad--;
    }
  }
  
  ngOnInit(): void {
  }

}
