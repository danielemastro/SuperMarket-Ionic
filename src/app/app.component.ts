import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {ListaPage} from "../pages/lista/lista";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'ListaPage';  //indica la 1°pagina che si vede

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: 'LoginPage'},
      { title: 'Lista Prodotti', component: 'ListaPage' },
      { title: 'Registrazione', component: 'RegistrationPage' },
      { title: 'Carrello', component: 'CarrelloPage' },
      { title: 'Carta', component: 'CreditCardPage' },
      { title: 'Scelta', component: 'SceltaCartaPage' },
      { title: 'Transazioni', component: 'TransazionePage'}
      ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
