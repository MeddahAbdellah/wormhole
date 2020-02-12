import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Store',
      url: '/store',
      icon: 'basket'
    },
    {
      title: 'Pickups',
      url: '/pickups',
      icon: 'airplane'
    },
    {
      title: 'Parcels',
      url: '/parcels',
      icon: 'cube'
    },
    {
      title: 'Account',
      url: '/account',
      icon: 'person'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.storage.get('user_id').then((userId) => {
        /////if(userId===null)this.router.navigateByUrl('/login'); TEST
        /////else{
          this.statusBar.styleDefault();
          this.splashScreen.hide();
        /////}
      });
    });
  }
}
