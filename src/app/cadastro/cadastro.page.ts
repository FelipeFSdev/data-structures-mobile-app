
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      const { email, senha } = this.cadastroForm.value;
      // Armazenando os dados no localStorage
      localStorage.setItem('usuario', JSON.stringify({ email, senha }));

      return alert("Usuário cadastrado com sucesso!")

    } else {
      return alert("Usuário não cadastrado. Confirme o preenchimento correto de todos os campos")
    }
  }

}
