import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../models/Product";
import {CreditCard} from "../../models/CreditCard";
import {ProductService} from "../../providers/product-service/product-service";

/**
 * Generated class for the CarrelloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrello',
  templateUrl: 'carrello.html',
})
export class CarrelloPage {
  listProduct: Array<Product> = new Array();
  totale: number = 0;
  position: string = 'below';
  selected: CreditCard = new CreditCard();
  constructor(public navCtrl: NavController, public navParams: NavParams,private productServices: ProductService) {
    this.getCarrello()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrelloPage');
  }

  checkOut(){
    this.navCtrl.setRoot("SceltaCartaPage")
  }
  getCarrello() {
    this.listProduct = JSON.parse(localStorage.getItem("carrello"))
    this.getTotale()
    console.log("CARRELLO - Carrello:", this.listProduct) //FUNZIONA
  }

  delete(product) {
    console.log(product)
    this.productServices.deleteCarrello(product).subscribe(data => {

      this.getCarrello()
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

  reduce(product) {
    console.log(product)
    this.productServices.deleteOne(product).subscribe(
      data => {
        this.getCarrello();
        console.log("Nuovo prodotto: ", product)
      }, err => {
        console.log(err);
      })
  }

  getTotale() {
    this.totale = 0
    for (let prodotto of this.listProduct) this.totale += (prodotto.prezzoScontato * prodotto.quantitaDaAcquistare)
  }
}
