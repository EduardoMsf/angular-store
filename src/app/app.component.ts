import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = ""

  onLoaded(img: string) {
    console.log('log padre', img)
  }
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

}
