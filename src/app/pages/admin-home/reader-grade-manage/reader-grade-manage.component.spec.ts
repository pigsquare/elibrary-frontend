import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderGradeManageComponent } from './reader-grade-manage.component';

describe('ReaderGradeManageComponent', () => {
  let component: ReaderGradeManageComponent;
  let fixture: ComponentFixture<ReaderGradeManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderGradeManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderGradeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
