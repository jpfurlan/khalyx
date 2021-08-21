import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {
  listaExercicios : any[] = [
    { id: '1', nome: 'Flexão', description: ' Exercício de levantamento do chão'},
    { id: '2', nome: 'Burpee', description: ' Exercício que movimenta o corpo todo'},
    { id: '3', nome: 'Supino', description: ' Exercício para trabalhar os biceps'},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
