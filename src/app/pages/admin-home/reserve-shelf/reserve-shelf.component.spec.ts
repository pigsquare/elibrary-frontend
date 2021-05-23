import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveShelfComponent } from './reserve-shelf.component';

describe('ReserveShelfComponent', () => {
  let component: ReserveShelfComponent;
  let fixture: ComponentFixture<ReserveShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveShelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
