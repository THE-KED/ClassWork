import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursPagePage } from './cours.page.page';

describe('CoursPagePage', () => {
  let component: CoursPagePage;
  let fixture: ComponentFixture<CoursPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoursPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
