import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {
  Usuario: any;
  constructor(public storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }



  getUsuario() {

    let user = {
      nombre: '',
      edad: '',
      sexo: '',
      exp: '',

    }

    let promise = new Promise((resolve, reject) => {

      this.storage.get('nombre').then((val) => {
        console.log('Your name is->', val);
        user.nombre = val;

        this.storage.get('sexo').then((val) => {
          console.log('Your name is->', val);
          user.sexo = val;

          this.storage.get('edad').then((val) => {
            console.log('Your name is->', val);
            user.edad = val;

            this.storage.get('exp').then((val) => {
              console.log('Your name is->', val);
              user.exp = val;


              this.Usuario = user;




              resolve(user);

            });

          });

        });

      }).catch(() => { reject() });


      return null;
    })








    return promise;
  }


}
