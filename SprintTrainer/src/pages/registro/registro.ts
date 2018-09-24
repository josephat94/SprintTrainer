import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
nombre;
sexo;
edad;
exp
constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');

    this.storage.get('nombre').then((val) => {
      console.log('Your name is->', val);

      if(val){
        this.navCtrl.setRoot(TabsPage);

      }
    });
  }
  enviarTabs(){

    this.storage.set('nombre', this.nombre);
    this.storage.set('sexo', this.sexo);
    this.storage.set('edad', this.edad);
    this.storage.set('exp', this.exp);


    this.navCtrl.setRoot(TabsPage);
  }
}
