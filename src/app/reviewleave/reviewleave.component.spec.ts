import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewleaveComponent } from './reviewleave.component';

describe('ReviewleaveComponent', () => {
  let component: ReviewleaveComponent;
  let fixture: ComponentFixture<ReviewleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewleaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
