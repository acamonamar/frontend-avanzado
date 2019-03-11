import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileExperienciaComponent } from './profile-experiencia.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileExperienciaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileExperienciaRoutingModule { }
