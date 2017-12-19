import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {InterceptorService} from "../providers/interceptor-service/interceptor-service";
import {SharedService} from "../providers/shared-service/shared-service";
import {TransazioneService} from "../providers/transazione-service/transazione-service";
import {LoginService} from "../providers/login-service/login-service";
import {CreditCardService} from "../providers/credit-card-service/credit-card-service";
import {ProductService} from "../providers/product-service/product-service";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginService,
    TransazioneService,
    SharedService,
    InterceptorService,
    ProductService,
    CreditCardService,

  ]
})
export class AppModule {}
