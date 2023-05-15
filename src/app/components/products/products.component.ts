import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product[] = [];
  total: number = 0;

  products: Product[] = [{
    id: "1",
    name: "Product 1",
    img: "https://picsum.photos/200",
    price: 101
  },
  {
    id: "2",
    name: "Product 2",
    img: "https://picsum.photos/200",
    price: 102
  },{
    id: "3",
    name: "Product 3",
    img: "https://picsum.photos/200",
    price: 103
  },
  {
    id: "4",
    name: "Product 4",
    img: "https://picsum.photos/200",
    price: 104
  }]

  onAddToShoppingCart(product: Product) {
    // console.log(product)
    this.myShoppingCart.push(product)
    console.log(this.myShoppingCart)
    this.total = this.myShoppingCart.reduce((acc, curr) => acc + curr.price ,0)
  }


}
