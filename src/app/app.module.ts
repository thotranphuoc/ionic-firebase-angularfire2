import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddContactPage } from '../pages/add-contact/add-contact';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddContactPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddContactPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FIREBASE_PROVIDERS,
    defaultFirebase({
      apiKey: "AIzaSyC4NxrYYEzopXAcKvDQFE0vqlIY17w2YMg",
      authDomain: "menugo-9df18.firebaseapp.com",
      databaseURL: "https://menugo-9df18.firebaseio.com",
      storageBucket: "menugo-9df18.appspot.com"
    })

  ]
})
export class AppModule { }
