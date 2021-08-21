import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  cursos: string[] = [
    "Exercício 1",
    "Exercício 2",
    "Exercício 3"
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
