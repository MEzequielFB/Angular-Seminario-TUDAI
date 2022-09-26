import { Component, OnInit } from '@angular/core';
import { Dulce } from './Dulce';

@Component({
  selector: 'app-dulces-lista',
  templateUrl: './dulces-lista.component.html',
  styleUrls: ['./dulces-lista.component.scss']
})
export class DulcesListaComponent implements OnInit {

  titulo: String;
  dulces: Dulce[];

  constructor() {

    this.titulo = "Dulces recomendados";
    this.dulces = [
      {
        titulo: "Pocky sabor chocolate",
        precio: 1500,
        descripcion: "Pocky sabor chocolate",
        imagen: {
          path: "assets/img/pocky-chocolate.webp",
          alt: "Pocky sabor chocolate"
        },
        stock: 5,
        descuento: true,
        cantidad: 0
      },
      {
        titulo: "Pocky sabor matcha",
        precio: 1450,
        descripcion: "Pocky sabor matcha",
        imagen: {
          path: "assets/img/pocky-matcha.jpg",
          alt: "Pocky sabor matcha"
        },
        stock: 10,
        descuento: false,
        cantidad: 0
      },
      {
        titulo: "Snack calbee sabor camarón",
        precio: 1450,
        descripcion: "Snack sabor camarón",
        imagen: {
          path: "assets/img/snack-camaron.jpg",
          alt: "Snack sabor camarón"
        },
        stock: 0,
        descuento: false,
        cantidad: 0
      },
    ]
  }

  ngOnInit(): void {
  }

}
