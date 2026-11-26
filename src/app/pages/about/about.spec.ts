import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About } from './about';

/**
 * Prueba unitaria: comprueba que `About` se crea correctamente.
 */
describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
