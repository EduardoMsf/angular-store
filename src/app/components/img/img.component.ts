import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img: string = "";
  @Output() loaded = new EventEmitter<string>();

  imageDefault: string ="https://picsum.photos/200";

  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    this.loaded.emit(this.img)
  }
}
