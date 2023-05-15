import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  img: string= "";
  @Input('img')
    set changeImg( newImg: string ){
      this.img = newImg;
      console.log("change just img", this.img);
    }
  @Output() loaded = new EventEmitter<string>();

  imageDefault: string ="https://picsum.photos/200";
  // counter: number = 0;
  // counterFunction: any;


  constructor(){
    //before render
    //no async
    console.log("constructor, img value =>", this.img)
  }

  ngOnChanges (changes: SimpleChanges){

    //before render
    //n times
     console.log('OnChanges, img value =>', this.img)
     console.log(changes)
  }

  ngOnInit(): void {

    //before render
    // async fetch once time

    console.log("on init, img value =>", this.img)
    // this.counterFunction = setInterval(() => {
    //   this.counter += 1;
    //   console.log(this.counter)
    // }, 1000)
  }

  ngAfterViewInit() {
    //after render
    //handler children
    console.log("after view init, img value =>", this.img)
  }

  ngOnDestroy () {
    // clearInterval(this.counterFunction)
    console.log("on destroy, img value =>", this.img)
  }

  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    this.loaded.emit(this.img)
  }
}
