import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { BarcodeScanner } from "nativescript-barcodescanner";

import { FirebaseService, AuthGuard, UtilitiesService }  from "./services";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PodLoginModule }  from "./pod-login/pod-login.module";
import { ItemBarcodeModule } from "./pod-item-barcode/pod-item-barcode.module";
import { ItemSignatureModule } from "./pod-item-signature/pod-item-signature.module";

import { registerElement } from "@nativescript/angular/element-registry";

registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);




@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        PodLoginModule,
        ItemBarcodeModule,
        ItemSignatureModule,
        NativeScriptUISideDrawerModule

    ],
    declarations: [
        AppComponent
    ],
    providers: [
      BarcodeScanner,
      AuthGuard,
      UtilitiesService,
      FirebaseService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
