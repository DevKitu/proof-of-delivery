import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

import { registerElement } from "@nativescript/angular/element-registry";

registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);

import { RouterExtensions } from "@nativescript/angular/router";

import { FirebaseService } from "../services";

@Component({
    selector: 'pod-item-barcode',
    templateUrl: 'pod-item-barcode.component.html',
    styleUrls: ['pod-item-barcode.component.css']
})

export class ItemBarcodeComponent implements OnInit {

    pause = true;
    constructor(
        private firebaseService: FirebaseService,
        private route: RouterExtensions,
        private barcodeScanner: BarcodeScanner,
        private _params: ModalDialogParams
    ) {

        setTimeout(() => {
            this.pause = false;
        }, 2000);
    }
    ngOnInit() { }

    public onScanResult(evt) {
        // console.log(evt.object);
        console.log(`onScanResult: ${evt.text} (${evt.format})`);
        this.firebaseService.setBarcode(evt.text);
        this._params.closeCallback(evt.text);

        //this.route.navigate(["/"]);

    }

    public scanTapped(): void {
        let scan = () => {
            this.barcodeScanner.scan({
                formats: "QR_CODE, EAN_13",
                beepOnScan: true,
                reportDuplicates: true,
                preferFrontCamera: false
                // continuousScanCallback: scanResult => {
                //   console.log("result: " + JSON.stringify(scanResult));
                //   this.barcodeScanner.stop();
                // }
            })
                .then((result) => {
                    console.log(JSON.stringify(result));
                })
                .catch(error => console.log(error));
        };

        this.barcodeScanner.hasCameraPermission()
            .then(granted => granted ? scan() : console.log("Permission denied"))
            .catch(() => {
                this.barcodeScanner.requestCameraPermission()
                    .then(() => scan());
            });
    }

}
