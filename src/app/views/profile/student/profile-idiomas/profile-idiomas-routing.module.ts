import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileIdiomasComponent } from './profile-idiomas.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileIdiomasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileIdiomasRoutingModule { }
