import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {TransazioneDetailPage} from "../transazione-detail/transazione-detail";
import {Transazione} from "../../models/Transazione";
import {TransazioneService} from "../../providers/transazione-service/transazione-service";

/**
 * Generated class for the TransazionePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transazione',
  templateUrl: 'transazione.html',
})
export class TransazionePage {
  listaTransazioni: Array<Transazione>= new Array();
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,private transazioneService:TransazioneService) {
    this.getListTransazioni();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransazionePage');
  }
  openModal(transazione) {

    let modal = this.modalCtrl.create(TransazioneDetailPage, transazione);
    modal.present();
  }
  getListTransazioni() {
    this.transazioneService.getListaTransazioni().subscribe(data => {
      this.listaTransazioni = data;
      console.log("Prodotti: ", data);
    }, e => console.log(e))
  }
}
