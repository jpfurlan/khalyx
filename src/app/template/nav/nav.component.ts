import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  Links = [
    {path: 'begginer', label: 'Begginer'},
    {path: 'intermediary', label: 'Intermediary'},
    {path: 'advanced', label: 'Advanced'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
