import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

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

  constructor( private storeService: StoreService ){
    this.myShoppingCart = this.storeService.getShoppingCart()
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal()
  }




}
