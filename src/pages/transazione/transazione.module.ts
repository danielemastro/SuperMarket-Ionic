import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransazionePage } from './transazione';

@NgModule({
  declarations: [
    TransazionePage,
  ],
  imports: [
    IonicPageModule.forChild(TransazionePage),
  ],
})
export class TransazionePageModule {}
