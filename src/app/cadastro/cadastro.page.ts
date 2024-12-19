
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
    email: new FormControl("", [Validators.required, Validators.email]),
    senha: new FormControl("", [Validators.required, Validators.minLength(6)]),
    confirmaSenha: new FormControl("", Validators.required)
  });
  constructor(private userService: UserService) { }

  public onSubmit() {
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
    this.createUser();
  }

  public async createUser(): Promise<any> {
    try {
      const emailIn = document.getElementById("emailIn") as HTMLIonInputElement;
      const email = emailIn.value;
      const passIn = document.getElementById("passIn") as HTMLIonInputElement;
      const password = passIn.value;
      const newUser = { name: "null", email, password }

      if (email === "") {
        return alert("User is not registered. Make sure you have filled all fields correctly.")
      }

      return await this.userService.createUser(newUser);

    } catch (error) {
      return error
    }
  }

}
