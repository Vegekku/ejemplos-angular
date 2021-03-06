import { Component, Input, OnInit } from '@angular/core';

export type Sugus = {flavour: string, color: string}

@Component({
  selector: 'app-sugus',
  templateUrl: './sugus.component.html',
  styleUrls: ['./sugus.component.css']
})
export class SugusComponent implements OnInit {

  @Input() flavour: string = 'lemon'
  @Input() colour: string = 'yellow'

  constructor() { }

  ngOnInit(): void {
  }

}
