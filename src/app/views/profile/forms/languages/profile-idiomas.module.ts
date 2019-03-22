import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { ProfileIdiomasRoutingModule } from './profile-idiomas-routing.module';
import { ProfileIdiomasComponent} from './profile-idiomas.component';

@NgModule({
    declarations: [ProfileIdiomasComponent],
    imports: [
        CommonModule,
        ProfileIdiomasRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),

    ]
})
export class ProfileIdiomasModule { }
