import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp02-input-output',
  templateUrl: './cmp02-input-output.component.html',
  styleUrls: ['./cmp02-input-output.component.css']
})
export class Cmp02InputOutputComponent implements OnInit {

  name: string = 'Pepe'
  surname: string = 'Moyano'
  email: string = 'pepe@gmail.com'

  constructor() { }

  ngOnInit(): void {
  }

  changeData(event: any) {
    switch(event.key) {
      case 'name':
        this.name = event.value
        break
      case 'surname':
        this.surname = event.value
        break
      case 'email':
        this.email = event.value
        break
    }
  }

}
