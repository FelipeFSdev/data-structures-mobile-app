import { Component, OnInit, ElementRef } from '@angular/core';
import "@codetrix-studio/capacitor-google-auth";
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any = null;
  email: string = '';
  senha: string = '';
  constructor(private router: Router) { 
    this.initializeApp();
  }

  ngOnInit() {
  }

  login() {
    const usuarios = JSON.parse(localStorage.getItem('usuario') || '[]');
  
    if (usuarios.length > 0) {
      const usuarioValido = usuarios.find((usuario: { email: string, senha: string }) =>
        usuario.email.trim().toLowerCase() === this.email?.trim().toLowerCase() &&
        usuario.senha === this.senha
      );
  
      if (usuarioValido) {
        // Login bem-sucedido, redireciona para a página principal
        this.router.navigate(['/home']);
      } else {
        alert('Credenciais inválidas! Tente novamente.');
      }
    } else {
      alert('Usuário não encontrado. Verifique o localStorage.');
    }
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
