import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/hello-ionic-signup/hello-ionic-signup.html'
})
export class HelloIonicSignupPage {
  constructor(app: IonicApp, nav: NavController) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param

  }

  signUp(){

    alert('We still dont have a back end, so this should do fine :)') 
  }
}
