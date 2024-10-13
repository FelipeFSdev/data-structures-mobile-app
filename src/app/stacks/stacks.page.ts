import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.page.html',
  styleUrls: ['./stacks.page.scss'],
})
export class StacksPage implements OnInit {
  private stack: Array<number> = []
  private newElement: number = 0;

  constructor() { }

  ngOnInit() {
    const theme: string | null = localStorage.getItem("color-theme");
    theme
      ? document.body.setAttribute("color-theme", theme)
      : document.body.setAttribute("color-theme", "light");
  }

  public getStack(): Array<number> {
    return this.stack;
  }

  public addElement(): Array<number> {
    this.newElement += 1;
    this.stack.unshift(this.newElement);

    return this.stack;
  }

  public removeElement(): Array<number> {
    if (this.newElement > 0) {
      this.newElement -= 1;
    }
    this.stack.shift();

    return this.stack;
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
