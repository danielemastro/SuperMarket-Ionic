import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../models/Product";
import {ProductService} from "../../providers/product-service/product-service";

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  prodotto: Product;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ProductService) {
    this.prodotto = navParams.get('item');
    console.log(this.prodotto)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

  aggiungiProdotto(prod){
    this.service.addProdotto(prod);
  }
}
