import {  Routes } from '@angular/router';
/* import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard'; */

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: './views/signin/signin.module#SigninModule',
    data: { title: 'Signin' }
  },
  {
    path: 'forgot-password',
    loadChildren: './views/forgot-password/forgot-password.module#ForgotPasswordModule',
    data: { title: 'Forgot Password' }
  },
  {
    path: 'signup',
    loadChildren: './views/signup/signup.module#SignupModule',
    data: { title: 'Signup' }
  },
  {
    path: 'admin',
    /*  component: AdminLayoutComponent, */
    /* canActivate: [AuthGuard], */
    children: [
      {
        path: 'dashboard/:id',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD' }
      },
      {
        path: 'favorites',
        loadChildren: './views/favorites/favorites.module#FavoritesModule',
        data: { title: 'Favorites', breadcrumb: 'FAVORITES' }
      },
      {
        path: 'profile/:id',
        loadChildren: './views/profile/profile.module#ProfileModule',
        data: { title: 'Material', breadcrumb: 'MATERIAL' }
      },
      {
        path: 'profile/data/:id',
        loadChildren: './views/profile/student/data/profile-datos.module#ProfileDatosModule',
        data: { title: 'Material', breadcrumb: 'MATERIAL' }
      },
      {
        path: 'profile/:id/studies/:sid',
        loadChildren: './views/profile/student/studies/profile-formacion.module#ProfileFormacionModule',
        data: { title: 'Material', breadcrumb: 'MATERIAL' }
      },
      {
        path: 'profile/:id/languages/:lid',
        loadChildren: './views/profile/student/languages/profile-idiomas.module#ProfileIdiomasModule',
        data: { title: 'Material', breadcrumb: 'MATERIAL' }
      },
      {
        path: 'offers',
        loadChildren: './views/offers/offers.module#OffersModule',
        data: { title: 'Offers', breadcrumb: 'Offers' }
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];
