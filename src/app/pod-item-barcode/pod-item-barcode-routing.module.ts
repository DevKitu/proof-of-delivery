import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ItemBarcodeComponent } from "./pod-item-barcode.component";

const routes: Routes = [
    { path: "", component: ItemBarcodeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ItemBarcodeRoutingModule { }
