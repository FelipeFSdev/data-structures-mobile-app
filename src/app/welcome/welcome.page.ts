import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  constructor() { }

  ngOnInit() {
    this.createLocalColorTheme();
    this.createLocalUser();
  }

  public createLocalColorTheme(): void {
    localStorage.setItem("color-theme", "")
    const colorTheme: string | null = localStorage.getItem("color-theme");
    colorTheme
      ? document.body.setAttribute("color-theme", colorTheme)
      : document.body.setAttribute("color-theme", "");
  }

  public createLocalUser(): void {
    localStorage.setItem("usuario", JSON.stringify({}))
  }
}
