import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RutineFormPage } from './rutine-form';

@NgModule({
  declarations: [
    RutineFormPage,
  ],
  imports: [
    IonicPageModule.forChild(RutineFormPage),
  ],
})
export class RutineFormPageModule {}
