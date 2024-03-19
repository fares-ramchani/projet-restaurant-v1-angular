import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselmenutacosComponent } from './carouselmenutacos.component';

describe('CarouselmenutacosComponent', () => {
  let component: CarouselmenutacosComponent;
  let fixture: ComponentFixture<CarouselmenutacosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselmenutacosComponent]
    });
    fixture = TestBed.createComponent(CarouselmenutacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
