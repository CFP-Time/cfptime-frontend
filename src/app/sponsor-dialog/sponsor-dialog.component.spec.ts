import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorDialogComponent } from './sponsor-dialog.component';

describe('SponsorDialogComponent', () => {
  let component: SponsorDialogComponent;
  let fixture: ComponentFixture<SponsorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
