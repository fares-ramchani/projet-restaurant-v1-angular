import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseNaanComponent } from './cheese-naan.component';

describe('CheeseNaanComponent', () => {
  let component: CheeseNaanComponent;
  let fixture: ComponentFixture<CheeseNaanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheeseNaanComponent]
    });
    fixture = TestBed.createComponent(CheeseNaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
