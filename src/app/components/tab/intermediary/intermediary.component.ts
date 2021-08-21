import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intermediary',
  templateUrl: './intermediary.component.html',
  styleUrls: ['./intermediary.component.css']
})
export class IntermediaryComponent implements OnInit {
  exercicios: string[] = [
    "Exercício 1",
    "Exercício 2",
    "Exercício 3"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
