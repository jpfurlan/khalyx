import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

/**
 * @title Basic use of the tab nav bar
 */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  links = [
    {path:'beginner', label:'Beginner'},
    {path:'intermediary', label:'Intermediary'},
    {path:'advanced', label:'Advanced'},
  ];
  activeLink = this.links[0];




}
