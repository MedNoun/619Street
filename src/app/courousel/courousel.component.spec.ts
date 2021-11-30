import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourouselComponent } from './courousel.component';

describe('CourouselComponent', () => {
  let component: CourouselComponent;
  let fixture: ComponentFixture<CourouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
