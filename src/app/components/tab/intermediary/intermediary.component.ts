import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intermediary',
  templateUrl: './intermediary.component.html',
  styleUrls: ['./intermediary.component.css']
})
export class IntermediaryComponent implements OnInit {
  listaExercicios : any[] = [
    { id: '1', nome: 'Elevação Pélvica', quantidade: '20 cada perna', description: ' Exercício físico realizado em posição de prancha, com os braços estendidos e as palmas das mãos afastadas a largura dos ombros e alinhadas com os mesmos',img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    { id: '2', nome: 'Flexão arqueiro', quantidade: 14,description: ' Com os braços mais afastados, realize a flexão tradicional e em seguida transfira o peso do corpo para um dos lados até o outro braço ficar completamente estendido. Feito isso, retorne ao centro e estenda os cotovelos, realizando mais uma vez a flexão tradicional. Realize o mesmo para o outro lado', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    { id: '3', nome: 'Dip banco',  quantidade: 8,description: ' Colocar um banco atrás das costas. Com o banco perpendicular ao seu corpo, apoie suas mãos em sua borda com as mãos totalmente estendidos, separados na largura dos ombros.',img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
