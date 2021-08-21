import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {
  exercicios: string[] = [
    "Exercício 1",
    "Exercício 2",
    "Exercício 3"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
