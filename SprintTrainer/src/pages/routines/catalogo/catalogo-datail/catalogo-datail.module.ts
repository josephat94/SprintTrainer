import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogoDatailPage } from './catalogo-datail';

@NgModule({
  declarations: [
    CatalogoDatailPage,
  ],
  imports: [
    IonicPageModule.forChild(CatalogoDatailPage),
  ],
})
export class CatalogoDatailPageModule {}
