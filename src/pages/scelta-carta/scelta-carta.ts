import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams, Platform, AlertController} from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";
import {CreditCardService} from "../../providers/credit-card-service/credit-card-service";
import {CreditCard} from "../../models/CreditCard";
import {ProductService} from "../../providers/product-service/product-service";

@IonicPage()
@Component({
  selector: 'page-scelta-carta',
  templateUrl: 'scelta-carta.html',
})
export class SceltaCartaPage {

  loading: Loading;
  private creditCard:CreditCard = new CreditCard;
  listaCard: Array<CreditCard>= new Array;

  constructor(public alertCtrl: AlertController, private productService: ProductService, private creditCardService: CreditCardService, public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private _sanitizer: DomSanitizer, public loadingCtrl: LoadingController ) {
    this.platform.ready().then(() => {
  this.getListCardUser()
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SceltaCartaPage');
  }
  compraProdotti(creditCard) {
    this.productService.compraProdotti(this.productService.getCarrello(),creditCard.id).subscribe(data => {
      this.productService.cleanCarrello();
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

  getListCardUser() {
    this.creditCardService.getListCardUser().subscribe(data => {
      this.listaCard = data;
      console.log("Carte: ", data);
    }, err => {
      console.log(err);
    })
  }
  showConfirm(creditCard) {
    let confirm = this.alertCtrl.create({
      title: 'CONFERMA PAGAMENTO',
      message: 'Confermi di voler pagare con questa carta di credito?',
      buttons: [
        {
          text: 'SI',
          handler: () => {
            console.log('bottone cliccato sul si');
            this.compraProdotti(creditCard);
          }
        },
        {
          text: 'NO',
          handler: () => {
            console.log('bottone cliccato sul no');

          }
        }
      ]
    });
    confirm.present();
  }
}
