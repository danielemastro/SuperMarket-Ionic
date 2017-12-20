import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductService} from "../../providers/product-service/product-service";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../models/product";
import {ProductDetailsPage} from "../product-details/product-details";

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  listaProdotti: Product[] = new Array<Product>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ProductService) {
    this.generaOfferte()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter")
    this.getList()
    console.log("Lista ricevuta: ", this.listaProdotti)
  }

  generaOfferte() {
    this.service.generaOfferte().subscribe(data =>
        console.log(data),
      e => console.log(e)
    )
  }

  getList() {
    console.log("Metodo getList")
    this.service.findAll().subscribe(data => {
      console.log("entrato nel subscribe")
      this.listaProdotti = data;
      console.log("Prodotti: ", data);
    }, e => console.log(e))
  }

  itemTapped(event, prod) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push('ProductDetailsPage', {
      item: prod
    });
  }
}
