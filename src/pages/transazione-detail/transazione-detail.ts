import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Transazione} from "../../models/Transazione";

/**
 * Generated class for the TransazioneDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transazione-detail',
  templateUrl: 'transazione-detail.html',
})
export class TransazioneDetailPage {
  trans: Transazione=new Transazione;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.trans=this.navParams.get('transazione')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransazioneDetailPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
