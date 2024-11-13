
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
    if (this.cadastroForm.valid) {
      const { email, senha } = this.cadastroForm.value;

      // Armazenando os dados no localStorage
      localStorage.setItem('usuario', JSON.stringify({ email, senha }));

      console.log('Usuário cadastrado com sucesso e armazenado no localStorage');
    } else {
      console.error('Formulário inválido');
    }
  }

}
