import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  isLoggedIn = signal(this.isAuthenticated());

  isAuthenticated(): boolean {
    // Logica con la autenticación del usuario, por ejemplo comprobando un token en localStorage o llamando a un servicio.
    return true;
  }

  logout(): void {
    // Lógica para cerrar sesión, por ejemplo eliminando el token de localStorage.
    this.isLoggedIn.set(false);
  }

  login(): void {
    // Lógica para iniciar sesión, por ejemplo guardando un token en localStorage.
    this.isLoggedIn.set(true);
  }

}
