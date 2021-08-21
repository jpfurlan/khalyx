import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-begginer',
  templateUrl: './begginer.component.html',
  styleUrls: ['./begginer.component.css']
})
export class BegginerComponent implements OnInit {
  exercicios: string[] = [
    "Exercício 1",
    "Exercício 2",
    "Exercício 3"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
