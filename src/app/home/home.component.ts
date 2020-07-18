import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { EventData } from "tns-core-modules/data/observable";
import { Switch } from "tns-core-modules/ui/switch";

import * as app from "tns-core-modules/application";
import * as camera from "nativescript-camera";
import { Observable } from "rxjs";
import * as imageSource from "tns-core-modules/image-source";
import * as enums from "tns-core-modules/ui/enums";

import { FirebaseService, UtilitiesService } from "../services";

import { ItemBarcodeComponent } from "../pod-item-barcode/pod-item-barcode.component";

@Component({
    selector: "Home",
    providers: [ModalDialogService],
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    id: string;
    name: string;
    description: string;
    barcodeValue: String;
    imagepath: string;
    podImage: any;
    proofOD: Observable<any>;
    modalOptions: ModalDialogOptions

    private sub: any;
    private imagePath: string;
    private uploadedImageName: string;
    private uploadedImagePath: string;

    constructor(
        private firebaseService: FirebaseService,
        private utilitiesService: UtilitiesService,
        private route: ActivatedRoute,
        private _modalService: ModalDialogService,
       private _vcRef: ViewContainerRef
    ) {
        // Use the component constructor to inject providers.
        this.barcodeValue= " ";

    }

    ngOnInit(): void {
        // Init your component properties here.
        camera.requestPermissions().then(
            function success() {
            // permission request accepted or already granted
            // ... call camera.takePicture here ...
            console.log("camera permission granted: ");
            },
            function failure() {
            // permission request rejected
            // ... tell the user ...
            console.log("camera permission denied: ");
            }
            );
        this.sub = this.route.params.subscribe((params: any) => {
                this.id = params.id;
                console.log("the current id : ", this.id);
              });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    takePhoto() {
        const options = {
                  width: 300,
                  height: 300,
                  keepAspectRatio: true,
                  saveToGallery: true
              };
        camera.takePicture(options)
              .then((imageAsset) => {
                imageSource.fromAsset(imageAsset).then((res) => {
                      this.podImage = res;
                      console.log("Image taken success -> ", this.podImage);
                      // save the source image to a file, then send that file path to firebase
                    //  this.saveToFile(this.image);
                  });
              }).catch((err) => {
                  console.log("Error -> " + err.message);
              });
      }

      saveProofOD(id) {
        alert("Save me in the folder...");
      }



      onCheckedChange(args: EventData) {
    let sw = args.object as Switch;
    let isChecked = sw.checked; // boolean
    }

    getBarcode() {
      this.modalOptions = {
        viewContainerRef: this._vcRef,
        context: {},
        fullscreen: true
    };

    this._modalService.showModal(ItemBarcodeComponent, this.modalOptions)
        .then((result: string) => {
            console.log("Model has returned.. ",result);
            this.barcodeValue = result;
        });
    }

}
