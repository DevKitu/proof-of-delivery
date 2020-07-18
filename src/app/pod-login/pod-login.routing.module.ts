import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PodLoginComponent } from "./pod-login.component";

const routes: Routes = [
    { path: "login", component: PodLoginComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PodLoginRoutingModule { }
