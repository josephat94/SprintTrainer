import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRutinePage } from './my-rutine';

@NgModule({
  declarations: [
    MyRutinePage,
  ],
  imports: [
    IonicPageModule.forChild(MyRutinePage),
  ],
})
export class MyRutinePageModule {}
