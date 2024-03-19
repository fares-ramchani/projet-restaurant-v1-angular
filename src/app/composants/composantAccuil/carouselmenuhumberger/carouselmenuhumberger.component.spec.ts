import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselmenuhumbergerComponent } from './carouselmenuhumberger.component';

describe('CarouselmenuhumbergerComponent', () => {
  let component: CarouselmenuhumbergerComponent;
  let fixture: ComponentFixture<CarouselmenuhumbergerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselmenuhumbergerComponent]
    });
    fixture = TestBed.createComponent(CarouselmenuhumbergerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
