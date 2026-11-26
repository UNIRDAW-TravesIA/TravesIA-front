import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * Botón reutilizable. Se muestra como un enlace `<a>` y su texto es el
 * contenido que proyecta el componente que lo usa.
 *
 * @example
 * ```html
 * <app-button link="/login" variant="rectangular">Entrar</app-button>
 * ```
 */
@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
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
  type = input<string>('button')
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
