import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TimerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimerProvider {
FechaInicio:Date;
  constructor() {
    console.log('Hello TimerProvider Provider');
  }

  setFechaInical(){

    this.FechaInicio=new Date();
    console.log("Fecha inicial-->", this.FechaInicio);
  }

  ContarTiempo(){
let Actual:Date= new Date();

console.log("Fecha Actual->", Actual)
return (Actual.getTime()- this.FechaInicio.getTime())
  }
}
