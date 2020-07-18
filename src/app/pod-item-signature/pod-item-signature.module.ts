import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ItemSignatureRoutingModule } from "./pod-item-signature-routing.module";
import { ItemSignatureComponent } from "./pod-item-signature.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ItemSignatureRoutingModule
    ],
    declarations: [
        ItemSignatureComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ItemSignatureModule { }
