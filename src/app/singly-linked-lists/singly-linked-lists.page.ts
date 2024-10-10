import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singly-linked-lists',
  templateUrl: './singly-linked-lists.page.html',
  styleUrls: ['./singly-linked-lists.page.scss'],
})
export class SinglyLinkedListsPage implements OnInit {
  private list: Array<number> = [];
  private newNumber: number = 1;

  constructor() { }

  ngOnInit() {
    const theme: string | null = localStorage.getItem("color-theme");
    theme
      ? document.body.setAttribute("color-theme", theme)
      : document.body.setAttribute("color-theme", "light");
  }

  public getList(): Array<number> {
    return this.list;
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

}
