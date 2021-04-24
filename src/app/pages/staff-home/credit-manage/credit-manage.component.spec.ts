import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditManageComponent } from './credit-manage.component';

describe('CreditManageComponent', () => {
  let component: CreditManageComponent;
  let fixture: ComponentFixture<CreditManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
