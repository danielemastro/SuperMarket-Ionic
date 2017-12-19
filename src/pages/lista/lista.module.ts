import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPage } from './lista';

@NgModule({
  declarations: [
    ListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPage),
  ],
})
export class ListaPageModule {}
