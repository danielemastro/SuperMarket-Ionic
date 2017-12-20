import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarrelloPage } from './carrello';

@NgModule({
  declarations: [
    CarrelloPage,
  ],
  imports: [
    IonicPageModule.forChild(CarrelloPage),
  ],
})
export class CarrelloPageModule {}
