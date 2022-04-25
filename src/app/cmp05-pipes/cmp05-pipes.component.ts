import { Component, OnInit } from '@angular/core';
import { DescuentoPipe } from './descuento.pipe';

@Component({
  selector: 'app-cmp05-pipes',
  templateUrl: './cmp05-pipes.component.html',
  styleUrls: ['./cmp05-pipes.component.css']
})
export class Cmp05PipesComponent implements OnInit {

  endSubstring = 20

  product = {
    name: 'one plus 8',
    description: 'Minions ipsum bananaaaa tatata bala tu tank yuuu! Belloo! Tatata bala tu uuuhhh. Aaaaaah bappleees pepete gelatooo. Pepete hahaha chasy para tú tank yuuu! Uuuhhh la bodaaa chasy jeje tatata bala tu wiiiii tulaliloo hahaha. Chasy wiiiii tank yuuu! Tatata bala tu tank yuuu! Gelatooo bananaaaa potatoooo bananaaaa jeje.',
    price: 385,
    buyDate: new Date()
  }

  message = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hola mundo...')
    }, 2000)
  })

  constructor() { }

  ngOnInit(): void {
    console.log(new DescuentoPipe().transform(200, 10))
  }

}
