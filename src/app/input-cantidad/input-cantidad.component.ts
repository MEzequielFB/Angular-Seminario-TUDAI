import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-cantidad',
  templateUrl: './input-cantidad.component.html',
  styleUrls: ['./input-cantidad.component.scss']
})
export class InputCantidadComponent implements OnInit {

  @Input()
  cantidad!: number; //El ! evita que haga falta inicializar el atributo

  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number>;

  @Output()
  maxReached: EventEmitter<String>;

  constructor() {

    this.cantidadChange = new EventEmitter<number>();
    this.maxReached = new EventEmitter<String>();
  }

  verificarStock(): void {

    /* let cantidadIngresada = event.target.value;
    console.log(cantidadIngresada); */
    console.log(this.cantidad);

    if (this.cantidad > this.max) {

      this.cantidad = this.max
      this.maxReached.emit("Se alcanzó el máximo");
    }else if (this.cantidad < 0) {
      
      this.cantidad = 0;
    } else {
      this.cantidad = this.cantidad
    }
    this.cantidadChange.emit(this.cantidad);
  }

  incrementarCantidad(): void {

    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    } else {
      this.maxReached.emit("Se alcanzó el máximo");
    }
  }

  disminuirCantidad(): void {

    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }
  
  ngOnInit(): void {
  }

}
