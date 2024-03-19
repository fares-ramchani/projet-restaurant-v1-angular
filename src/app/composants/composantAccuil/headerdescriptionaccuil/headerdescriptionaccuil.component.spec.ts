import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderdescriptionaccuilComponent } from './headerdescriptionaccuil.component';

describe('HeaderdescriptionaccuilComponent', () => {
  let component: HeaderdescriptionaccuilComponent;
  let fixture: ComponentFixture<HeaderdescriptionaccuilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderdescriptionaccuilComponent]
    });
    fixture = TestBed.createComponent(HeaderdescriptionaccuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
