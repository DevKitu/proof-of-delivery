//angular imports
import { Injectable } from '@angular/core';


@Injectable()
export class AuthenticationService {

  isLogIn: boolean;

  constructor(){
    this.isLogIn = false;
  }
  /**
   * login
   */
  login() {

    this.isLogIn = true;
    return this.isLogIn;
  }

  static isLoggedIn(): boolean {

        return true;
    }

}
