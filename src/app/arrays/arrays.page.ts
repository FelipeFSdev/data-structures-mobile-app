import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.page.html',
  styleUrls: ['./arrays.page.scss'],
})
export class ArraysPage implements OnInit {
  private array: Array<number> = [12, 7];

  constructor() { }

  ngOnInit() {
    const theme: string | null = localStorage.getItem("color-theme");
    theme
      ? document.body.setAttribute("color-theme", theme)
      : document.body.setAttribute("color-theme", "light");
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

}
