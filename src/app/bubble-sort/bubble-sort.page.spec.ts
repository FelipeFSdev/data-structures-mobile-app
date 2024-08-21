import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BubbleSortPage } from './bubble-sort.page';

describe('BubbleSortPage', () => {
  let component: BubbleSortPage;
  let fixture: ComponentFixture<BubbleSortPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleSortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
