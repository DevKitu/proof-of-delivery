import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PodLoginComponent } from "./pod-login/pod-login.component";
import { ItemBarcodeComponent } from "./pod-item-barcode/pod-item-barcode.component";
import { ItemSignatureComponent } from "./pod-item-signature/pod-item-signature.component";
import { AuthGuard } from "./services";

const routes: Routes = [
    {
      path: "",
      redirectTo: "/home",
      pathMatch: "full"
    },
    {
      path: "pod-login",
      component: PodLoginComponent,
    },
    {
      path: "pod-item-barcode",
      component: ItemBarcodeComponent,
    },
    {
      path: "pod-item-signature",
      component: ItemSignatureComponent,
    },
    {
      path: "home",
      loadChildren: () => import("~/app/home/home.module")
      .then((m) => m.HomeModule),
      canActivate: [AuthGuard],
      pathMatch: "full"
    },
    {
      path: "browse",
      loadChildren: () => import("~/app/browse/browse.module")
      .then((m) => m.BrowseModule),
      canActivate: [AuthGuard],
      pathMatch: "full"
    },
    {
      path: "search",
      loadChildren: () => import("~/app/search/search.module")
      .then((m) => m.SearchModule),
      canActivate: [AuthGuard],
      pathMatch: "full"
    },
    {
      path: "featured",
      loadChildren: () => import("~/app/featured/featured.module")
      .then((m) => m.FeaturedModule),
      canActivate: [AuthGuard],
      pathMatch: "full"
    },
    {
      path: "settings",
      loadChildren: () => import("~/app/settings/settings.module")
      .then((m) => m.SettingsModule),
      canActivate: [AuthGuard],
      pathMatch: "full"
    }
/*    { path: "pod-login", loadChildren: () => import("~/app/pod-login/pod-login.module").then((m) => m.PodLoginModule) }*/
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
