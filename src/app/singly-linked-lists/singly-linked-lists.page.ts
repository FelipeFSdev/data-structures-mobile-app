import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'app-singly-linked-lists',
  templateUrl: './singly-linked-lists.page.html',
  styleUrls: ['./singly-linked-lists.page.scss'],
})
export class SinglyLinkedListsPage implements OnInit {
  private list: Array<number> = [];
  private newNumber: number = 1;
  private title: string = "Singly Linked Lists";
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

  public addAtFirst(): Array<number> {
    this.list.unshift(this.newNumber);
    this.newNumber++

    return this.list;
  }
  public addAtLast(): Array<number> {
    this.list.push(this.newNumber);
    this.newNumber++

    return this.list;
  }
  public removeAtFirst(): Array<number> {
    this.list.shift();

    return this.list;
  }
  public removeAtLast(): Array<number> {
    this.list.pop();

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
