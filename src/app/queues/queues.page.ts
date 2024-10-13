import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queues',
  templateUrl: './queues.page.html',
  styleUrls: ['./queues.page.scss'],
})
export class QueuesPage implements OnInit {
  private queue: Array<number> = [1];
  private newElement: number = 1;

  constructor() { }

  ngOnInit() {
    const theme: string | null = localStorage.getItem("color-theme");
    theme
      ? document.body.setAttribute("color-theme", theme)
      : document.body.setAttribute("color-theme", "light");
  }

  public getQueue(): Array<number> {
    return this.queue;
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
