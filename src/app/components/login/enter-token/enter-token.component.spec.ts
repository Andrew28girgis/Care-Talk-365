import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterTokenComponent } from './enter-token.component';

describe('EnterTokenComponent', () => {
  let component: EnterTokenComponent;
  let fixture: ComponentFixture<EnterTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterTokenComponent]
    });
    fixture = TestBed.createComponent(EnterTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
