import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfpFormComponent } from './cfp-form.component';

describe('CfpFormComponent', () => {
  let component: CfpFormComponent;
  let fixture: ComponentFixture<CfpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
