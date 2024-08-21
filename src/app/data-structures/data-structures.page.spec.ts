import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataStructuresPage } from './data-structures.page';

describe('DataStructuresPage', () => {
  let component: DataStructuresPage;
  let fixture: ComponentFixture<DataStructuresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStructuresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
