import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contextual } from './contextual';

describe('Contextual', () => {
  let component: Contextual;
  let fixture: ComponentFixture<Contextual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contextual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contextual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
