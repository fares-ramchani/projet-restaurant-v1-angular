import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisationmapComponent } from './localisationmap.component';

describe('LocalisationmapComponent', () => {
  let component: LocalisationmapComponent;
  let fixture: ComponentFixture<LocalisationmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalisationmapComponent]
    });
    fixture = TestBed.createComponent(LocalisationmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
