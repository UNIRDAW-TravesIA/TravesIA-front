import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Planner } from './pages/planner/planner';
import { Login } from './pages/auth/login/login';
import { About } from './pages/about/about';
import { Register } from './pages/auth/register/register';
import { Privacidad } from './pages/privacidad/privacidad';
import { Logout } from './pages/auth/logout/logout';


/**
 * Tabla de rutas de la aplicación. Angular la usa para decidir qué página
 * mostrar según la URL del navegador.
 *
 * Cada elemento indica la parte de la URL que activa la ruta (`path`), el
 * texto que aparece en la pestaña del navegador (`title`) y el componente
 * que se muestra (`component`).
 *
 * Rutas definidas:
 * - `''`: página de inicio ({@link Home}).
 * - `planner`: planificador ({@link Planner}).
 * - `sobre-nosotros`: página «Sobre nosotros» ({@link About}).
 * - `login`: página de acceso ({@link Login}).
 * - `privacidad`: política de privacidad ({@link Privacidad}).
 * - `registro`: registro de usuarios ({@link Register}).
 * - `logout`: cierre de sesión ({@link Logout}).
 */
export const routes: Routes = [
    {
        path: '',
        title: "TravesIA - Inicio",
        component: Home
    },
    {
        path: 'planner',
        title: "TravesIA - Planificador",
        component: Planner
    },
    {
        path: 'sobre-nosotros',
        title: "TravesIA - Sobre nosotros",
        component: About
    },
    {
        path: 'login',
        title: "TravesIA - acceso",
        component: Login
    },
    {
        path: 'privacidad',
        title: "TravesIA - política de privacidad",
        component: Privacidad
    },
    {
        path: 'registro',
        title: "TravesIA - registro",
        component: Register
    },
    {
        path: 'logout',
        title: "TravesIA - cerrar sesión",
        component: Logout
    }
];

