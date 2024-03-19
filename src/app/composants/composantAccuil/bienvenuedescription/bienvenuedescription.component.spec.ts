import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenuedescriptionComponent } from './bienvenuedescription.component';

describe('BienvenuedescriptionComponent', () => {
  let component: BienvenuedescriptionComponent;
  let fixture: ComponentFixture<BienvenuedescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BienvenuedescriptionComponent]
    });
    fixture = TestBed.createComponent(BienvenuedescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
