import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertionSortPage } from './insertion-sort.page';

describe('InsertionSortPage', () => {
  let component: InsertionSortPage;
  let fixture: ComponentFixture<InsertionSortPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertionSortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
