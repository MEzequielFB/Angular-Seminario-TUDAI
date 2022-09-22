import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  titulo: String;

  constructor() {

    this.titulo = "Carrito de compras";
  }

  ngOnInit(): void {
  }

}
