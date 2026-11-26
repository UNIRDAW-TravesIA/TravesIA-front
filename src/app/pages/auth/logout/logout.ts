import { Component, inject } from '@angular/core';
import { Auth } from '../../../services/auth/auth';
import { Router } from '@angular/router';

/**
 * Página de cierre de sesión. El menú enlaza a `/logout` cuando hay sesión
 * iniciada (ver `Menu`), pero esa ruta no está declarada en `app.routes.ts`,
 * así que hoy el componente no se muestra.
 */
@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  // Lo hago con localStorage y un emit que notifique al resto de la app que se ha cerrado sesión
  constructor() {
    const auth = inject(Auth);
    const router = inject(Router);
    auth.logout();
    router.navigate(['/']); 
  }
}