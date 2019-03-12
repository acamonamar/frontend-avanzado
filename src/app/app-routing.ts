import { Routes } from '@angular/router';
import {ProfileFormacionComponent} from './views/profile/student/profile-formacion/profile-formacion.component';
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
    loadChildren:
      './views/forgot-password/forgot-password.module#ForgotPasswordModule',
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
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD' }
      },
      {
        path: 'favorites',
        loadChildren: './views/favorites/favorites.module#FavoritesModule',
        data: { title: 'Favorites', breadcrumb: 'FAVORITES' }
      },
      {
        path: 'profile',
        loadChildren: './views/profile/profile.module#ProfileModule',
        data: { title: 'Material', breadcrumb: 'MATERIAL' }
      },
      {
        path: 'offers',
        loadChildren: './views/offers.module#OffersModule',
        data: { title: 'Offers', breadcrumb: 'Offers' }
      },
      {
        path: 'profile/data/:id',
        loadChildren: './views/profile/student/profile-datos/profile-datos.module#ProfileDatosModule',
        data: { title: 'Material', breadcrumb: 'MATERIAL' }
      },
      {
        path: 'profile/studies/:id',
        loadChildren: './views/profile/student/profile-formacion/profile-formacion.module#ProfileFormacionModule',
        data: { title: 'Material', breadcrumb: 'MATERIAL' }
      },
        {
            path: 'profile/experience/:id',
            loadChildren: './views/profile/student/profile-experiencia/profile-experiencia.module#ProfileExperienciaModule',
            data: { title: 'Material', breadcrumb: 'MATERIAL' }
        },
        {
            path: 'profile/language/:id',
            loadChildren: './views/profile/student/profile-idiomas/profile-idiomas.module#ProfileIdiomasModule',
            data: { title: 'Material', breadcrumb: 'MATERIAL' }
        },

    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];
