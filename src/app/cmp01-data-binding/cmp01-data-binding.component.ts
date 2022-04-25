import { Component, OnInit } from '@angular/core';

type User = {name: string, surname: string, email: string };

// interface IUser {
//   name: string,
//   surname: string,
//   email: string
// }

@Component({
  selector: 'app-cmp01-data-binding',
  templateUrl: './cmp01-data-binding.component.html',
  styleUrls: ['./cmp01-data-binding.component.css']
})
export class Cmp01DataBindingComponent implements OnInit {
  user: {name: string, surname: string, email: string } = {
    name: 'Angel',
    surname: 'Villalba',
    email: 'angel@gmail.com'
  }

  user2: User = {
    name: 'Sara',
    surname: 'Villalba',
    email: 'sara@gmail.com'
  }

  name: string = ''

  urlAngularLogo: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

  constructor() { }

  ngOnInit(): void {
  }

  getName(): string {
    return this.user2.name;
  }

  resetEmail(event: any): void {
    console.log( event.target.outerText )
    this.user.email = '';
  }

  changeEmail(event: any): void {
    this.user.email = event.target.value
  }

}
