import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingManageComponent } from './holding-manage.component';

describe('HoldingManageComponent', () => {
  let component: HoldingManageComponent;
  let fixture: ComponentFixture<HoldingManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldingManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
