import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacosComponent } from './tacos.component';

describe('TacosComponent', () => {
  let component: TacosComponent;
  let fixture: ComponentFixture<TacosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TacosComponent]
    });
    fixture = TestBed.createComponent(TacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
