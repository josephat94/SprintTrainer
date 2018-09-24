import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CatalogoDatailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogo-datail',
  templateUrl: 'catalogo-datail.html',
})
export class CatalogoDatailPage {
exc:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.exc=navParams.get('exc');}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoDatailPage');
  }

}
