import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { ProfileDatosRoutingModule } from './profile-datos-routing.module';
import { ProfileDatosComponent} from './profile-datos.component';

@NgModule({
    declarations: [ProfileDatosComponent],
    imports: [
        CommonModule,
        ProfileDatosRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),

    ]
})
export class ProfileDatosModule { }
