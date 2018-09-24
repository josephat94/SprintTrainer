import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Config } from 'ionic-angular';
import { RutinesPage } from '../routines/rutines';
import { ProgressPage } from '../progress/progress';
import { InformationPage } from '../information/information';
import { ConfigPage } from '../config/config';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = RutinesPage;
  tab2Root = ProgressPage;
  tab3Root = InformationPage;
  tab4Root= ConfigPage;
  



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
