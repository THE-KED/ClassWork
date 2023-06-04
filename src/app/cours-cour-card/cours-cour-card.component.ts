import { Component, Input, OnInit } from '@angular/core';
import { Classe } from '../Models/Classe';

@Component({
  selector: 'app-cours-cour-card',
  templateUrl: './cours-cour-card.component.html',
  styleUrls: ['./cours-cour-card.component.scss'],
})
export class CoursCourCardComponent  implements OnInit {

  @Input("classe")
  classe!:Classe;
  constructor() { }

  ngOnInit() {}

}
