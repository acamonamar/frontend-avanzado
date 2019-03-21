import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDatosComponent } from './profile-datos.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileDatosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileDatosRoutingModule { }
