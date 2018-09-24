import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RutinesPage } from './rutines';

@NgModule({
  declarations: [
    RutinesPage,
  ],
  imports: [
    IonicPageModule.forChild(RutinesPage),
  ],
})
export class RutinesPageModule {}
