import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Dulce } from './Dulce';

@Component({
  selector: 'app-dulces-lista',
  templateUrl: './dulces-lista.component.html',
  styleUrls: ['./dulces-lista.component.scss']
})
export class DulcesListaComponent implements OnInit {

  titulo: String;
  dulces: Dulce[];
  //carrito_service: CarritoService;

  constructor(private carrito_service: CarritoService) { //Se pasa la instancia del carrito como parametro del constructor

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
    this.carrito_service = carrito_service;
  }

  addToCarrito(dulce: Dulce): void { //Se agrega al servicio la cantidad de dulces indicada en el template de la lista
    this.carrito_service.addDulce(dulce);
    dulce.stock -= dulce.cantidad; //Se resta la cantidad agregada al stock
    dulce.cantidad = 0; //Se vuelve a setear la cantidad a 0
  }

  maxReached(mensaje: String): void {
    console.log(mensaje);
  }

  ngOnInit(): void {
  }

}
