import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionTravailleComponent } from './description-travaille.component';

describe('DescriptionTravailleComponent', () => {
  let component: DescriptionTravailleComponent;
  let fixture: ComponentFixture<DescriptionTravailleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionTravailleComponent]
    });
    fixture = TestBed.createComponent(DescriptionTravailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
