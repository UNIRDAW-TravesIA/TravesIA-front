import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register } from './register';

/**
 * Prueba unitaria: comprueba que `Register` se crea correctamente.
 */
describe('Register', () => {
  let component: Register;
  let fixture: ComponentFixture<Register>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register],
    }).compileComponents();

    fixture = TestBed.createComponent(Register);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
