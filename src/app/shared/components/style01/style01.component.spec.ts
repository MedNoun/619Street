import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Style01Component } from './style01.component';

describe('Style01Component', () => {
  let component: Style01Component;
  let fixture: ComponentFixture<Style01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Style01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Style01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
