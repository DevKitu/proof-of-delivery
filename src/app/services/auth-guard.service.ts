//angular imports
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

//app imports
import { AuthenticationService } from './';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor() { }

    canActivate() {
        if (AuthenticationService.isLoggedIn()) {
            return true;
        }
        else {
            return false;
        }
    }
}
