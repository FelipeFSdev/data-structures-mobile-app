import { Component, OnInit } from '@angular/core';
import "@codetrix-studio/capacitor-google-auth";
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private user: any = {
    email: "",
    password: "",
  };
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  public async getToken(): Promise<any> {
    try {
      this.setUser();
      const loggedUser = await this.loginService.getAuth(this.user);
      const validationError: string | undefined = loggedUser.response ? loggedUser.response.data.detail : undefined;

      if (validationError) {
        return alert(validationError)
      }

      this.router.navigate(["/home"])
      return loggedUser.token

    } catch (error) {
      return error
    }
  }

  public setUser(): void {
    const emailIn = document.getElementById("emailIn") as HTMLIonInputElement;
    const passwordIn = document.getElementById("passwordIn") as HTMLIonInputElement;
    this.user.email = emailIn.value;
    this.user.password = passwordIn.value;
  }

}
