import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EXS_EXPRESS } from '../../../Exercises/exs';
import { CatalogoDatailPage } from './catalogo-datail/catalogo-datail';

/**
 * Generated class for the CatalogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html',
})
export class CatalogoPage {
Exc= EXS_EXPRESS;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoPage');
  }

goToDetail(exc){

  this.navCtrl.push(CatalogoDatailPage,{'exc':exc});

}

}
