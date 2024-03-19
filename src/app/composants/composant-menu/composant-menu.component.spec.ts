import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantMenuComponent } from './composant-menu.component';

describe('ComposantMenuComponent', () => {
  let component: ComposantMenuComponent;
  let fixture: ComponentFixture<ComposantMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComposantMenuComponent]
    });
    fixture = TestBed.createComponent(ComposantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
