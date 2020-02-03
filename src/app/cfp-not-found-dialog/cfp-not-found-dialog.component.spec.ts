import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfpNotFoundDialogComponent } from './cfp-not-found-dialog.component';

describe('CfpNotFoundDialogComponent', () => {
  let component: CfpNotFoundDialogComponent;
  let fixture: ComponentFixture<CfpNotFoundDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfpNotFoundDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfpNotFoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
