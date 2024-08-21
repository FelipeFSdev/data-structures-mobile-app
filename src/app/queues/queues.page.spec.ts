import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QueuesPage } from './queues.page';

describe('QueuesPage', () => {
  let component: QueuesPage;
  let fixture: ComponentFixture<QueuesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
