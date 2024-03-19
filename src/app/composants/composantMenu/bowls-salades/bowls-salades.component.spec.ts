import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlsSaladesComponent } from './bowls-salades.component';

describe('BowlsSaladesComponent', () => {
  let component: BowlsSaladesComponent;
  let fixture: ComponentFixture<BowlsSaladesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BowlsSaladesComponent]
    });
    fixture = TestBed.createComponent(BowlsSaladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
