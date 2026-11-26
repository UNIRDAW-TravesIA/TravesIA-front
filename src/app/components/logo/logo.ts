import { Component, computed, input } from '@angular/core';

/**
 * Tamaños permitidos para el logo: `sm`, `md`, `lg` y `xl`, de menor a mayor.
 */
export type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Traduce cada tamaño a las clases de Tailwind que fijan el ancho del logo. `h-auto` mantiene la proporción de la imagen.
 */
const tamanoTraducido: Record<LogoSize, string> = {
  sm: 'w-8 h-auto',
  md: 'w-16 h-auto',
  lg: 'w-32 h-auto',
  xl: 'w-48 h-auto'
};

/**
 * Muestra el logotipo de TravesIA como imagen.
 * 
 * Se usa en la cabecera y en el pie, así que aparece en todas las páginas.
 *
 * La imagen es `/images/Logotipo2.svg`, con el texto alternativo «logo».
 *
 * @example
 * ```html
 * <app-logo size="lg" customClass="my-4" />
 * ```
 * 
 */
@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
})
  
export class Logo {

  /**
   * Tamaño del logo: `sm`, `md`, `lg` o `xl`.
   *
   * @defaultValue 'md'
   */
  size = input<LogoSize>('md');
  /**
   * Clases CSS adicionales que se añaden a la imagen, separadas por espacios (por ejemplo, márgenes de Tailwind).
   *
   * @defaultValue ''
   */
  customClass = input<string>(''); 

  /**
   * Clases de Tailwind correspondientes al valor de `size`. Se recalculan cuando `size` cambia. La plantilla las combina con `customClass`.
   */
  sizeClasses = computed(() => {
    return tamanoTraducido[this.size()];
  });
}
