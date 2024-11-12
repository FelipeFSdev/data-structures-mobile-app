import { Component, OnInit } from '@angular/core';
import "@codetrix-studio/capacitor-google-auth";
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any = null;
  constructor() { 
    this.initializeApp();
  }

  ngOnInit() {
  }
  
  initializeApp(){
    if(!isPlatform('capacitor')){
      GoogleAuth.initialize();
    }
  }
  async signIn() {
    let googleUser = await GoogleAuth.signIn();
    this.user = googleUser;
  }

  async singOut(){
    await GoogleAuth.signOut();
    this.user = null;
  }
}
