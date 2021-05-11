import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindCardDialogComponent } from './bind-card-dialog.component';

describe('BindCardDialogComponent', () => {
  let component: BindCardDialogComponent;
  let fixture: ComponentFixture<BindCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindCardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
