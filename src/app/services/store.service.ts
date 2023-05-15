import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  myShoppingCart: Product[] = [];

  constructor() { }

  addProduct(product: Product) {
    // console.log(product)
    this.myShoppingCart.push(product)
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal () {
    return this.myShoppingCart.reduce((acc, curr) => acc + curr.price ,0)
  }
}
