import { Component, signal } from '@angular/core';
import { Menu } from '../menu/menu';
import { Logo } from '../logo/logo';
import { Button } from '../button/button';

/**
 * Cabecera de la aplicación. Muestra el logo, el menú de escritorio y el
 * botón «Planifica». En móvil, un botón hamburguesa despliega el menú.
 *
 * Se incluye en `App`, así que aparece en todas las páginas.
 */
@Component({
  selector: 'app-header',
  imports: [Menu, Logo, Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  /**
   * Indica si el menú desplegable móvil está abierto. Lo controla el botón hamburguesa.
   */
  isOpen = signal(false);

  /**
   * Abre el menú móvil si está cerrado, y lo cierra si está abierto.
   */
  toggleMenu(): void {
    this.isOpen.update((open) => !open);
  }

  /**
   * Cierra el menú móvil. La plantilla actual no lo llama, pero queda disponible para cerrarlo desde código.
   */
  closeMenu(): void {
    this.isOpen.set(false);
  }


}
