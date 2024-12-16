import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'app-data-structures',
  templateUrl: './data-structures.page.html',
  styleUrls: ['./data-structures.page.scss'],
})
export class DataStructuresPage implements OnInit {
  private title: string = "Data Structures";
  private content: string = "";
  private image: string = "";
  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.setContent();
    this.setImage();
    const theme: string | null = localStorage.getItem("color-theme");
    theme
      ? document.body.setAttribute("color-theme", theme)
      : document.body.setAttribute("color-theme", "light");
  }

  public getTitle(): string {
    return this.title;
  }
  public getContent(): string {
    return this.content;
  }
  public getImage(): string {
    return this.image;
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
  public async setImage(): Promise<any> {
    try {
      const data = await this.pageService.getPage(this.title);
      this.image = data[0].image_url;
    } catch (error) {
      return error
    }
  }
}
