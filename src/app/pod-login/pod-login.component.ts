import { Component, OnInit } from '@angular/core';
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { EventData } from "tns-core-modules/data/observable";

import { AppUser } from "../models/pod-app-user.model";
import { FirebaseService } from "../services";

@Component({
  selector: 'pod-login',
  templateUrl: 'pod-login.component.html',
  styleUrls: ['pod-login.component.css']
})

export class PodLoginComponent implements OnInit {

  title: String ;
  user: AppUser;
  isLoggingIn: boolean ;
  isAuthenticating:boolean ;
  isFirebaseInit: boolean;
  isTrue:boolean;
  isFalse:boolean;

  constructor(
    private firebaseService: FirebaseService
  ) {

    this.title = "PROOF OF DELIVERY";
    this.isLoggingIn = true;
    this.isAuthenticating = false;
    this.isFirebaseInit = false;
    this.user = {
      email: "annick@gmail.com",
      password: "password"
    };

    this.isTrue = true;
    this.isFalse = false;

  }

  ngOnInit() { }

  submit() {
    this.isFirebaseInit = this.firebaseService.getFirebaseInitStatus();
    if(this.isFirebaseInit)
    {
      console.log("firebase init : ", this.isFirebaseInit);
    } else {
      console.log("Please, make sure that you are connected to the internet...");
    }

    this.isAuthenticating = true;
    if (this.isLoggingIn) {
      this.login();
    } else {
    }

  }

  login() {
     this.firebaseService.login(this.user)
        .then(() => {
          this.isAuthenticating = false;
        //  alert("logged in");
        })
        // tslint:disable-next-line:typedef-whitespace
        .catch((message: any) => {
          this.isAuthenticating = false;
        });

  }

  onAuthenticating(args: EventData) {

      console.log("isAuthenticating: ", this.isAuthenticating);
      let indicator: ActivityIndicator = <ActivityIndicator>args.object;
      console.log("indicator.busy changed to: " + indicator.busy);
  }

  forgotPassword() {
    alert("you dont have the password");
  }


}
