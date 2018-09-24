import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { RegistroPage } from '../registro/registro';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private vibration: Vibration, public storage:Storage) {


    this.storage.get('nombre').then((val) => {
      console.log('Your name is->', val);

      if(val){
        this.navCtrl.setRoot(TabsPage);

      }
    });
  }






RetoAceptado(){

  this.navCtrl.push(RegistroPage);
}


  BeginRutine(){
    this.vibration.vibrate(1000);

  }
  finishRutine(){
    this.vibration.vibrate([1000,1000]);

  }
  



}
