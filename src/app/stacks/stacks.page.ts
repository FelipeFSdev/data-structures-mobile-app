import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.page.html',
  styleUrls: ['./stacks.page.scss'],
})
export class StacksPage implements OnInit {
  private stack: Array<number> = [];
  private newElement: number = 0;
  private title: string = "Stacks";
  private content: string = "";

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.setContent();
    const theme: string | null = localStorage.getItem("color-theme");
    theme
      ? document.body.setAttribute("color-theme", theme)
      : document.body.setAttribute("color-theme", "light");
  }

  public getStack(): Array<number> {
    return this.stack;
  }
  public getTitle(): string {
    return this.title;
  }
  public getContent(): string {
    return this.content;
  }

  public async setContent(): Promise<any> {
    try {
      const data = await this.pageService.getPage(this.title);
      this.content = data[0].content;
    } catch (error) {
      return error
    }
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
