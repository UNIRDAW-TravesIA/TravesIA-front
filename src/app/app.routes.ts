import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Planner } from './pages/planner/planner';

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
    }
];
