// Importer les classes nécéssaire à la configuration des routes
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importer les class des composants à utiliser dans les routes
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

// Définir une constante pour les routes
const appRoutes: Routes = [
    {
        // Définir les routes
        path: 'dashboard',
        // Définir le composant a utiliser
        component: DashboardComponent
    },
        {
        // Définir les routes
        path: 'portfolio',
        // Définir le composant a utiliser
        component: PortfolioComponent
    },
        {
        // Définir les routes
        path: 'contacts',
        // Définir le composant a utiliser
        component: ContactsComponent
    },
    // Créer la redirection de la page d'accueil
    {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
    }

]

// Exporter une constante pour utiliser les routes
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);