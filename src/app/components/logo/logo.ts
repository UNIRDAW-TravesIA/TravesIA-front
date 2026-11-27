import { Component, input } from '@angular/core';

/**
 * Tamaños permitidos para el logo: `sm`, `md`, `lg` y `xl`, de menor a mayor.
 */
export type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Muestra el logotipo de TravesIA como imagen.
 *
 * Se usa en la cabecera y en el pie, así que aparece en todas las páginas.
 *
 * La imagen es `/images/Logotipo2.svg`, con el texto alternativo «logo». El
 * tamaño lo fija el host según `size` (clases `logo-sm`, `logo-md`… de
 * `styles.css`); márgenes y demás se pasan con `class` en la invocación.
 *
 * @example
 * ```html
 * <app-logo size="lg" class="my-4" />
 * ```
 *
 */
@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
  host: {
    '[class.logo-sm]': "size() === 'sm'",
    '[class.logo-md]': "size() === 'md'",
    '[class.logo-lg]': "size() === 'lg'",
    '[class.logo-xl]': "size() === 'xl'",
  },
})

export class Logo {

  /**
   * Tamaño del logo: `sm`, `md`, `lg` o `xl`.
   *
   * @defaultValue 'md'
   */
  size = input<LogoSize>('md');
}
