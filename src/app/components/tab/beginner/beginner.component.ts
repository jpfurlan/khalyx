import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.css']
})
export class BeginnerComponent implements OnInit {

  listaExercicios : any[] = [
    { id: '1', nome: 'Flexão normal', quantidade: "20 Repetições", description: ' Exercício realizado em posição de prancha, com os braços estendidos e as palmas das mãos afastadas a largura dos ombros e alinhadas com os mesmos', img: "./../../../../assets/img/flexao.jpg" },
    { id: '2', nome: 'Flexão arqueiro', quantidade: "14 Repetições",description: ' Com os braços mais afastados, realize a flexão tradicional e em seguida transfira o peso do corpo para um dos lados até o outro braço ficar completamente estendido. Feito isso, retorne ao centro e estenda os cotovelos, realizando mais uma vez a flexão tradicional. Realize o mesmo para o outro lado', img: "./../../../../assets/img/flexao.jpg" },
    { id: '3', nome: 'Dips',  quantidade: "8 Repetições",description: ' Colocar um banco atrás das costas. Com o banco perpendicular ao seu corpo, apoie suas mãos em sua borda com as mãos totalmente estendidos, separados na largura dos ombros.', img: "./../../../../assets/img/flexao.jpg" },
  ];



  constructor() {}

  ngOnInit(): void {
  }

}
