import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ItemBarcodeRoutingModule } from "./pod-item-barcode-routing.module";
import { ItemBarcodeComponent } from "./pod-item-barcode.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ItemBarcodeRoutingModule
    ],
    declarations: [
        ItemBarcodeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ItemBarcodeModule { }
