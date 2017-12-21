import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {InterceptorService} from "../providers/interceptor-service/interceptor-service";
import {SharedService} from "../providers/shared-service/shared-service";
import {TransazioneService} from "../providers/transazione-service/transazione-service";
import {LoginService} from "../providers/login-service/login-service";
import {CreditCardService} from "../providers/credit-card-service/credit-card-service";
import {ProductService} from "../providers/product-service/product-service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginService,
    TransazioneService,
    SharedService,
    InterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    ProductService,
    CreditCardService
  ]
})
export class AppModule {}
