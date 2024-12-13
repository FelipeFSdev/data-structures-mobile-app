
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  cadastroForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmaSenha: new FormControl('', Validators.required)
  });
  constructor(private userService: UserService) { }

  async createUser(): Promise<any> {
    const emailIn = document.getElementById("emailIn") as HTMLIonInputElement;
    const email = emailIn.value;
    const passIn = document.getElementById("passIn") as HTMLIonInputElement;
    const password = passIn.value;
    const newUser = { name: "qualquer", email, password }

    return await this.userService.createUser(newUser)
  }

  onSubmit() {
    const emailIn = document.getElementById("emailIn") as HTMLIonInputElement
    const emailValue = emailIn.value
    const senhaIn = document.getElementById("passIn") as HTMLIonInputElement
    const senhaValue = senhaIn.value
    const confirmSenhaIn = document.getElementById("confirmPassIn") as HTMLIonInputElement
    const confirmSenhaValue = confirmSenhaIn.value

    if (emailValue && senhaValue && confirmSenhaValue) {
      this.cadastroForm.setValue({
        email: emailValue.toString(),
        senha: senhaValue.toString(),
        confirmaSenha: confirmSenhaValue.toString()
      })
    }

    if (this.cadastroForm.valid) {
      const usuarios = JSON.parse(localStorage.getItem('usuario') || '[]');
      const { email, senha } = this.cadastroForm.value;
      usuarios.push({ email, senha })
      // Armazenando os dados no localStorage
      localStorage.setItem('usuario', JSON.stringify(usuarios));

      return alert("Usuário cadastrado com sucesso!")

    } else {
      return alert("Usuário não cadastrado. Confirme o preenchimento correto de todos os campos")
    }
  }

}
