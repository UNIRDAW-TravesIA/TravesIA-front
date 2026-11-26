import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

/**
 * Componente raíz de la aplicación. Define la estructura común de todas las
 * páginas: cabecera, contenido y pie.
 *
 * El contenido cambia según la ruta activa, que se muestra en el
 * `<router-outlet>` de la plantilla (ver `routes` en `app.routes.ts`).
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /**
   * Título de la aplicación. Actualmente no se usa en la plantilla `app.html`.
   */
  protected readonly title = signal('TravesIA');
}
