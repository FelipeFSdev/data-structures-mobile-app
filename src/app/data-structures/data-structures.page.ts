import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-structures',
  templateUrl: './data-structures.page.html',
  styleUrls: ['./data-structures.page.scss'],
})
export class DataStructuresPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const theme: string | null = localStorage.getItem("color-theme");
    theme
      ? document.body.setAttribute("color-theme", theme)
      : document.body.setAttribute("color-theme", "light");
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
