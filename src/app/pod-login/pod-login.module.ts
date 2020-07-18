import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PodLoginRoutingModule } from "./pod-login.routing.module";
import { PodLoginComponent } from "./pod-login.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PodLoginRoutingModule
    ],
    declarations: [
        PodLoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PodLoginModule { }
