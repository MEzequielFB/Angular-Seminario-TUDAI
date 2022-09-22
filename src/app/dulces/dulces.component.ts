import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dulces',
  templateUrl: './dulces.component.html',
  styleUrls: ['./dulces.component.scss']
})
export class DulcesComponent implements OnInit {

  titulo: String;

  constructor() {

    this.titulo = "Dulces";
  }

  ngOnInit(): void {
  }

}
