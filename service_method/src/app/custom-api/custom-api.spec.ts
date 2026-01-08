import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAPI } from './custom-api';

describe('CustomAPI', () => {
  let component: CustomAPI;
  let fixture: ComponentFixture<CustomAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAPI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAPI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
