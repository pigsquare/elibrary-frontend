import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibGuideComponent } from './lib-guide.component';

describe('LibGuideComponent', () => {
  let component: LibGuideComponent;
  let fixture: ComponentFixture<LibGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
