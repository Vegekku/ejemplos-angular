import { Component, OnInit } from '@angular/core';
import { Sugus } from '../cmp02-input-output/sugus/sugus.component';

@Component({
  selector: 'app-cmp03-directivas',
  templateUrl: './cmp03-directivas.component.html',
  styleUrls: ['./cmp03-directivas.component.css']
})
export class Cmp03DirectivasComponent implements OnInit {

  color: string = '#acacac'
  lineThrough: boolean = true

  get styles() {
    return {
      textDecoration: 'underline',
      backgroundColor: this.color
    }
  }

  darkModeActive: boolean = false

  sugusList: Array<Sugus> = [
    { color: 'blue', flavour: 'pineapple' },
    { color: 'yellow', flavour: 'lemon' },
    { color: 'orange', flavour: 'orange' },
    { color: 'red', flavour: 'strawberry' },
  ]

  listIngresosGastos = [
    { concept: 'Luz', amount: -80 },
    { concept: 'Salario', amount: 1500 },
    { concept: 'Agua', amount: -50 },
    { concept: 'Comida', amount: -350 },
    { concept: 'Loteria', amount: 150 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getStyles() {
    return {
      textDecoration: 'underline',
      backgroundColor: this.color
    }
  }

  toggleDarkMode(active: boolean) {
    this.darkModeActive = active
  }

}
