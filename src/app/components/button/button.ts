import { Component, input } from '@angular/core';

/**
 * Botón reutilizable. El host `<app-button>` es la caja visible y lleva los
 * estilos base (clase `boton` de `styles.css`); por dentro se muestra un enlace
 * `<a>` que ocupa todo el botón y cuyo texto es el contenido proyectado.
 *
 * Para cambiar su aspecto desde fuera, pasa clases con `class`: las utilidades
 * de Tailwind ganan a los estilos base.
 *
 * @example
 * ```html
 * <app-button link="/login" variant="rectangular" class="px-0">Entrar</app-button>
 * ```
 */
@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
  host: {
    class: 'boton',
    '[class.boton-redondo]': "variant() === 'redondo'",
    '[class.boton-rectangular]': "variant() === 'rectangular'",
    '[class.boton-disabled]': 'disabled()',
  },
})
export class Button {
  /**
   * Destino del enlace, que se pasa al atributo `href`.
   *
   * @defaultValue ''
   */
  link = input<string>('');
  /**
   * Valor del atributo `type` del elemento.
   *
   * @defaultValue 'button'
   */
  type = input<string>('button');
  /**
   * Forma del botón: `redondo` (bordes muy redondeados) o `rectangular` (bordes suaves).
   *
   * @defaultValue 'redondo'
   */
  variant = input<'redondo' | 'rectangular'>('redondo');
  /**
   * Si es `true`, el botón se ve deshabilitado (menos opacidad y cursor de no permitido).
   * Como es un `<a>`, no impide la navegación al hacer clic.
   *
   * @defaultValue false
   */
  disabled = input<boolean>(false);
}
