import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any = null;
  constructor() { }

  ngOnInit() {
    const theme: string | null = localStorage.getItem("color-theme");
    theme
      ? document.body.setAttribute("color-theme", theme)
      : document.body.setAttribute("color-theme", "light");
  }

  toggleTheme(e: any): void {
    const isChecked = e.detail ? e.detail.checked : !document.body.hasAttribute("color-theme");
    if (isChecked) {
      localStorage.setItem("color-theme", "dark");
      const theme: string | null = localStorage.getItem("color-theme");
      theme
        ? document.body.setAttribute("color-theme", theme)
        : document.body.setAttribute("color-theme", "light")

    } else {
      localStorage.setItem("color-theme", "light");
      const theme: string | null = localStorage.getItem("color-theme");
      theme
        ? document.body.setAttribute("color-theme", theme)
        : document.body.setAttribute("color-theme", "dark");
    }
  }

  public changeLanguage(e: any): void {
    localStorage.setItem("language", e.detail.value);
  }

  public getLanguage(): string {
    const lang: string | null = localStorage.getItem("language");

    if (lang) {
      return lang;
    } else {
      return "";
    }
  }
}
