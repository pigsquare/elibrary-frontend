import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInputDialogComponent } from './common-input-dialog.component';

describe('CommonInputDialogComponent', () => {
  let component: CommonInputDialogComponent;
  let fixture: ComponentFixture<CommonInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonInputDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
