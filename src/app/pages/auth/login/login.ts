import { Component, inject } from '@angular/core';
import { Auth } from '../../../core/services/auth/auth';
import { Router } from '@angular/router';

/**
 * Página de acceso, mostrada en la ruta `login`. Por ahora no tiene lógica propia.
 */
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor() {
    const auth = inject(Auth);
    const router = inject(Router);
    auth.login();
    router.navigate(['/']); 
  }
}
