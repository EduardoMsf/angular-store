import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges{
  @Input() img: string = "";
  @Output() loaded = new EventEmitter<string>();

  imageDefault: string ="https://picsum.photos/200";


  constructor(){
    //before render
    //no async
    console.log("constructor, img value =>", this.img)
  }

  ngOnChanges (){

    //before render
    //n times
     console.log('OnChanges, img value =>', this.img)
  }

  ngOnInit(): void {

    //before render
    // async fetch once time

    console.log("on init, img value =>", this.img)
  }

  ngAfterViewInit() {
    //after render
    //handler children
    console.log("after view init, img value =>", this.img)
  }

  ngOnDestroy () {
    console.log("on destroy, img value =>", this.img)
  }

  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    this.loaded.emit(this.img)
  }
}
