import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {
user:any;
isEditing=false;

nombre;
sexo;
edad;
exp
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage, private _storage: StorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
 this._storage.getUsuario().then((us)=>{
  this.user=us;

  this.nombre=this.user.nombre;
this.sexo=this.user.sexo;
this.edad=this.user.edad;
this.exp=this.user.exp;
  console.log("Usuario->",this.user);
})


  }

  EmpezarEdicion(){

    this.isEditing=true;
  }
  GuardarValores(){

    this.isEditing=false;
    this.storage.set('nombre', this.nombre);
    this.storage.set('sexo', this.sexo);
    this.storage.set('edad', this.edad);
    this.storage.set('exp', this.exp);

    this._storage.getUsuario().then((us)=>{
      this.user=us;
    })    
  }

}
