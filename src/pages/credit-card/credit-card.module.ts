import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditCardPage } from './credit-card';

@NgModule({
  declarations: [
    CreditCardPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditCardPage),
  ],
})
export class CreditCardPageModule {}
