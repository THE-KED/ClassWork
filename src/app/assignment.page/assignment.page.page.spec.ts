import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignmentPagePage } from './assignment.page.page';

describe('AssignmentPagePage', () => {
  let component: AssignmentPagePage;
  let fixture: ComponentFixture<AssignmentPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssignmentPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
