import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapsaloonComponent } from './kapsaloon.component';

describe('KapsaloonComponent', () => {
  let component: KapsaloonComponent;
  let fixture: ComponentFixture<KapsaloonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KapsaloonComponent]
    });
    fixture = TestBed.createComponent(KapsaloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
