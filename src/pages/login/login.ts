import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams, Platform} from 'ionic-angular';
import {LoginService} from "../../providers/login-service/login-service";
import {User} from "../../models/User";
import {DomSanitizer} from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  private user:User = new User;

  constructor(private loginService: LoginService, public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private _sanitizer: DomSanitizer, public loadingCtrl: LoadingController) {
    //platform serve x scegliere su quale piattaforma (android o ios); sanitizer serve x sanitanizzare i dati se sono autenticati
    this.platform.ready().then(() => {

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    this.loginService.login(this.user).subscribe(data => {

      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
      // salva cio che dice il server
      localStorage.setItem('token', btoa(this.user.username + ':' + this.user.password));
      // salva token d'autenticazione (user+password autenticata) e rifà il login in automatico
      this.navCtrl.setRoot("ListaPage")  //pagina DI DESTINAZIONE del bottone LOGIN
    }, err => {
      console.log(err);

    })
  }
  registration() {
    this.navCtrl.setRoot("RegistrationPage") //destinazione altro bottone REGISTRAZIONE
  }
}
