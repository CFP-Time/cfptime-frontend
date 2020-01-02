import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfpdetailsComponent } from './cfpdetails.component';

describe('CfpdetailsComponent', () => {
  let component: CfpdetailsComponent;
  let fixture: ComponentFixture<CfpdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfpdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
