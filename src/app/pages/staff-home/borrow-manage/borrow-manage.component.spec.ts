import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowManageComponent } from './borrow-manage.component';

describe('BorrowManageComponent', () => {
  let component: BorrowManageComponent;
  let fixture: ComponentFixture<BorrowManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
