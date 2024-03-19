import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexMexComponent } from './tex-mex.component';

describe('TexMexComponent', () => {
  let component: TexMexComponent;
  let fixture: ComponentFixture<TexMexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TexMexComponent]
    });
    fixture = TestBed.createComponent(TexMexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
