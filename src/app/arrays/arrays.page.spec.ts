import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArraysPage } from './arrays.page';

describe('ArraysPage', () => {
  let component: ArraysPage;
  let fixture: ComponentFixture<ArraysPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
