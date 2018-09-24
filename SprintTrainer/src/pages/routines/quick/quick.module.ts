import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickPage } from './quick';

@NgModule({
  declarations: [
    QuickPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickPage),
  ],
})
export class QuickPageModule {}
