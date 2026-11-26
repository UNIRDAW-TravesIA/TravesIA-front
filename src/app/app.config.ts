import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/**
 * Configuración global de la aplicación. Se pasa a `bootstrapApplication` en
 * `main.ts` para registrar los servicios que necesita toda la app.
 */
export const appConfig: ApplicationConfig = {

  /**
   * Lista de providers que Angular registra al arrancar la aplicación.
   */
  providers: [
    /**
     * Registra en el navegador los listeners globales de errores no capturados,
     * para que Angular los gestione con su `ErrorHandler`.
     */
    provideBrowserGlobalErrorListeners(),
    /**
     * Registra el enrutador con la tabla de rutas de `app.routes.ts`.
     */
    provideRouter(routes)
  ]
};
