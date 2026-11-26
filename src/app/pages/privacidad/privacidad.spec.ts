import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Privacidad } from './privacidad';

/**
 * Prueba unitaria: comprueba que `Privacidad` se crea correctamente.
 */
describe('Privacidad', () => {
  let component: Privacidad;
  let fixture: ComponentFixture<Privacidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Privacidad],
    }).compileComponents();

    fixture = TestBed.createComponent(Privacidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
