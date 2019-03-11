import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { ProfileExperienciaRoutingModule } from './profile-experiencia-routing.module';
import { ProfileExperienciaComponent} from './profile-experiencia.component';

@NgModule({
    declarations: [ProfileExperienciaComponent],
    imports: [
        CommonModule,
        ProfileExperienciaRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),

    ]
})
export class ProfileExperienciaModule { }
