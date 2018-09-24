import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Vibration } from '@ionic-native/vibration';
import { RegistroPage } from '../pages/registro/registro';
import { TabsPage } from '../pages/tabs/tabs';
import { RutinesPage } from '../pages/routines/rutines';
import { ProgressPage } from '../pages/progress/progress';
import { InformationPage } from '../pages/information/information';
import { ConfigPage } from '../pages/config/config';
import { StartRutinePage } from '../pages/routines/start-routine/start-rutine';
import { QuickPage } from '../pages/routines/quick/quick';
import { MyRutinePage } from '../pages/routines/my-routine/my-rutine';
import { RutineFormPage } from '../pages/routines/my-routine/routine-form/rutine-form';
import { IonicStorageModule } from '@ionic/storage';
import { StorageProvider } from '../providers/storage/storage';
import { TimerProvider } from '../providers/timer/timer';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { CatalogoPage } from '../pages/routines/catalogo/catalogo';
import { CatalogoDatailPage } from '../pages/routines/catalogo/catalogo-datail/catalogo-datail';

@NgModule({
  declarations: [
    MyApp,RegistroPage,
    HomePage,TabsPage,RutinesPage, ProgressPage, InformationPage,ConfigPage,CatalogoPage,CatalogoDatailPage,
    QuickPage, StartRutinePage, RutineFormPage,MyRutinePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,RegistroPage,TabsPage,RutinesPage, ProgressPage, InformationPage,ConfigPage,CatalogoPage,CatalogoDatailPage,
    HomePage, QuickPage, StartRutinePage, RutineFormPage,MyRutinePage
  ],
  providers: [
    StatusBar,
    SplashScreen,Vibration,LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    TimerProvider
  ]
})
export class AppModule {}
