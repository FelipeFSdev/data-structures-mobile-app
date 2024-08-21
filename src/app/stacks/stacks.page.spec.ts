import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StacksPage } from './stacks.page';

describe('StacksPage', () => {
  let component: StacksPage;
  let fixture: ComponentFixture<StacksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
