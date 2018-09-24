import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {EXS_EXPRESS} from '../../../Exercises/exs';
import { Vibration } from '@ionic-native/vibration';
import { TimerProvider } from '../../../providers/timer/timer';
import { LocalNotifications } from '@ionic-native/local-notifications';
/**
 * Generated class for the QuickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quick',
  templateUrl: 'quick.html',
})
export class QuickPage {
hora= new Date(10000)
exs= EXS_EXPRESS;
ejercicio_pos=0;
regresiva=10;
timeOut:any;
inregresion:boolean=false;
inAction:boolean=false;
NEjercicio=1;
finish:boolean=false;
cronos:any;
ss=0;
mm=0
hh=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController, private vibration: Vibration, private _Timer: TimerProvider,private localNotifications: LocalNotifications) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuickPage');
  }


  ComenzarEXS(){
    this.finish=false;;
    this.vibration.vibrate(400);
   
    if(this.NEjercicio==1){
      this.regresiva=5
    }else{
      this.regresiva=2;
    }
    this.ejercicio_pos=    Math.floor(Math.random() * this.exs.length);
    console.log("Ejercicio->", this.exs[this.ejercicio_pos].nombre);
    this.inregresion=true;
this.Regresiva();

let loading = this.loadingCtrl.create({
  content: '{{regresiva}}'+this.regresiva
});







  }

  Regresiva(){
    let audio= new Audio();
    audio.src= "./assets/audios/ok.wav"
    console.log("Regresiva->", this.regresiva)
  this.timeOut=  setTimeout(() => {
     this.regresiva--;

     if(this.regresiva!=0){
      audio.load();
      audio.play();
       this.Regresiva();
     }else{

      let audio2= new Audio();
      audio2.src= "./assets/audios/just.wav"
      audio2.load();
      audio2.play();

this.inregresion=false;
      this.inAction=true;
      this.vibration.vibrate(700);
      this._Timer.setFechaInical();

      if(this.NEjercicio<6){
        this.EnEjercicio(10000)
      }else{
       this.TerminarRutina();

      }
      
     }
      }, 1000);

  }


  ActivarTimer(){

  setTimeout(() => {
  this.quitarunSegundo();  
  }, 1000);
}
  quitarunSegundo(){

    this.hora.setMilliseconds(this.hora.getDate()-1000);

    console.log("hora->",this.hora);
    
    this.ActivarTimer();
  }

  cancelar(){
    this.regresiva=-1;
    this.inregresion=false;
    this.inAction=false;

    let audio= new Audio();
    audio.src= "./assets/audios/cancel.wav"
    audio.load();
    audio.play();
clearTimeout(this.timeOut);
  }

  checarTiempo(){
  console.log("Tiempo Trans-<", this._Timer.ContarTiempo());
  }



EnEjercicio(milisegundos:number){


  this.localNotifications.schedule({
    id: this.NEjercicio,
    title: "Nuevo Ejercicio Empezado, Vamos Tu puedes!",
    text: this.exs[this.ejercicio_pos].nombre,
    data: { secret: "any any any" },
    icon: 'file://assets/imgs/trainers2.png',
    smallIcon: 'file://assets/imgs/trainers2.png',
    color: '#424242',
    sound: 'file://assets/audios/ready.wav'
    
  });
clearTimeout(this.cronos);

this.Cronometro();
  setTimeout(()=>{
    console.log("Increible lograste el primer ejercicio")
    this.NEjercicio++;
    this.ComenzarEXS();
    this.inAction=false;
  },milisegundos)
}

Cronometro(){
this.cronos=  setTimeout(()=>{
this.ss++;


if(this.ss==60){
this.ss=0;
this.mm++;

}

if(this.mm==60){
  this.mm=0;
  this.hh++;
}

    this.Cronometro();
  },1000);
}

TerminarRutina(){
  this.finish=true;
  this.regresiva=-1;
  this.inregresion=false;
  this.inAction=false;
this.NEjercicio=1;
clearTimeout(this.cronos);
clearTimeout(this.timeOut);


}

}
