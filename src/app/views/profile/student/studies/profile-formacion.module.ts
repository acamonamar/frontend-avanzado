import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { ProfileFormacionRoutingModule } from './profile-formacion-routing.module';
import { ProfileFormacionComponent} from './profile-formacion.component';

@NgModule({
    declarations: [ProfileFormacionComponent],
    imports: [
        CommonModule,
        ProfileFormacionRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),

    ]
})
export class ProfileFormacionModule { }
