import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.page.html',
  styleUrls: ['./arrays.page.scss'],
})
export class ArraysPage implements OnInit {
  private array: Array<number> = [12, 7];
  private title: string = "Arrays";
  private content: string = "";

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.setContent();
    const theme: string = localStorage.getItem("color-theme")!;
    theme
      ? document.body.setAttribute("color-theme", theme)
      : document.body.setAttribute("color-theme", "light");
  }

  public getContent(): string {
    return this.content
  }


  public getTitle(): string {
    return this.title
  }

  public getArray(): Array<number> {
    return this.array;
  }

  public pushElement(): Array<number> {
    const randomNumber: number = Math.floor(Math.random() * 100) + 1;
    this.array.push(randomNumber);

    return this.array;
  }

  public popElement(): Array<number> {
    this.array.pop();

    return this.array;
  }

  public getLanguage(): string {
    const lang: string | null = localStorage.getItem("language");

    if (lang) {
      return lang;
    } else {
      return "";
    }
  }

  public async setContent(): Promise<any> {
    try {
      const data = await this.pageService.getPage(this.title);
      this.content = data[0].content;
    } catch (error) {
      return error
    }
  }
}
