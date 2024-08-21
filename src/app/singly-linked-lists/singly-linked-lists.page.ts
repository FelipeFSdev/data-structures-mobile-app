import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singly-linked-lists',
  templateUrl: './singly-linked-lists.page.html',
  styleUrls: ['./singly-linked-lists.page.scss'],
})
export class SinglyLinkedListsPage implements OnInit {
  private list: Array<number> = [];

  constructor() { }

  ngOnInit() {
  }

  public getList(): Array<number> {
    return this.list;
  }
  public addAtFirst(): Array<number> {
    const newNumber: number = Math.floor(Math.random() * 100) + 1;
    this.list.unshift(newNumber);

    return this.list;
  }
  public addAtLast(): Array<number> {
    const newNumber: number = Math.floor(Math.random() * 100) + 1;
    this.list.push(newNumber);

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
