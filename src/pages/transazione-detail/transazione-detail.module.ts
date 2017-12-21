import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransazioneDetailPage } from './transazione-detail';

@NgModule({
  declarations: [
    TransazioneDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TransazioneDetailPage),
  ],
})
export class TransazioneDetailPageModule {}
