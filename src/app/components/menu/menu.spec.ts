import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu } from './menu';

/**
 * Prueba unitaria: comprueba que `Menu` se crea correctamente.
 */
describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu],
    }).compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
