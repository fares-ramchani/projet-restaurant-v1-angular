import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDescriptionComponent } from './bar-description.component';

describe('BarDescriptionComponent', () => {
  let component: BarDescriptionComponent;
  let fixture: ComponentFixture<BarDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarDescriptionComponent]
    });
    fixture = TestBed.createComponent(BarDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
