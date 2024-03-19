import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusEnfantComponent } from './menus-enfant.component';

describe('MenusEnfantComponent', () => {
  let component: MenusEnfantComponent;
  let fixture: ComponentFixture<MenusEnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenusEnfantComponent]
    });
    fixture = TestBed.createComponent(MenusEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
