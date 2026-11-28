import { Component, inject } from '@angular/core';
import { Auth } from '../../core/services/auth/auth';
import { Chat } from '../../components/chat/chat';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeCards } from '../../components/home-cards/home-cards';

/**
 * Página de inicio, mostrada en la ruta raíz (`/`).
 *
 * @remarks La clase no tiene lógica propia. La plantilla es un texto provisional.
 */
@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrl: './home.css',
    imports: [Chat, ReactiveFormsModule, HomeCards]
})

export class Home {
    
    auth = inject(Auth);
    logged = this.auth.isLoggedIn;
    
    populares: Array<any> = [
        {
            title: 'París',
            duracion: '5 días',
            descripcion: 'Descubre la ciudad del amor y la luz.',
            image: 'https://picsum.photos/200/300',
            url: '/details/paris'
        },
        {
            title: 'Roma',
            duracion: '7 días',
            descripcion: 'Explora la historia y la cultura de la capital italiana.',
            image: 'https://picsum.photos/200/300',
            url: '/details/roma'
        },
        {
            title: 'Londres',
            duracion: '6 días',
            descripcion: 'Vive la historia y la modernidad de la capital británica.',
            image: 'https://picsum.photos/200/300',
            url: '/details/londres'
        },
        {
            title: 'Barcelona',
            duracion: '4 días',
            descripcion: 'Disfruta del arte, la arquitectura y las playas de la ciudad condal.',
            image: 'https://picsum.photos/200/300',
            url: '/details/barcelona'
        }
    ];
}