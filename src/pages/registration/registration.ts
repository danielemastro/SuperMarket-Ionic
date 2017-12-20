import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams, Platform} from 'ionic-angular';
import {User} from "../../models/User";
import {LoginService} from "../../providers/login-service/login-service";
import {DomSanitizer} from "@angular/platform-browser";


@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  loading: Loading;
  private user:User = new User;

  constructor(private loginService: LoginService, public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private _sanitizer: DomSanitizer, public loadingCtrl: LoadingController ) {
    this.platform.ready().then(() => {

    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  registration() {
    console.log("ho iniziato register: "+this.user);
    this.loginService.registration(this.user).subscribe(data => {
      console.log(data);
      this.navCtrl.setRoot("LoginPage")  //pagina DI DESTINAZIONE
    }, err => {
      console.log(err);
    })
  }

}
