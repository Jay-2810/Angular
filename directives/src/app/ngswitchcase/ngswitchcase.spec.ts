import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngswitchcase } from './ngswitchcase';

describe('Ngswitchcase', () => {
  let component: Ngswitchcase;
  let fixture: ComponentFixture<Ngswitchcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngswitchcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngswitchcase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
