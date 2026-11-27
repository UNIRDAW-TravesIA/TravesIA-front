import { Component, computed, input, signal, inject } from '@angular/core';
import { Auth } from '../../core/services/auth/auth';

/**
 * Elemento de la lista de navegación. Su forma se describe en `Menu.items`.
 */
interface MenuItem {
  id: number;
  show: ('logged' | 'always' | 'not-logged')[];
  text: string;
  title: string;
  link: string;
  zone: ('header' | 'footer')[];
}

/**
 * Menú de navegación. Genera una lista de enlaces a partir de {@link Menu.items}.
 *
 * Los enlaces usan `href`, no el router de Angular, así que cada clic
 * recarga la página completa.
 */
@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  host: {
    '[class.text-white]': "zone() === 'footer'",
  },
})
export class Menu {
  /**
   * Lista completa de enlaces del menú. Antes de mostrarse, cada elemento se
   * filtra por `zone` y por el estado de sesión (`show`). Cada elemento tiene:
   * - `id`: identificador único, que Angular usa para repetir el elemento en la lista.
   * - `text`: texto visible del enlace.
   * - `title`: valor del atributo `title`, que se muestra al pasar el ratón.
   * - `link`: ruta a la que lleva el enlace. Cadena vacía para la página de inicio.
   * - `show`: cuándo es visible. `'always'` sin sesión iniciada, `'logged'` solo con sesión iniciada, `'not-logged'` solo sin sesión iniciada.
   * - `zone`: dónde aparece. `'header'` (cabecera), `'footer'` (pie) o ambas.
   */
  items = signal<MenuItem[]>([
    { id: 1, show: ['always'], zone: ['header', 'footer'], text:"inicio", title: "Ir a inicio", link: "" },
    { id: 2, show: ['always'], zone: ['header', 'footer'], text: "sobre nosotros", title: "Ir a sobre nosotros", link: "/sobre-nosotros" },
    { id: 3, show: ['not-logged'], zone: ['header'], text: "iniciar sesión", title: "Ir a iniciar sesión", link: "/login" },
    { id: 4, show: ['not-logged'], zone: ['header'], text: "registro", title: "Ir a registro", link: "/registro" },
    { id: 5, show: ['always'], zone: ['footer'], text: "privacidad", title: 'Ir a privacidad', link: '/privacidad', },
    { id: 6, show: ['logged'], zone: ['header'], text: "cerrar sesión", title: "Ir a cerrar sesión", link: "/logout", }
  ]);

  auth = inject(Auth);

  /**
   * Zona en la que se muestra este menú: `header` (cabecera) o `footer` (pie).
   * Es obligatoria; si no se indica, Angular lanza un error.
   */
  zone = input.required<'header' | 'footer'>();

  /**
   * Indica si el usuario tiene sesión iniciada. Hoy es siempre `false`: nada del
   * código lo cambia todavía, así que los elementos con `show: 'logged'` no se ven.
   */
  logged = this.auth.isLoggedIn;

  /**
   * Elementos de la zona indicada en `zone`, sin tener en cuenta el estado de sesión.
   */
  visibleItems = computed(() => {
    const zone = this.zone();
    return this.items().filter((item) => item.zone.includes(zone))
  })

  /**
   * Elementos que se muestran según la zona y el estado de sesión: con sesión
   * iniciada, los de `'logged'`; sin ella, los de `'always'`.
   */
  itemsVisiblesSegunLogin = computed(() => {
    return this.visibleItems().filter(
      // Vale esto filtra que esté logado y sea para apartado logado, o que incluya olways o que no esté logado y sea para no logado.
      item => (this.logged() && item.show.includes('logged')) || (item.show.includes('always')) || (!this.logged() && item.show.includes('not-logged')));
  });

}
