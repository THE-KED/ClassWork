import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvaluationsDisplayPage } from './evaluations-display.page';

describe('EvaluationsDisplayPage', () => {
  let component: EvaluationsDisplayPage;
  let fixture: ComponentFixture<EvaluationsDisplayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EvaluationsDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
