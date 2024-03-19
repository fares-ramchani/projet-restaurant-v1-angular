import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPizzaComponent } from './description-pizza.component';

describe('DescriptionPizzaComponent', () => {
  let component: DescriptionPizzaComponent;
  let fixture: ComponentFixture<DescriptionPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionPizzaComponent]
    });
    fixture = TestBed.createComponent(DescriptionPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
