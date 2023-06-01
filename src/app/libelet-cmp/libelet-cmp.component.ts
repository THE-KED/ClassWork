import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../Models/Question';

@Component({
  selector: 'app-libelet-cmp',
  templateUrl: './libelet-cmp.component.html',
  styleUrls: ['./libelet-cmp.component.scss'],
})
export class LibeletCmpComponent  implements OnInit {


  @Input("question")
  question!:Question;

  constructor() { }

  ngOnInit() {}

}
