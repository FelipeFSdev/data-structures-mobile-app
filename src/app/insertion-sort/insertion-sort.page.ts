import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.page.html',
  styleUrls: ['./insertion-sort.page.scss'],
})
export class InsertionSortPage implements OnInit {
  private list: Array<number> = [83, 14, 55, 9, 23, 7];
  private isSorting: boolean = false;
  private title: string = "Insertion Sort";
  private content: string = "";

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.setContent();
    const theme: string | null = localStorage.getItem("color-theme");
    theme
      ? document.body.setAttribute("color-theme", theme)
      : document.body.setAttribute("color-theme", "light");
  }

  public getList(): Array<number> {
    return this.list;
  }
  public getIsSorting(): boolean {
    return this.isSorting;
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

  public async ascendingSort(): Promise<number[]> {
    this.isSorting = true;
    const n = this.list.length;

    for (let i = 0; i < n; i++) {
      const currentIndex = this.list[i];
      let j = i - 1;
      await this.delay(500);

      while (j >= 0 && this.list[j] > currentIndex) {
        this.list[j + 1] = this.list[j];
        j--;

        await this.delay(500);
      }
      this.list[j + 1] = currentIndex;
      await this.delay(500);

    }
    this.isSorting = false;

    return this.list
  }

  public async descendingSort(): Promise<number[]> {
    const n: number = this.list.length;
    this.isSorting = true;

    for (let i = 1; i < n; i++) {
      const currentIndex = this.list[i];
      let j = i - 1;
      await this.delay(500);

      while (j >= 0 && this.list[j] < currentIndex) {
        this.list[j + 1] = this.list[j];
        j--;
        await this.delay(500);
      }
      this.list[j + 1] = currentIndex;
      await this.delay(500);

    }
    this.isSorting = false;

    return this.list;
  }

  public delay(milisseconds: number): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, milisseconds))
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
