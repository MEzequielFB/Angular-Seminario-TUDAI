import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  nombre: String;
  direccion: String;
  mail: String;

  constructor() {

    this.nombre = "Ezequiel Frisone";
    this.direccion = "Sarmiento 842";
    this.mail = "email44@hotmail.com";
  }

  ngOnInit(): void {
  }

}
