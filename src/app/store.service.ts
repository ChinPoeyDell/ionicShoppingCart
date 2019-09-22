import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  carts = new BehaviorSubject([])

  stores = new BehaviorSubject([
    {
      id: 1,
      imageUrl: "/assets/product/1.jpeg",
      title: "2017 Boy Bearista",
      description: "No idea what Bear",
      quantity: 0,
      price: 100,
      selected: false,
    },
    {
      id: 2,
      imageUrl: "/assets/product/2.jpg",
      title: "Green Apron Bearista",
      description: "Lousy Bear",
      quantity: 0,
      price: 80,
      selected: false,
    },
    {
      id: 3,
      imageUrl: "/assets/product/3.jpg",
      title: "Christmas Bearista",
      description: "Launch in Chritmas",
      quantity: 0,
      price: 120,
      selected: false,
    },
    {
      id: 4,
      imageUrl: "/assets/product/4.jpg",
      title: "Mermaid Bearista",
      description: "Starbuck Logo Bear",
      quantity: 0,
      price: 120,
      selected: false,
    },
    {
      id: 5,
      imageUrl: "/assets/product/5.jpg",
      title: "Korean Bearista",
      description: "Couple Bear",
      quantity: 0,
      price: 200,
      selected: false,
    },
    {
      id: 6,
      imageUrl: "/assets/product/6.jpg",
      title: "Tiger Bearista",
      description: "Malaysia Tiger Bear",
      quantity: 0,
      price: 150,
      selected: false,
    },
    {
      id: 7,
      imageUrl: "/assets/product/7.jpg",
      title: "Bearista 2012",
      description: "Limited Edition Bear",
      quantity: 0,
      price: 500,
      selected: false,
    }
  ])

  constructor() { }

  remove(id){
    let filteredCarts = this.carts.getValue().filter(cart => {
      return cart.id !== id
    })
    this.carts.next(filteredCarts)
  }
}
