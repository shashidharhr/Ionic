import {Page, NavController} from 'ionic/ionic';
import {Injectable} from "angular2/core";

@Page({
  templateUrl: 'build/pages/hello-ionic-signup/hello-ionic-signup.html'
})


export class HelloIonicSignupPage {



  constructor( nav: NavController ) {
     this.nav = nav;

  }
}
