import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams, Platform} from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";
import {CreditCardService} from "../../providers/credit-card-service/credit-card-service";
import {CreditCard} from "../../models/CreditCard";

@IonicPage()
@Component({
  selector: 'page-credit-card',
  templateUrl: 'credit-card.html',
})
export class CreditCardPage {

  loading: Loading;
  private creditCard:CreditCard = new CreditCard;

  constructor(private creditCardService: CreditCardService, public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private _sanitizer: DomSanitizer, public loadingCtrl: LoadingController) {
    this.platform.ready().then(() => {

    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditCardPage');
  }
  getListCardUser(){
    this.creditCardService.getListCardUser().subscribe(data => {
      console.log("Carte: ", data);
    }, err =>{
      console.log(err);
    })
  }
  addCard() {
    console.log(this.creditCard)
    this.creditCardService.addCard(this.creditCard).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
  deleteCard(creditCard){
    console.log(creditCard)
    this.creditCardService.deleteCreditCard(creditCard).subscribe(data => {
      this.getListCardUser()
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

}
