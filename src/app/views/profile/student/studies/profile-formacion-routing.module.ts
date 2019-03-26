import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileFormacionComponent } from './profile-formacion.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileFormacionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileFormacionRoutingModule { }
