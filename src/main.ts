import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**
 * Punto de entrada de la aplicación. Arranca Angular con el componente raíz
 * {@link App} y la configuración {@link appConfig}.
 *
 * Si el arranque falla, el error se muestra en la consola del navegador.
 */
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
