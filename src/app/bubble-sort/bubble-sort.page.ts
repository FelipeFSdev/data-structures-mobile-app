import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.page.html',
  styleUrls: ['./bubble-sort.page.scss'],
})
export class BubbleSortPage implements OnInit {
  private list: Array<number> = [83, 14, 55, 9, 23, 7];
  private isSorting: boolean = false;
  private title: string = "Bubble Sort";
  private content: string = "";
  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.setContent();
    const theme: string | null = localStorage.getItem("color-theme");
    theme
      ? document.body.setAttribute("color-theme", theme)
      : document.body.setAttribute("color-theme", "light");
  }

  public getContent(): string {
    return this.content;
  }
  public getTitle(): string {
    return this.title;
  }
  public getList(): Array<number> {
    return this.list;
  }
  public getIsSorting(): boolean {
    return this.isSorting;
  }

  public async setContent(): Promise<any> {
    try {
      const data = await this.pageService.getPage(this.title);
      this.content = data[0].content;
    }
    catch (error) {
      return error
    }
  }

  public delay(milisseconds: number): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, milisseconds))
  }

  public async ascendingSort(): Promise<number[]> {
    const n: number = this.list.length;
    this.isSorting = true;

    for (let i = 0; i < n; i++) {
      let currentIndex: number = 0;

      for (let j = 0; j < n; j++) {
        if (this.list[j] > this.list[j + 1]) {
          currentIndex = this.list[j];

          this.list[j] = this.list[j + 1];
          await this.delay(500);

          this.list[j + 1] = currentIndex;
          await this.delay(500);
        }
      }
    }

    this.isSorting = false;
    return this.list;
  }

  public async descendingSort(): Promise<number[]> {
    const n: number = this.list.length;
    this.isSorting = true;

    for (let i = 0; i < n; i++) {
      let currentIndex: number = 0;

      for (let j = 0; j < n; j++) {
        if (this.list[j] < this.list[j + 1]) {
          currentIndex = this.list[j];

          this.list[j] = this.list[j + 1];
          await this.delay(500);

          this.list[j + 1] = currentIndex;
          await this.delay(500);
        }
      }
    }

    this.isSorting = false;
    return this.list;
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
