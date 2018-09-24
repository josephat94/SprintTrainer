import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuickPage } from './quick/quick';
import { StartRutinePage } from './start-routine/start-rutine';
import { CatalogoPage } from './catalogo/catalogo';

/**
 * Generated class for the RutinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rutines',
  templateUrl: 'rutines.html',
})
export class RutinesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutinesPage');
  }

  Quick(){
    const confirm = this.alertCtrl.create({
      title: '¿Rutina Rápida?',
      message: 'Es un reto rápido totalmente aleatorio ¿estas listo?',
      buttons: [
        {
          text: 'No ahora porfavor',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Claro',
          handler: () => {

            this.navCtrl.push(QuickPage);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  

  }

  Clasica(){
    this.navCtrl.push(StartRutinePage);
  }

  enviarCatalogo(){
    this.navCtrl.push(CatalogoPage);

  }

}
