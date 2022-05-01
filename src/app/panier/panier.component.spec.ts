import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierComponent } from './panier.component';

describe('LoginComponent', () => {
  let component: PanierComponent;
  let fixture: ComponentFixture<PanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
