import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'app-queues',
  templateUrl: './queues.page.html',
  styleUrls: ['./queues.page.scss'],
})
export class QueuesPage implements OnInit {
  private queue: Array<number> = [1];
  private newElement: number = 1;
  private title: string = "Queues";
  private content: string = "";

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.setContent();
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
  public getQueue(): Array<number> {
    return this.queue;
  }

  public async setContent(): Promise<any> {
    try {
      const data = await this.pageService.getPage(this.title);
      this.content = data[0].content;
    } catch (error) {
      return error
    }
  }

  public enqueue(): Array<number> {
    this.newElement += 1;
    this.queue.push(this.newElement);

    return this.queue;
  }

  public dequeue(): Array<number> {
    this.queue.shift()

    return this.queue;
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
