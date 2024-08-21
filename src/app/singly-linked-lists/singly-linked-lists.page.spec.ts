import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinglyLinkedListsPage } from './singly-linked-lists.page';

describe('SinglyLinkedListsPage', () => {
  let component: SinglyLinkedListsPage;
  let fixture: ComponentFixture<SinglyLinkedListsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglyLinkedListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
