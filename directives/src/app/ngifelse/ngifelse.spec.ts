import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngifelse } from './ngifelse';

describe('Ngifelse', () => {
  let component: Ngifelse;
  let fixture: ComponentFixture<Ngifelse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngifelse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngifelse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
