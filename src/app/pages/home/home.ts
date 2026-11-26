import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { Auth } from '../../core/services/auth/auth';

/**
 * Página de inicio, mostrada en la ruta raíz (`/`).
 *
 * @remarks La clase no tiene lógica propia. La plantilla es un texto provisional.
 */
@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrl: './home.css'
})

export class Home {
    
    auth = inject(Auth);
    logged = this.auth.isLoggedIn;
    
}