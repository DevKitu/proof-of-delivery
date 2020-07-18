import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

import * as ImageSource from "tns-core-modules/image-source";

// import { DrawingPad } from "nativescript-drawingpad";
import { registerElement } from "@nativescript/angular/element-registry";


registerElement(
    'DrawingPad',
    () => require('nativescript-drawingpad').DrawingPad
);

@Component({
  selector: 'pod-item-signature',
  templateUrl: 'pod-item-signature.component.html',
  styleUrls: ['pod-item-signature.component.css']
})

export class ItemSignatureComponent implements OnInit {

  private pad: any;
  private drawingImage: any;
  private image: any;
  @ViewChild('DrawingPad', {static: false}) DrawingPad: ElementRef;



  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    // get reference to the drawing pad
    this.pad = this.DrawingPad.nativeElement;
  }

  getMyDrawing() {
    // then get the drawing (Bitmap on Android) of the drawingpad
    this.pad.getDrawing().then(
      data => {
        this.drawingImage = ImageSource.fromNativeSource(data);
        this.image = data;
        console.log("raw image ", data);
        // console.log("64bit image ", this.drawingImage.toBase64String("png", 70));
      },
      err => {
        console.log(err);
      }
    );
  }

  clearMyDrawing() {
    this.pad.clearDrawing();
    this.image = "";
  }
}
