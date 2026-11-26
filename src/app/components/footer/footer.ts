import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Logo } from '../logo/logo';

/**
 * Pie de la aplicación. Muestra el logo en tamaño grande y el menú de
 * navegación. Se incluye en `App`, así que aparece en todas las páginas.
 */
@Component({
  selector: 'app-footer',
  imports: [Menu, Logo],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  /**
   * Año actual, que se muestra en el texto de copyright. Se calcula al crear el componente.
   */
  currentYear = new Date().getFullYear();
}
