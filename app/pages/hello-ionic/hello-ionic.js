import {IonicApp, Page, NavController} from 'ionic/ionic';
import {Http, Response} from 'angular2/http';
import {Injectable} from "angular2/core";

    import {ItemDetailsPage} from '../item-details/item-details';
   import {HelloIonicSignupPage} from '../hello-ionic-signup/hello-ionic-signup';
import 'rxjs/Rx';

//import {Injectable} from 'angular2/angular2';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})

@Injectable()
export class HelloIonicPage {
  // ihttp: '',
   result: Object;

  constructor(http: Http, nav: NavController,) {
    // this.ihttp = http;
     this.nav = nav;
     this.http=http;
  // this.result = {friends:[]};

//  http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0').map((res: Response) => res.json()).subscribe(res => this.result = res);

  }

  goToOtherPage(event) {
      //    console.log('You clicked me!!');
      // //   var lon = this.result.coord.lon;
      //  this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0').map((res: Response) => res.json()).subscribe(res => this.result = res));
      //   console.log("Location:" this.result.name);
      //   console.log("Longitude: "this.result.coord.lon);
      //   console.log("Latitude: "  this.result.coord.lat);
      //   console.log("Visibility" this.result.visibility);



        //  alert("Longitude: "+ this.result.coord.lat);
        //  alert("Latitude: "+ this.result.coord.lat);

  this.nav.push(HelloIonicSignupPage);
//-------------------------------------


   }

   apiCall(){

           this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0')
     .map((res: Response) => res.json())
     .subscribe(
       res => this.result = res,
       err => this.logError(err),
       () => console.log('Fetched successfully')
     );
       console.log("Location:" this.result.name);
       console.log("Longitude: "this.result.coord.lon);
       console.log("Latitude: "  this.result.coord.lat);
       console.log("Visibility" this.result.visibility);
   }

}
