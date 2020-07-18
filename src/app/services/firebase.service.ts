import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import * as  firebase from "nativescript-plugin-firebase";
import { UtilitiesService } from "./";

@Injectable()
export class FirebaseService {

  firebaseInitStatus: boolean;

  currentuUser: any;
  barcodeString: String;

  constructor(
    private router: Router,
    private utilities:UtilitiesService
  ) {

    this.firebaseInitStatus = false;
  }

// Initialize the Firebase functionalities

  firebaseInitization() {

    firebase.init({
        iOSEmulatorFlush: true,
        persist: false,
      /*  apiKey: "AIzaSyBzSB6nls9qyBlC7WMQIna09nQc9Ut7dOE",
        authDomain: "gs://prod-5f996.firebaseapp.com",
        databaseURL: "gs://prod-5f996.firebaseio.com",
        projectId: "prod-5f996",
        messagingSenderId: "675501180376",
        appId: "1:675501180376:web:32dc75f61d1230f349dead",
        measurementId: "G-1HEHMK7JXE",*/
        storageBucket: "gs://prod-5f996.appspot.com"
      })
      .then(() => {
          console.log(`firebase.init successfully...`);
          this.firebaseInitStatus = true;
        },
      error => {
          this.firebaseInitStatus = false;
          console.log(`firebase.init error: ${error}`);
          console.log(`Not able to connect to server. Server Error: ${error}`);
        }
      );
  }

// Get the Firebase Initialization Status

   getFirebaseInitStatus(): boolean {
        return this.firebaseInitStatus;
    }

// Login function

  login(user: any) {
        return firebase.login({
          type: firebase.LoginType.PASSWORD,
          passwordOptions: {
            email: user.email,
            password: user.password
          }
        })
        .then((result: any) => {
            // console.log("token after login: ", result.uid);
            // console.log("result: ", JSON.stringify(result));
            // console.log("result raw: ", result);
            //  this.isLogIn = true;
              this.router.navigate(["home"]);
            //  this.getUser();

            this.currentuUser = result;
            console.log("token after login: ", this.currentuUser);

            return JSON.stringify(result);

          }, (errorMessage: any) => {
            alert(errorMessage);
          })
          .catch((error) => console.log("login error: ", error));
      }

// Logout function
  logout() {
          // BackendService.token = "";
            firebase.logout();
            //this.router.navigate(["pod-login"]);
      }

// upload proof of deliveries images
  uploadFile(localPath: string, file?: any): Promise<any> {
        const filename = this.utilities.getFilename(localPath);
        const remotePath = `${filename}`;
        console.log("we are in for Upload remote ", remotePath);
        console.log("we are in for Upload local ", localPath);

        return firebase.storage.uploadFile({
          remoteFullPath: remotePath, // "uploads/images/telerik-logo-uploaded.png",
          localFullPath: localPath,
          onProgress: (status) => {
              console.log("Uploaded fraction: " + status.fractionCompleted);
              console.log("Percentage complete: " + status.percentageCompleted);
              this.router.navigate(["/deliveries"]);
          }
        });
    }



// Edit Proof of deliveries details information
  editDescription(id: string, description: string) {
  // this.publishUpdates();
      return firebase.update("/Gifts/" + id + "", { description })
        .then((result: any) => {
          return "You have successfully edited the description!";
        },
        (errorMessage: any) => {
          console.log(errorMessage);
        });
}


setBarcode(barcode: String) {
  console.log("service barcode received... ", barcode);
  this.barcodeString = barcode;
  console.log("service barcode... ", this.barcodeString);

}


}
