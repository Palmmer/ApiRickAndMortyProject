import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../../app/_shared/interfaces/ ListI.interface'

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {
  @Input() info_personaje: Character | any;

  constructor(

  ) {

  }

  ngOnInit(): void {


  }
}
